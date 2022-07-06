<template>
  <div class="offer-section">
    <Results />
    <div v-if="this.$store.state.offerActive">
      <Macros />
      <img class="mob-img" :src="require(`@/assets/img/offer/offer-one-${type}.png`)" width="100%">
      <ItemsFemale v-if="answers.q1 === 'female'"/>
      <ItemsMale v-else/>
      <BonusesFemale v-if="answers.q1 === 'female'"/>
      <BonusesMale v-else/>
      <img class="mob-img" :src="require(`@/assets/img/offer/offer-two-${type}.png`)" width="100%">
      <Garantie />
      <AboutProgramm />
      <Tidbit />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    type: false
  }),
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
  },
  created(){
    const winHeight = window.innerWidth
    if(winHeight > 0 && winHeight < 768){
      this.type = 'mob';
    } else if(winHeight > 768 && winHeight < 1025){
      this.type = 'tab';
    } else {
      this.type = 'desc';
    }
    if(!this.answers.q6) this.$router.push('/')
    fbq('track', 'ViewContent', {
      content_name: 'mdrn, salespage'
    });
    fbq('track', 'AddToCart', {
      content_name: 'mdrn'
    });
  },
  mounted(){
    if(localStorage.offer){
      let offer = JSON.parse(localStorage.offer)
      if(offer){
        this.$store.state.offerActive = true;
      }
    }
  }
}
</script>
<!-- <style scoped lang="scss">
.bg-img{
  width: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  height: 100vh;
  @media(max-width:1025px){
    display: none;
  }
  &--one{
    background-image: url('../assets/img/offer/offer-one-desc.png');
  }
  &--two{
    background-image: url('../assets/img/offer/offer-two-desc.png');
  }
}
.mob-img{
  display: block;
  @media(min-width:768px){
    display: none;
  }
}
.tab-img{
  display: none;
  @media(min-width:768px) and (max-width:1024px){
    display: block;
  }
}
</style> -->