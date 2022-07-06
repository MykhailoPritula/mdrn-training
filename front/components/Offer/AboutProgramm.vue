<template>
  <section class="about">
    <div class="container">
      <div class="top">
        <div class="title">Commandez votre programme <br> d'entraînement personnel.</div>
        <div class="sub">description du  <br> programme</div>
      </div>
      <div class="text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
      <div class="sub-text"><span>Note! </span>Tous nos produits sont proposés sous forme digitale et disponibles dès validation de votre paiement</div>
      <div class="content"> 
        <div class="gallery">
          <div v-animate-onscroll="'animated fadeInLeft'" class="left">
            <img :src="require(`@/assets/img/offer-${this.answers.q1}/phone-img.png`)">
            <div class="title">votre programme personnel</div>
          </div>
          <img class="img-plus" src="@/assets/img/offer-female/plus.png">
          <div v-animate-onscroll="'animated fadeInRight'" class="right">
            <img :src="require(`@/assets/img/offer-${this.answers.q1}/group-mobile-img.png`)">
            <div class="title">Bonus incroyable</div>
          </div>
        </div>
        <div class="price">
          <div class="title">Prix public 240.00€</div>
          <button @click="goToCheckout" class="bg" :class="`bg-${answers.q1}`"><span>DISPONIBLE UNIQUEMENT POUR 57€</span></button>
          <button @click="goToCheckout" class="btn-fixed bg" :class="`bg-${answers.q1}`"><span>DISPONIBLE UNIQUEMENT POUR 57€</span></button>
          <div class="sub">Paiement 100% sécurisé</div>
          <div class="icons">
            <img src="@/assets/img/offer-female/payment-icons.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    goToCheckout(){
      localStorage.offer = true;
      this.$router.push('/checkout') 
    }
  },
  computed: {
    answers() {
      return this.$store.state.answers;
    }
  },
  beforeCreate() {
    this.$store.dispatch("getAnswers")
  }
}
</script>

<style lang="scss" scoped>
.about{
  margin-bottom: 160px;
}
.top{
  display: flex;
  justify-content: space-between;
  @media(max-width: 767px){
    flex-direction: column-reverse;
  }
}
.title{
  font-family: Agrandir;
  font-size: 34px;
  line-height: 48px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #000;
  @media(min-width:576px){
    font-size: 40px;
  }
  @media(min-width: 992px){
    font-size: 60px;
    line-height: 64px;
  }
}
.sub{
  font-family: Agrandir;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000;
  text-align: right;
  @media(max-width: 767px){
    margin-bottom: 24px;
    text-align: left;
  }
}
.text{
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  margin-top: 24px;
  margin-bottom: 16px;
  padding-left: 160px;
  @media(max-width:768px){
    padding-left: 0;
  }
  @media(min-width: 1200px){
    margin-right: 300px;
  }
}
.sub-text{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  padding-left: 160px;
  color: rgb(99, 98, 98);
  margin-bottom: 40px;
  @media(max-width:768px){
    padding-left: 0;
  }
  @media(min-width: 1200px){
    margin-bottom: 80px;
  }
  span{
    font-weight: bold;
    color: #000;
  }
}
.content{
  background: linear-gradient(120.73deg, #E3E9F1 0.8%, rgba(236, 240, 245, 0.7) 100%);
  overflow-x: hidden;
}
.gallery{
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 56px;
  padding-left: 160px;
  padding-right: 80px;
  @media(max-width: 767px){
    flex-direction: column;
    padding-left: 0;
    padding-right: 0; 
  }
  .img-plus{
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
    margin-top: 10px;
    @media(min-width:768px){
      margin-left: 60px;
      margin-right: 40px;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
  .title{
    font-family: Agrandir;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #AE6653;
    text-align: center;
  }
}
.price{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 56px;
  .title{
    font-family: Agrandir;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
    text-decoration-line: line-through;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 24px;
  }
  button{
    height: 64px;
    border: 0;
    color: #fff;
    font-family: Agrandir;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 24px;
    max-width: 310px;
    width: 100%;
    transition: opacity .3s ease, transform .3s ease;
    @media (min-width:768px) {
      max-width: 400px;
      font-size: 17px;
    }
    &:hover{
      opacity: .9;
      transform: scale(1.1);
    }
    &.btn-fixed{
      position: fixed;
      bottom: 0;
      left: 0;
      height: 64px;
      width: 100%;
      max-width: 100%;
      z-index: 20;
      margin-bottom: 0;
      @media(min-width:768px){
        display: none;
      }
    }
  }
  .sub{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #4C4D53;
    margin-bottom: 8px;
  }
}
</style>