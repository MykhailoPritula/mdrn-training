<template>
  <div class="validation-info">
    <div class="step-title"><span>3. Validation de votre commande</span></div>
    <div class="step-content" v-if="this.$parent.step === 3">
      <div class="meal-box">
        <input type="checkbox" v-model="mealPlan" @change="mealPlanChange" id="mealPlan">
        <label for="mealPlan">Si vous souhaitez la garantie que votre poids restera stable à la fin de votre programme, n’hésitez pas à souscrire à notre option programme alimentaire personnalisé. C’est la seule façon d’être sur à 100% que vous ne reprendrez pas vos mauvaises habitudes.</label>
      </div>
      <div class="text">
        ll n’y a rien de pire que de perdre du poids puis, au bout <b>de 3-4 mois,</b> reprendre tout le poids perdu.
        <br><br>
        La raison principale de cette prise de poids c’est que nous avons tendance à reprendre une alimentation déséquilibrée.
        <br><br>
        Nous savons qu’il est parfois difficile de trouver le temps de cuisiner et de définir à l’avance un plan d’alimentation de qualité.
        <br><br>
        C’est pour cela que nous vous proposons de bâtir un plan alimentaire rien que pour vous et de vous faire suivre pendant les <b>4 premières</b> semaines par un de nos coachs afin de vous aider à obtenir les meilleurs résultats possibles.
        <br><br>
        La seule chose que vous devez faire c’est de nous indiquer vos préférences alimentaires, le poids idéal que vous souhaitez obtenir… puis de suivre le programme que nous vous proposerons. C’est simple, pas de prise de tête, pas besoin de réfléchir, vous n’avez qu’à suivre le programme établi par nos soins rien que pour vous. Vous n’aurez pas besoin de calculer vos macros ou vos calories, de peser vos aliments, ou encore de prévoir à l’avance ce que vous allez manger. Nous nous occupons de tout.
        <br><br>
        Si vous souhaitez ajouter cette option, nous vous offrons aujourd’hui une réduction <b>de 50%</b>.
      </div>
      <Cart cl="white" />
      <div class="meal-box meal-box__white">
        <input type="checkbox" v-model="mealPlan" @change="mealPlanChange" id="mealPlanWhite">
        <label for="mealPlanWhite">Laissez nous vous préparer un plan alimentaire sur mesure, en fonction de vos gouts et de vos objectifs pour seulement <b>57 euros</b>.</label>
      </div>
      <Coupon />
      <div class="btns">
        <button class="submit" @click="submit">Paiement sécurisé</button>
        <button class="back" @click="backToStep">retour à l'étape 2</button>
      </div>
    </div>
  </div>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  data(){
    return {
      mealPlan: null,
    }
  },
  methods: {
    mealPlanChange(e){
      localStorage.meal = e.target.checked;
      this.$store.state.meal = e.target.checked;
      if(e.target.checked){
        fbq('track', "MealPlanAdd", {
          content_name: 'mdrn'
        });
      }else{
        fbq('track', "MealPlanRemoved", {
          content_name: 'mdrn'
        });
      }
    },
    submitCC(){
      this.$store.state.loader = true;
      this.$store.state.loaderMSG = `Veuillez ne pas fermer la fenêtre de votre navigateur, la commande est en cours de traitement.`;

      const paymentInfo = JSON.parse(localStorage.paymentInfo);
      const userInfo = JSON.parse(localStorage.userInfo);

      let submitData = {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        emailAddress: userInfo.emailAddress,
        phoneNumber: userInfo.phoneNumber,

        campaignId: this.$store.state.campaignId,

        cardNumber: paymentInfo.cardNumber,
        cardMonth: paymentInfo.cardMonth,
        cardYear: paymentInfo.cardYear,
        cardSecurityCode: paymentInfo.cardSecurityCode,

        product1_id: this.$store.state.products[this.answers.q6].id,
        courses: this.$store.state.products[this.answers.q6].courses
      }
      if(localStorage.httpReferer) submitData.httpReferer = localStorage.httpReferer;
      if(localStorage.affId) submitData.affId = localStorage.affId;
      if(this.$store.state.meal) submitData.product2_id = this.$store.state.products[8].id;
      if(this.$store.state.meal) submitData.meal_id = this.$store.state.products[8].course;
      if(this.$store.state.couponCode) submitData.couponCode = this.$store.state.couponCode;

      Request.konnektiveCreditcardOrderImport(submitData)
        .then(result => {
          this.$store.state.loader = false;
          this.$store.state.loaderMSG = false;

          if(result.status === "ERROR"){
            this.$store.state.modal = `
              <div class="modal-error">
                <h2>Oh non! <br> Quelque chose s'est mal passé.</h2>
                <p>Nous ne sommes pas en mesure de traiter votre paiement. Veuillez réessayer.</p>
              </div>`;
          } else if(result.status === "SUCCESS"){
            localStorage.event_id = result.event_id;
            localStorage.user_email = result.user_email;
            localStorage.user_pass = result.user_pass;
            this.$router.push('/thank-you');
          }
        })
    },
    submitPP(){
      this.$store.state.loader = true;
      this.$store.state.loaderMSG = `Veuillez ne pas fermer la fenêtre de votre navigateur, la commande est en cours de traitement.`;

      const userInfo = JSON.parse(localStorage.userInfo);

      let submitData = {
        pageUrl: window.location.origin,
        campaignId: this.$store.state.campaignId,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        emailAddress: userInfo.emailAddress,
        phoneNumber: userInfo.phoneNumber,
        product1_id: this.$store.state.products[this.answers.q6].id,
        amount: localStorage.amount
      }
      if(this.$store.state.meal) submitData.product2_id = this.$store.state.products[8].id;
      if(localStorage.affId) submitData.affId = localStorage.affId;
      if(localStorage.httpReferer) submitData.httpReferer = localStorage.httpReferer;
      if(localStorage.couponCode) submitData.couponCode = localStorage.couponCode; 
      Request.konnektivePaypalOrderImport(submitData)
        .then(result => {
          this.$store.state.loader = false;
          this.$store.state.loaderMSG = false;

          if(result.status === "ERROR"){
            this.$store.state.modal = `
              <div class="modal-error">
                <h2>Oh non! <br> Quelque chose s'est mal passé.</h2>
                <p>Nous ne sommes pas en mesure de traiter votre paiement. Veuillez réessayer.</p>
              </div>`;
          } else if(result.status === "SUCCESS"){
            localStorage.orderId = result.orderId;
            localStorage.paypalUrl = result.paypalUrl;
            localStorage.sessionId = result.sessionId;
            localStorage.paypalConfirmed = 0;
            window.location.href = `${result.paypalUrl}`;
          }
        })
    },
    submit(e){
      e.preventDefault()
      let amount = document.querySelector('.cart tfoot tr:last-child td:last-child').innerHTML;
      localStorage.amount = amount.replace(/€/g, '');
      const paymentInfo = JSON.parse(localStorage.paymentInfo);
      if(paymentInfo.paymentType === "CREDITCARD") this.submitCC();
      if(paymentInfo.paymentType === "PAYPAL") this.submitPP();
    },
    backToStep(){
      localStorage.removeItem('paymentInfo')
      this.$parent.step = 2;
      document.querySelector('.payment-info').scrollIntoView({block: "start", behavior: "smooth"});
    }
  },
  computed: {
    products(){
      return this.$store.state.products;
    },
    answers(){
      return this.$store.state.answers;
    },
    meal(){
      return this.$store.state.meal;
    }
  },
  beforeCreate(){
    this.$store.dispatch("getAnswers")
    this.$store.dispatch("getMeal")
  },
  mounted(){
    if(this.meal){
      this.mealPlan = true;
    } else {
      this.mealPlan = null;
    }
  }
}
</script>
<style lang="scss" scoped>
.step-title {
  font-family: Agrandir;
  font-weight: 300;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
  border-bottom: 1px solid #000;
  margin-bottom: 40px;
  font-size: 15px;
  line-height: 20px;
  @media(min-width:768px){
    font-size: 16px;
    line-height: 24px;
  }
  @media(min-width:992px){
    font-size: 18px;
  }
  span{
    display: inline-block;
    border-bottom: 3px solid #000;
  }
}
.meal-box{
  background: #F9F3EE;
  padding: 24px 24px 24px 62px;
  position: relative;
  margin-bottom: 24px;
  input{
    display: none;
    &:checked{
      & + label{
        &:before{
          border-color: #004889;
        }
        &:after{
          display: block;
        }
      }
    }
  }
  label{
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    user-select: none;
    cursor: pointer;
    @media(min-width:576px){
      font-size: 16px;
    }
    &:before{
      content: "";
      width: 19px;
      height: 19px;
      border: 2px solid #CCCCD9;
      background: #fff;
      position: absolute;
      left: 24px; top: 24px;
    }
    &:after{
      content: "";
      width: 8px; height: 8px;
      position: absolute;
      left: 31px; top: 31px;
      background: #004889;
      display: none;
    }
  }
  &__white{
    padding: 0 0 0 40px;
    background: #fff;
    margin-bottom: 40px;
    label{
      &:before{
        left: 0; top: 0;
      }
      &:after{
        left: 8px; top: 8px;
      }
    }
  }
}
.text{
  font-family: Montserrat;
  font-size: 15px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 24px;
}
.submit{
  font-family: Agrandir;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #FDFDFD;
  padding: 10px 24px;
  background: #004889;
  border: none;
  width: 100%;
  -webkit-appearance: none;
  &:focus {
      outline: none;
    }
  @media(min-width:768px){
    flex: 1 50%;
    max-width: 50%;
  }
}
.btns{
  display: flex;
  flex-wrap: wrap;
}
.back{
  height: 64px;
  background: none;
  border: none;
  font-family: Agrandir;
  font-weight: 300;
  font-size: 13px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #000;
  width: 100%;
  @media(min-width:768px){
    flex: 1 50%;
    max-width: 50%;
  }
  &::before{
    content: '❮';
    margin-right: 10px;
  }
  &:hover{
    opacity: .7;
  }
}
</style>
