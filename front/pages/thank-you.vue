<template>
  <section class="thanks">
    <div class="container">
      <div class="row">
        <div class="left">
          <img src="@/assets/img/thanks/left-img.png" width="100%">
        </div>
        <div class="right">
          <h1>Merci!</h1>
          <p>Veuillez vous connecter à votre profil et commencer la formation avec moi.</p>
          <p>
            <b>Email:</b> {{ user_email }} <br>
            <b>Password:</b> {{ user_pass }}
          </p>
          <p><a class="btn btn-blue" target="_blank" :href="`https://member.burnittraining.com/users/express_signin?email=${user_email}`">Log in</a></p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      event_id: localStorage.event_id,
      user_email: localStorage.user_email,
      user_pass: localStorage.user_pass
    }
  },
  mounted(){
    localStorage.removeItem('offer')
    localStorage.removeItem('meal')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('answers')
    localStorage.removeItem('paymentInfo')
    if(!this.user_email || !this.user_pass) this.$router.push('/')
    fbq('track', 'Purchase', {
      value: `${localStorage.amount}`,
      currency: 'EUR'
    }, {
      eventID: localStorage.event_id
    });
    dataLayer.push({
      'event': 'Purchase',
      'currency': "EUR",
      'value': `${localStorage.amount}`
    });

    obApi('track', 'PurchBurnit');

    EF.conversion({
      offer_id: 61,
    });

    snaptr('init', '8e2daa52-aa46-4ef7-88e5-72a03964197d', {
      'user_email': this.user_email
    });

    snaptr('track','PURCHASE');
  }
}
</script>
<style lang="scss">
.thanks{
  padding-top: 0;
  padding-bottom: 50px;
  @media(min-width:768px){
    padding-top: 100px;
    padding-bottom: 80px;
  }
  .row{
    @media(min-width:768px){
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }
  .left{
    @media(max-width:767px){
      margin-bottom: -60px;
      text-align: right;
      img{
        max-width: 70%;
      }
    }
    @media(min-width:768px){
      max-width: 40%;
      flex: 1 40%;
    }
    @media(min-width:1440px){
      max-width: 440px;
      flex: 1 440px;
    }
  }
  .right{
    @media(min-width:768px){
      padding-left: 60px;
      max-width: 60%;
      flex: 1 60%;
    }
    @media(min-width:1440px){
      max-width: 600px;
      flex: 1 600px;
      margin-left: 200px;
      padding-left: 0;
    }
  }
  h1{
    font-family: Agrandir;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: #000000;
    font-size: 48px;
    line-height: 52px;
    margin-bottom: 16px;
    @media(min-width:768px){
      font-size: 68px;
      line-height: 72px;
      margin-bottom: 24px;
    }
  }
  p{
    font-size: 18px;
    line-height: 1.4;
    color: #000000;
    margin-bottom: 24px;
    @media(min-width:768px){
      font-size: 20px;
      margin-bottom: 40px;
    }
  }
  .btns{
    @media(min-width:768px){
      display: flex;
    }
  }
  .btn{
    height: 64px;
    line-height: 64px;
    text-decoration: none;
    font-family: Agrandir;
    font-weight: 500;
    font-size: 17px;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FDFDFD;
    background: none;
    border: none;
    width: 100%;
    display: block;
    @media(min-width:768px){
      width: 50%;
    }
    @media(min-width:1440px){
      width: 300px;
    }
    &-blue{
      background: #004889;
      &:hover{
        opacity: .7;
      }
    }
    &-link{
      color: #004889;
      text-decoration: underline;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
</style>
