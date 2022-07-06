<template>
  <div class="coupon">
    <div class="coupon-btn" @click="openCouponForm">Vous avez un code de réduction?</div>
    <form @submit="submit" class="coupon-form" v-if="couponForm">
      <label for="couponCode">Numéro de code</label>
      <input type="text" v-model="couponCode" id="couponCode">
      <input @click="submit" type="submit" value="CALCULEZ">
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      couponForm: false,
      couponCode: null,
      coupon_err: false,
      modal: false
    }
  },
  computed: {
    coupons(){
      return this.$store.state.coupons;
    }
  },
  methods: {
    openCouponForm(){
      if(this.couponForm){
        this.couponForm = false;
      } else {
        this.couponForm = true;
      }
    },
    submit(e){
      e.preventDefault()
      if(this.couponForm){
        this.couponForm = false;
      } else {
        this.couponForm = true;
      }
      this.coupons.forEach(coupon => {
        if(coupon.name === this.couponCode){
          this.$store.state.couponCode = this.couponCode;
          localStorage.couponCode = this.$store.state.couponCode
          this.$store.state.couponDiscount = coupon.discount;
          this.$store.state.amountDiscount = Number(this.$store.state.amount) - ( Number(this.$store.state.amount) * Number(this.$store.state.couponDiscount) / 100 )
        }
      });
      if(!this.$store.state.couponCode){
        this.couponForm = true;
        this.$store.state.modal = `<div class="modal-error">
          <h2>Oh non! <br> Quelque chose s'est mal passé.</h2>
          <p>C'est le mauvais code promo. Veuillez insérer le bon code de coupon..</p>
          </div>`;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.coupon{
  margin-bottom: 40px;
  &-btn{
    font-family: Agrandir;
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-decoration: underline;
    text-transform: uppercase;
    color: #004889;
    cursor: pointer;
    @media(min-width:768px){
      font-size: 18px;
    }
    &:hover{
      text-decoration: none;
    }
  }
  &-form{
    padding-top: 16px;
    padding-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    label{
      font-family: Agrandir;
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #000000;
      display: block;
      width: 100%;
      margin-bottom: 8px;
      flex: 1 100%;
    }
    input{
      &[type="text"]{
        width: 100%;
        height: 56px;
        border: 1px solid #CCCCD9;
        margin-right: 8px;
        flex: 1 60%;
        max-width: 60%;
        padding: 0 15px;
        @media(min-width:768px){
          flex: 1 215px;
          max-width: 215px;
        }
      }
      &[type="submit"]{
        background: none;
        display: block;
        width: 100%;
        height: 56px;
        border: 1px solid #004889;
        font-family: Agrandir;
        font-weight: 500;
        font-size: 17px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #004889;
        padding: 0;
        flex: 1 calc(40% - 8px);
        max-width: calc(40% - 8px);
        @media(min-width:768px){
          flex: 1 130px;
          max-width: 130px;
        }
      }
    }
  }
}
</style>
