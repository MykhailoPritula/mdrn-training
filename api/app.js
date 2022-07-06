/*-------------------------------------------
START Global Consts
-------------------------------------------*/
const
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  http = require('http'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 9100,
  app = express(),
  server = http.createServer(app),
  request = require("request"),
  Klaviyo = require('klaviyo-node'),
  client = new Klaviyo('XDGXFa')
/*-------------------------------------------
END Global Consts
-------------------------------------------*/
/*-------------------------------------------
START Functions
-------------------------------------------*/
const
  // facebook = require('./facebook/'),
  klaviyo = require('./klaviyo/'),
  konnektive = require('./konnektive/'),
  nodemailer = require('./nodemailer/'),
  thinkific = require('./thinkific/')
/*-------------------------------------------
END Functions
-------------------------------------------*/
/*-------------------------------------------
              Path settings
-------------------------------------------*/
const frontPath = path.join(__dirname, '../front/dist/')

app.use(history())
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.set("view options", {layout: false})
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.join(frontPath))
app.set('trust proxy', true)
app.use(express.static(frontPath))
app.use(express.json())

/*-------------------------------------------
START getPass
-------------------------------------------*/
const getPass = () => {
  let password = '',
    length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}
/*-------------------------------------------
END getPass
-------------------------------------------*/

let session_id,
  ipAddress = '52.47.136.75',
  loginId = 'burnitapi',
  password = '9J8iak45'

/*-------------------------------------------
    Routes
-------------------------------------------*/

app.get('/', (req, res) => {
  res.render(path.join(frontPath+'index.html'));
})

app.post('/konnektive/creditcard/order/import', (req, res) => {

  const
    pass = getPass(),
    ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    head = req.headers['user-agent']
    data = {
      loginId: loginId,
      password: password,
      firstName: req.body.params.firstName,
      lastName: req.body.params.lastName,
      emailAddress: req.body.params.emailAddress,
      phoneNumber: req.body.params.phoneNumber,
      address1: '516 Walden Dr, Beverly Hills',
      city: 'Los Angeles',
      country: 'US',
      postalCode: '90210',
      state: 'CA',
      billShipSame: '1',
      ipAddress: ipAddress,
      campaignId: req.body.params.campaignId,
      paySource: 'CREDITCARD',
      cardNumber: req.body.params.cardNumber,
      cardMonth: req.body.params.cardMonth,
      cardYear: req.body.params.cardYear,
      cardSecurityCode: req.body.params.cardSecurityCode,
      product1_id: req.body.params.product1_id,
      httpReferer: req.body.params.httpReferer
    }

  if(req.body.params.product2_id) data.product2_id = req.body.params.product2_id;
  if(req.body.params.couponCode) data.couponCode = req.body.params.couponCode;
  if(req.body.params.affId) data.affId = req.body.params.affId;

  let orderId = false;

  konnektive('order/import/', 'POST', data)
    .then(chargeData => {
      let charge = JSON.parse(chargeData.body);
      if( charge.result === "SUCCESS" ){
        // Add user to thinkific
        orderId = charge.message.orderId;
        return thinkific('users', 'POST', {
          first_name: req.body.params.firstName,
          last_name: req.body.params.lastName,
          email: req.body.params.emailAddress,
          password: pass
        })
      } else {
        throw JSON.stringify({
          status: charge.result,
          msg: charge.message
        });
      }
    })
    .then(userData => {
      let user = JSON.parse(userData.body);

      let courses = req.body.params.courses;
      if(req.body.params.product2_id){
        // Send Klaviyo Purchase
        client.track('Purchase', req.body.params.emailAddress,{
          '$value': 114
        });
        // Send facebook
        // facebook(req.body.params.emailAddress, 114, req.body.params.full_path, ip, head, orderId)
        // Add meal plan
        courses.push(req.body.params.meal_id)
        //Track Meal plan
        client.track('MealPlan', req.body.params.emailAddress,{
          'Added': req.body.params.product2_id
        })
      } else {
        // Send Klaviyo Purchase
        client.track('Purchase', req.body.params.emailAddress,{
          '$value': 57
        });
        // Send facebook
        // facebook(req.body.params.emailAddress, 57, req.body.params.full_path, ip, head, orderId)
      }
      courses.forEach(id => {
        thinkific('enrollments', 'POST', {
          course_id: id,
          user_id: user.id
        })
      })

      let fullName = `${req.body.params.firstName} ${req.body.params.lastName}`
      nodemailer.welcome(req.body.params.emailAddress, pass, fullName)

      konnektive('order/confirm/', 'POST', {
        loginId: loginId,
        password: password,
        orderId: orderId
      })

      res.send({
        'status': 'SUCCESS',
        'user_email': req.body.params.emailAddress,
        'user_pass': pass,
        'event_id': orderId
      })
    })
    .catch(err => { // Get error code
      console.log(err);
      res.send(err);
    });
})

app.post('/konnektive/paypal/order/import', (req, res) => {
  konnektive(`landers/clicks/import/`, 'POST', {
    loginId: loginId,
    password: password,
    pageType: "checkoutPage",
    requestUri: `${req.body.params.pageUrl}/checkout`,
    campaignId: req.body.params.campaignId,
    ipAddress: ipAddress,
    httpReferer: req.body.params.httpReferer
  })
    .then(click => {
      let clickData = JSON.parse(click.body);
      session_id = clickData.message.sessionId;
      if(session_id){

        let data = {
          loginId: loginId,
          password: password,
          sessionId: session_id,
          campaignId: req.body.params.campaignId,
          pageType: 'leadPage',
          billShipSame: 1,
          firstName: req.body.params.firstName,
          lastName: req.body.params.lastName,
          emailAddress: req.body.params.emailAddress,
          phoneNumber: req.body.params.phoneNumber,
          address1: '516 Walden Dr, Beverly Hills',
          city: 'Los Angeles',
          country: 'US',
          postalCode: '90210',
          state: 'CA'
        }

        if(req.body.params.affId) data.affId = req.body.params.affId;
        return konnektive('leads/import/', 'POST', data)
      }
    })
    .then(lead => {
      let leadData = JSON.parse(lead.body);
      if( leadData.result == 'ERROR' ){
        // throw leadData;
        res.send(leadData)
      } else {
        const data = {
            loginId: loginId,
            password: password,
            sessionId: session_id,
            orderId: leadData.message.orderId,
            campaignId: req.body.params.campaignId,
            paypalBillerId: 2,
            paySource: 'PAYPAL',
            salesUrl: `${req.body.params.pageUrl}/checkout`,
            redirectsTo: `${req.body.params.pageUrl}/checkout`,
            errorRedirectsTo: `${req.body.params.pageUrl}/checkout`,
            product1_id: req.body.params.product1_id,
            amount: req.body.params.amount
          }
          
        if(req.body.params.product2_id){
          data.product2_id = req.body.params.product2_id;
          data.orderItems = `{"${req.body.params.product1_id}": 1, "${req.body.params.product2_id}": 1}`;
        } else {
          data.orderItems = `{"${req.body.params.product1_id}": 1}`;
        }
        if(req.body.params.couponCode) data.couponCode = req.body.params.couponCode;
        return konnektive('order/import/', 'POST', data)
      }
    })
    .then(order => {
      let orderData = JSON.parse(order.body);
      res.send({
        status: 'SUCCESS',
        orderId: orderData.message.orderId,
        paypalUrl: orderData.message.paypalUrl,
        sessionId: session_id
      });
    })
    .catch(err => res.send(err))
})

app.post('/konnektive/paypal/order/confirm', (req, res) => {
  const
    pass = getPass(),
    ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    head = req.headers['user-agent'],
    data = {
      token: req.body.params.token,
      payerId: req.body.params.payerId,
      loginId: loginId,
      password: password,
      sessionId: req.body.params.sessionId,
      orderId: req.body.params.orderId,
      campaignId: req.body.params.campaignId,
      paypalBillerId: 2,
      product1_id: req.body.params.product1_id,
      amount: req.body.params.amount
    }

  if(req.body.params.product2_id){
    data.product2_id = req.body.params.product2_id;
    data.orderItems = `{"${req.body.params.product1_id}": 1, "${req.body.params.product2_id}": 1}`;
  } else {
    data.orderItems = `{"${req.body.params.product1_id}": 1}`;
  }
  if(req.body.params.couponCode) data.couponCode = req.body.params.couponCode;
  konnektive('transactions/confirmPaypal/', 'POST', data)
    .then(chargeData => {
      let charge = JSON.parse(chargeData.body);
      if( charge.result === "SUCCESS" ){
        // Add user to thinkific
        return thinkific('users', 'POST', {
          first_name: req.body.params.firstName,
          last_name: req.body.params.lastName,
          email: req.body.params.emailAddress,
          password: pass
        })
      } else {
        throw JSON.stringify({
          status: charge.result,
          msg: charge.message
        });
      }
    })
    .then(userData => {
      let user = JSON.parse(userData.body);

      let courses = req.body.params.courses;
      if(req.body.params.product2_id){
        // Send Klaviyo Purchase
        client.track('Purchase', req.body.params.emailAddress,{
          '$value': 114
        });
        // Send facebook
        // facebook(req.body.params.emailAddress, 114, req.body.params.full_path, ip, head, req.body.params.orderId)
        // Add meal plan
        courses.push(req.body.params.meal_id)
        //Track Meal plan
        client.track('MealPlan', req.body.params.emailAddress,{
          'Added': req.body.params.product2_id
        })
      } else {
        // Send Klaviyo Purchase
        client.track('Purchase', req.body.params.emailAddress,{
          '$value': 57
        });
        // Send facebook
        // facebook(req.body.params.emailAddress, 57, req.body.params.full_path, ip, head, req.body.params.orderId)
      }

      courses.forEach(id => {
        thinkific('enrollments', 'POST', {
          course_id: id,
          user_id: user.id
        })
      })

      let fullName = `${req.body.params.firstName} ${req.body.params.lastName}`
      nodemailer.welcome(req.body.params.emailAddress, pass, fullName);

      konnektive('order/confirm/', 'POST', {
        loginId: loginId,
        password: password,
        orderId: req.body.params.orderId
      })

      res.send({
        'status': 'SUCCESS',
        'user_email': req.body.params.emailAddress,
        'user_pass': pass,
        'event_id': req.body.params.orderId
      })
    })
    .catch(err => { // Get error code
      console.log(err);
      res.send(err);
    });
})

app.post('/konnektive/campaign/coupons', (req, res) => {
  konnektive('campaign/query/', 'POST', {
    loginId: loginId,
    password: password,
    campaignId: req.body.params.campaignId
  })
    .then(result => {
      console.log(JSON.parse(result.body))
      const
        campaign = JSON.parse(result.body),
        coupons = [],
        couponsData = campaign.message.data[req.body.params.campaignId].coupons

      couponsData.forEach(coupon => {
        coupons.push({
          name: coupon.couponCode,
          discount: Number(coupon.discountPerc) * 100
        })
      })

      res.send(coupons)
    })
})

app.post('/thinkific/users', (req, res) => {
  thinkific(`users?query[email]=${req.body.params.emailAddress}`, 'GET', false)
    .then(response => {
      const result = JSON.parse(response.body)
      if(result.items.length > 0){
        res.send(true);
      } else {
        res.send(false);
      }
    })
    .catch(err => {
      console.dir(err)
      sendEmail.errorlog(err);
      res.send(err);
    })
});

app.post('/klaviyo/identify', (req, res) => {
  client.identify(req.body.params.emailAddress, {
    '$first_name': req.body.params.firstName,
    '$last_name': req.body.params.lastName,
    '$phone': req.body.params.phoneNumber,
    '$url': `/checkout?q6=${req.body.params.q6}`
  });
  client.track('Started Checkout', req.body.params.emailAddress,{
    '$first_name': req.body.params.firstName,
    '$last_name': req.body.params.lastName,
    '$phone': req.body.params.phoneNumber,
    '$url': `/checkout?q6=${req.body.params.q6}`
  });
  client.track(`${req.body.params.q6}`, req.body.params.emailAddress,{
    '$first_name': req.body.params.firstName,
    '$last_name': req.body.params.lastName,
    '$phone': req.body.params.phoneNumber,
    '$url': `/checkout?q6=${req.body.params.q6}`
  });
  let female_arr = ['1', '2', '3'];
  if( female_arr.includes(`${req.body.params.q6}`) ){
    client.track(`Female`, req.body.params.emailAddress,{
      '$first_name': req.body.params.firstName,
      '$last_name': req.body.params.lastName,
      '$phone': req.body.params.phoneNumber,
      '$url': `/checkout?q6=${req.body.params.q6}`
    });
  } else {
    client.track(`Male`, req.body.params.emailAddress,{
      '$first_name': req.body.params.firstName,
      '$last_name': req.body.params.lastName,
      '$phone': req.body.params.phoneNumber,
      '$url': `/checkout?q6=${req.body.params.q6}`
    });
  }
})

/*-------------------------------------------
START Server Listen
-------------------------------------------*/
// live mode
server.listen(port, () => console.log(`Server has been started on port ${port}`) )

// dev mode
// const reload = require('reload')
// reload(app).then(reloadReturned => server.listen(port, () => console.log(`Server has been started on http://localhost:${port}`)))
/*-------------------------------------------
END Server Listen
-------------------------------------------*/