<template>
  <div class="payment-info">
    <div class="step-title"><span>2. Information de paiement</span></div>
    <form v-if="this.$parent.step === 2" @submit="submit">
      <div class="field">
        <div class="radio">
          <input type="radio" v-model="paymentType" @change="paymentTypeChange" value="CREDITCARD" id="cc" checked="checked">
          <label for="cc">
            Сarte de crédit
            <span class="img">
              <img src="@/assets/img/checkout/icon-visa.svg">
              <img src="@/assets/img/checkout/icon-mastercard.svg">
              <img src="@/assets/img/checkout/icon-discover.svg">
              <img src="@/assets/img/checkout/icon-amex.svg">
            </span>
          </label>
        </div>
        <div class="fields" v-if="paymentType === 'CREDITCARD'">
          <div class="field">
            <label for="cardNumber">Numéro de carte</label>
            <input type="text" v-model="cardNumber" @change="cardNumberChange" @input="cardNumberInput" id="cardNumber" minlength="19" maxlength="19" placeholder="•••• •••• •••• ••••" required>
          </div>
          <div class="field field-date">
            <label for="cardDate">date d'expiration</label>
            <input type="text" v-model="cardDate" @change="cardDateChange" @input="cardDateInput" id="cardDate" minlength="7" maxlength="7" placeholder="MM/YY" required>
          </div>
          <div class="field field-half">
            <label for="cardSecurityCode">cvv</label>
            <input type="text" v-model="cardSecurityCode" @change="cardSecurityCodeChange" @input="cardSecurityCodeInput" id="cardSecurityCode" minlength="3" maxlength="4" placeholder="•••" required>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="radio">
          <input type="radio" v-model="paymentType" @change="paymentTypeChange" value="PAYPAL" id="pp">
          <label for="pp">PayPal</label>
        </div>
      </div>
      <div class="field field-btn">
        <input type="submit" value="suivant" :disabled="(this.valid) ? false:true" >
      </div>
      <div class="field field-btn">
        <button @click="backToStep" class="back">retour à l'étape 1</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      valid: false,
      paymentType: 'CREDITCARD',
      cardNumber: null,
      cardDate: null,
      cardSecurityCode: null,
      cardMonth: null,
      cardYear: null
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
      if(this.paymentType === 'PAYPAL'){
        this.valid = true;
      } else if(this.paymentType === 'CREDITCARD' && (this.cardNumber !== null && this.cardMonth !== null && this.cardYear !== null && this.cardSecurityCode !== null && contains())){
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
    paymentTypeChange(e){
      this.validation()
    },
    cardNumberInput(e){
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      if(arr.length > 4) arr.splice(4, 0, ' ');
      if(arr.length > 9) arr.splice(9, 0, ' ');
      if(arr.length > 14) arr.splice(14, 0, ' ');
      this.cardNumber = arr.toString().replace(/[,]/g, '');
    },
    cardNumberChange(e){
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      if(arr.length < 16){
        e.target.classList.add('no-valid');
      } else {
        e.target.classList.remove('no-valid');
        // this.cardNumber = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('').toString().replace(/[,]/g, '');
      }
      this.validation();
    },
    cardDateInput(e){
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s\/]/g, '').split('');
      if(arr.length > 2) arr.splice(2, 0, ' / ');
      this.cardDate = arr.toString().replace(/[,]/g, '');
    },
    cardDateChange(e){
      let cur_year = Number( new Date().getFullYear().toString().substr(-2) );
      let cur_month = Number( new Date().getMonth() ) + 1;
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s\/]/g, '').split('');
      if(arr.length < 4){
        e.target.classList.add('no-valid');
      } else if( Number( e.target.value.slice(-2) ) < cur_year ){
        e.target.classList.add('no-valid');
        alert('Card year not valid!');
      } else if( Number( e.target.value.slice(-2) ) === cur_year && Number( e.target.value.substr(0, 2) ) < cur_month ){
        e.target.classList.add('no-valid');
        alert('Card month not valid!');
      } else {
        e.target.classList.remove('no-valid');
        this.cardYear = 2000 + Number(e.target.value.slice(-2));
        this.cardMonth = Number(e.target.value.substr(0, 2));
      }
      this.validation();
    },
    cardSecurityCodeInput(e){
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      this.cardSecurityCode = arr.toString().replace(/[,]/g, '');
      if(e.target.value.length < e.target.minLength){
        e.target.classList.add('no-valid');
      } else {
        e.target.classList.remove('no-valid');
        this.cardSecurityCode = e.target.value;
      }
      this.validation();
    },
    cardSecurityCodeChange(e){
      if(e.target.value.length < e.target.minLength){
        e.target.classList.add('no-valid');
      } else {
        e.target.classList.remove('no-valid');
        this.cardSecurityCode = e.target.value;
      }
      this.validation();
    },
    submit(e){
      e.preventDefault()

      fbq('track', 'AddPaymentInfo', {
        content_name: 'mdrn'
      });

      const paymentInfo = {
        paymentType: this.paymentType
      }

      if(this.paymentType === "CREDITCARD"){
        let cardNumber = this.cardNumber.replace(/\s/g, '');
        paymentInfo.cardNumber = cardNumber;
        paymentInfo.cardSecurityCode = this.cardSecurityCode;
        paymentInfo.cardMonth = this.cardMonth;
        paymentInfo.cardYear = this.cardYear;
      }

      localStorage.paymentInfo = JSON.stringify(paymentInfo)
      /*
        if CC -> go to next step
        if PP -> go to next step
      */
      this.$parent.step = 3;
      setTimeout(()=>{
        document.querySelector('.validation-info').scrollIntoView({block: "start", behavior: "smooth"});
      }, 200);
    },
    backToStep(){
      localStorage.removeItem('userInfo')
      this.$parent.step = 1;
      document.querySelector('.user-info').scrollIntoView({block: "start", behavior: "smooth"});
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
form{
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 60px;
  @media(min-width:768px){
    padding-bottom: 80px;
  }
}
label{
  font-family: Agrandir;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 8px;
}
input{
  border: 1px solid #CCCCD9;
  height: 48px;
  display: block;
  width: 100%;
  padding: 0 16px;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  -webkit-appearance: none;
  &:focus {
      outline: none;
    }
  @media(min-width:768px){
    font-size: 16px;
    line-height: 24px;
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
    width: 100%;
    // @media(min-width:768px){
    //   width: 304px;
    // }
    &:disabled{
      background: #CCCCD9;
    }
  }
  &.no-valid{
    border-color: red;
  }
}
.radio{
  border: 1px solid #CCCCD9;
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
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    display: flex;
    align-items: center;
    position: relative;
    padding: 16px 16px 16px 50px;
    cursor: pointer;
    text-transform: none;
    font-family: Montserrat;
    margin-bottom: 0;
    @media(min-width:768px){
      padding: 24px 24px 24px 66px;
      font-size: 20px;
    }
    &:before{
      content: "";
      display: block;
      width: 19px;
      height: 19px;
      border: 2px solid #CCCCD9;
      margin-right: 20px;
      position: absolute;
      left: 16px; top: 50%;
      transform: translate(0, -50%);
      @media(min-width:768px){
        left: 26px;
      }
    }
    &:after{
      content: "";
      display: none;
      width: 8px; height: 8px;
      background: #004889;
      position: absolute;
      left: 24px; top: 50%;
      transform: translate(0, -50%);
      @media(min-width:768px){
        left: 34px;
      }
    }
    .img{
      margin-left: auto;
      display: flex;
      img{
        height: 24px;
        width: auto;
        display: block;
        // @media(min-width:768px){
        //   height: 24px;
        // }
        &:not(:first-child){
          margin-left: 6px;
          @media(min-width:768px){
            margin-left: 10px;
          }
        }
      }
    }
  }
}
.fields{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #CCCCD9;
  border-left: 1px solid #CCCCD9;
  border-right: 1px solid #CCCCD9;
  padding: 24px;
}
.field{
  flex: 1 100%;
  margin-bottom: 24px;
  &-half{
    flex: 1 calc(50% - 35px);
    max-width: calc(50% - 35px);
    margin-bottom: 0;
  }
  &-btn{
    margin-bottom: 0;
    @media(min-width:768px){
      flex: 1 calc(50% - 4px);
      max-width: calc(50% - 4px);
    }
  }
  &-date{
    flex: 1 calc(50% - 4px);
    max-width: calc(50% - 4px);
    margin-bottom: 0;
    width: 100%;
    max-width: 134px;
    text-align: center;
  }
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
  &::before{
    content: '❮';
    margin-right: 10px;
  }
  &:hover{
    opacity: .7;
  }
}
</style>
