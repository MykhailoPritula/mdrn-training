<template>
  <div class="user-info">
    <div class="step-title"><span>1. Informations de facturation</span></div>
    <form @submit="submit" v-if="this.$parent.step === 1">
      <div class="field field-half">
        <label for="lastName">prénom</label>
        <input type="text" v-model="lastName" minlength="2" id="lastName" required>
      </div>
      <div class="field field-half">
        <label for="firstName">nom</label>
        <input type="text" v-model="firstName" minlength="2" id="firstName" required>
      </div>
      <div class="field">
        <label for="emailAddress">email</label>
        <input type="email" v-model="emailAddress" @change="emailAddressChange" id="emailAddress" required>
      </div>
      <div class="field">
        <label for="phoneNumber">telephone</label>
        <input type="tel" v-model="phoneNumber" @change="phoneNumberChange" @input="phoneNumberInput" minlength="10" maxlength="10" id="phoneNumber" required>
      </div>
      <div class="field">
        <input type="submit" value="suivant" :disabled="(this.valid) ? false:true" >
      </div>
    </form>
  </div>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  data(){
    return {
      valid: false,
      lastName: null,
      firstName: null,
      emailAddress: null,
      phoneNumber: null
    }
  },
  methods: {
    validation(){
      let contains = () => {
        let result = true;
        document.querySelectorAll('input').forEach(input => {
          if( input.classList.contains('no-valid') ) result = false;
        });
        return result;
      }
      if(this.firstName !== null && this.lastName !== null && this.emailAddress !== null && this.phoneNumber !== null && contains()){
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
    emailAddressChange(e){
      const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if( !emailReg.test(e.target.value) ){
        e.target.classList.add('no-valid');
        alert('Email is wrong!');
      } else {
        e.target.classList.remove('no-valid');
      }
      this.validation();
    },
    phoneNumberChange(e){
      let val = e.target.value;
      if(val.length !== 10 || isNaN(val)){
        e.target.classList.add('no-valid');
      } else {
        e.target.classList.remove('no-valid');
        this.$store.state.phone = e.target.value;
      }
      this.validation();
    },
    phoneNumberInput(e){
      let val = e.target.value;
      if(val.length !== 10 || isNaN(val)){
        e.target.classList.add('no-valid');
      } else {
        e.target.classList.remove('no-valid');
        this.$store.state.phone = e.target.value;
      }
      this.validation();
    },
    submit(e){
      e.preventDefault()

      this.$store.state.loader = true;

      const
        answers = JSON.parse( localStorage.answers ),
        userInfo = {
          lastName: this.lastName,
          firstName: this.firstName,
          emailAddress: this.emailAddress,
          phoneNumber: this.phoneNumber,
          q6: answers.q6
        }
      localStorage.userInfo = JSON.stringify(userInfo);

      Request.thinkificUsers(userInfo)
        .then(result => {
          this.$store.state.loader = false;

          Request.klaviyoIdentify(userInfo)

          snaptr('init', '8e2daa52-aa46-4ef7-88e5-72a03964197d', {
            'user_email': this.email
          });

          snaptr('track','SIGN_UP');

          fbq('track', 'InitiateCheckout', {
            content_name: 'burnit'
          });

          if(result){
            this.$store.state.modal = `
            <div class="modal-error">
              <h2>Oh no! <br> Something went wrong.</h2>
              <p>Cet e-mail est déjà utilisé dans notre système.</p>
              <p>Connectez-vous à votre profil ou utilisez une autre adresse e-mail.</p>
              <a class="btn" target="_blank" href="https://member.burnittraining.com/users/express_signin?email=${this.emailAddress}">Login</a>
            </div>`;
          } else {
            this.$parent.step = 2;

            setTimeout(()=>{
              document.querySelector('.payment-info').scrollIntoView({block: "start", behavior: "smooth"});
            }, 200);
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.user-info{

}
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
label{
  font-family: Agrandir;
  font-weight: 300;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 6px;
  display: block;
  font-size: 10px;
  line-height: 16px;
  @media(min-width:768px){
    font-size: 12px;
    margin-bottom: 8px;
  }
}
input{
  border: 1px solid #CCCCD9;
  height: 48px;
  display: block;
  width: 100%;
  padding: 0 16px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  -webkit-appearance: none;
  &:focus {
      outline: none;
    }
  &[type="submit"]{
    padding: 20px 24px;
    height: 64px;
    background: #004889;
    font-family: Agrandir;
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FDFDFD;
    @media(min-width:768px){
      width: 304px;
    }
    &:disabled{
      background: #CCCCD9;
    }
  }
  &.no-valid{
    border-color: red;
  }
}
form{
  padding-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.field{
  flex: 1 100%;
  max-width: 100%;
  &:not(:last-child){
    margin-bottom: 25px;
  }
  &-half{
    @media(min-width:768px){
      flex: 1 calc(50% - 8px);
      max-width: calc(50% - 8px);
    }
  }
}
</style>
