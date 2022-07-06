const
  Klaviyo = require('klaviyo-node'),
  client = new Klaviyo('XDGXFa')
/*--------------------
    Identify
--------------------*/

// client.identify(req.body.params.emailAddress, {
//   '$first_name': req.body.params.firstName,
//   '$last_name': req.body.params.lastName,
//   '$url': `/checkout?q6=${req.body.params.q6}`
// })
// /*--------------------
//     Purchase
// --------------------*/
// client.track('Purchase', req.body.params.emailAddress, {
//   '$value': req.body.params.total
// })
// /*--------------------
//     MealPlan
// --------------------*/
// client.track('MealPlan', req.body.params.emailAddress, {
//   'Added': req.body.params.mealPlan
// })
// /*--------------------
//     Started Checkout
// --------------------*/
// client.track('Started Checkout', req.body.params.emailAddress, {
//   '$first_name': req.body.params.firstName,
//   '$last_name': req.body.params.lastName,
//   '$url': `/checkout?q6=${req.body.params.q6}`
// })
// /*--------------------
//     Identify
// --------------------*/
// client.track(`${req.body.params.q6}`, req.body.params.emailAddress, {
//   '$first_name': req.body.params.firstName,
//   '$last_name': req.body.params.lastName,
//   '$url': `/checkout?q6=${req.body.params.q6}`
// })
// /*--------------------
//     Female
// --------------------*/
// client.track('Female', req.body.params.emailAddress, {
//   '$first_name': req.body.params.firstName,
//   '$last_name': req.body.params.lastName,
//   '$url': `/checkout?q6=${req.body.params.q6}`
// })
// /*--------------------
//     Male
// --------------------*/
// client.track('Male', req.body.params.emailAddress, {
//   '$first_name': req.body.params.firstName,
//   '$last_name': req.body.params.lastName,
//   '$url': `/checkout?q6=${req.body.params.q6}`
// })