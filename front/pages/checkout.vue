<template>
  <section class="checkout">
    <div class="container">
      <div class="title-wrap">
        <div class="title-sub">Checkout</div>
        <div class="title">Ce que vous obtenez <br> aujourd’hui.</div>
      </div>
      <div class="row">
        <div class="right">
          <Cart cl="gray" v-if="answers.q1" />
          <Secure />
        </div>
        <div class="left">
          <UserInfo />
          <PaymentInfo />
          <ValidationInfo />
          <!-- <Secure v-if="winSize > 768" /> -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  data(){
    return {
      step: 1,
      // winSize: 0,
      orderId: null,
      sessionId: null,
      token: null,
      payerId: null,
      status: null
    }
  },
  beforeCreate() {
    if(this.$route.query.q6){
      const
        q6 = Number(this.$route.query.q6),
        answers = {
          q1: false,
          q2: false,
          q3: false,
          q4: false,
          q5: false,
          q6: false
        }
      if(q6 > 3 && q6 < 8){
        answers.q1 = 'male';
        answers.q6 = q6;
      } else if(q6 > 0 && q6 < 4){
        answers.q1 = 'female';
        answers.q6 = q6;
      } else {
        this.$router.push('/');
      }
      localStorage.answers = JSON.stringify(answers);
    }
    this.$store.dispatch("getCoupons")
    this.$store.dispatch("getAnswers")
    this.winSize = window.screen.width;
    window.addEventListener("resize", () => {
      this.winSize = window.screen.width;
    });
  },
  created(){
    if(this.$route.query.q6){
      const answers = localStorage.answers;
      this.answers.q1 = answers.q1;
      this.answers.q6 = answers.q6;
    }
    if(localStorage.userInfo) this.step = 2;
    if(localStorage.paymentInfo) this.step = 3;
    fbq('track', 'InitiateCheckout', {
      content_name: 'mdrn'
    });
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    answers() {
      return this.$store.state.answers;
    }
  },
  methods: {
    confirmPP(){
      this.$store.state.loader = true;
      this.$store.state.loaderMSG = `Veuillez ne pas fermer la fenêtre de votre navigateur, la commande est en cours de traitement.`;
      const userInfo = JSON.parse(localStorage.userInfo);

      let submitData = {
        token: this.token,
        payerId: this.payerId,
        sessionId: this.sessionId,
        orderId: this.orderId,
        campaignId: this.$store.state.campaignId,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        emailAddress: userInfo.emailAddress,
        phoneNumber: userInfo.phoneNumber,
        product1_id: this.$store.state.products[this.answers.q6].id,
        amount: localStorage.amount,
        full_path: localStorage.fullPath,
        courses: this.$store.state.products[this.answers.q6].courses
      }
      if(this.$store.state.meal){
        submitData.product2_id = this.$store.state.products[8].id;
        submitData.meal_id = this.$store.state.products[8].course;
      }
      if(localStorage.couponCode) submitData.couponCode = localStorage.couponCode;

      Request.konnektivePaypalOrderConfirm(submitData)
        .then(result => {
          this.$store.state.loader = false;
          this.$store.state.loaderMSG = false;
          if(result.status === "ERROR"){
            this.$store.state.modal = `
              <div class="modal-error">
                <h2>Oh non! <br> Quelque chose s'est mal passé.</h2>
                <p>${result.msg}</p>
              </div>`;
          } else if(result.status === "SUCCESS"){
            localStorage.event_id = result.event_id;
            localStorage.user_email = result.user_email;
            localStorage.user_pass = result.user_pass;
            this.$router.push('/thank-you');
          }
        })
    },
  },
  mounted(){
    this.status = process.env.NODE_ENV;

    if(this.$route.query.paypalAccept == '1' && localStorage.paypalConfirmed == 0) {
      localStorage.paypalConfirmed = 1;
      this.orderId = localStorage.orderId;
      this.sessionId = localStorage.sessionId;
      this.token = this.$route.query.token;
      this.payerId = this.$route.query.PayerID;
      this.confirmPP();
    } 
  }
}
</script>
<style lang="scss">
.checkout{
  padding-top: 55px;
  padding-bottom: 100px;
  @media(min-width:768px){
    padding-top: 80px;
    padding-bottom: 160px;
  }
}
.title{
  font-family: Agrandir;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #000000;
  font-size: 48px;
  line-height: 52px;
  margin-bottom: 40px;
  @media(min-width:768px){
    font-size: 68px;
    line-height: 72px;
    margin-bottom: 80px;
  }
  @media(max-width:767px){
    br{
      display: none;
    }
  }
  &-wrap{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
  &-sub{
    font-family: Agrandir;
    font-weight: 500;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    font-size: 16px;
    line-height: 24px;
    order: 2;
    @media(max-width:767px){
      margin-bottom: 24px;
    }
    @media(min-width:768px){
      font-size: 20px;
      line-height: 24px;
      text-align: right;
    }
  }
}
.row{
  @media(min-width:768px){
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}
.left{
  @media(min-width:768px){
    flex: 1 50%;
    max-width: 50%;
  }
}
.right{
  @media(min-width:768px){
    flex: 1 calc(50% - 24px);
    max-width: calc(50% - 24px);
    order: 2;
  }
  @media(min-width:1200px){
    flex: 1 calc(50% - 96px);
    max-width: calc(50% - 96px);
  }
}
</style>
