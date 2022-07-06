<template>
  <section class="macros" :class="`macros-${answers.q1}`" >
    <div class="container">
      <div class="left">
        <div class="title" v-animate-onscroll="'animated fadeInUp'">Vos macros <br> quotidiennes.</div>
        <img src="@/assets/img/offer-female/macros-img.png" v-animate-onscroll="'animated zoomIn delay-1s'">
      </div>
      <div class="right">
        <div class="top">
          <div class="top-left">
            <div class="text">Glucides:</div>
            <div class="calculation" :class="`cl-${answers.q1}`">
              <span :style="`--num: ${carbohydrates}`"> <b>G</b></span>
            </div>
          </div>
          <div class="top-right">
            <div class="text">Protéines:</div>
            <div class="calculation" :class="`cl-${answers.q1}`">
              <span :style="`--num: ${protein}`"> <b>G</b></span>
            </div>
          </div>
        </div>
        <div class="middle">
          <div class="middle-left">
            <div class="text">calories par jour :</div>
            <div class="calculation" :class="`cl-${answers.q1}`">
              <span :style="`--num: ${calories}`"> <b class="calc-left">CAL</b></span>
            </div>
          </div>
          <div class="middle-right">
            <div class="text">Graisses:</div>
            <div class="calculation" :class="`cl-${answers.q1}`">
              <span :style="`--num: ${fat}`"> <b>G</b></span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-title">Activité:</div>
          <div class="bottom-sub" :class="`cl-${answers.q1}`">
            <span>{{ activity }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="macros-alert" v-if="alert">
      <div class="macros-alert__container">
        <div class="macros-alert__title">Dear user, we don't have date for calculate your marcros. You need to pass the Quiz for get macros data.</div>
        <button class="macros-alert__btn bg" :class="`bg-${answers.q1}`" @click="goToHome">Go To Quiz</button>
      </div>
    </div>
  </section>
</template>
<script>
export default{
  data(){
    return {
      alert: false,
      bmr: null,
      calories: null,
      carbohydrates: null,
      protein: null,
      fat: null,
      activity: null
    }
  },
  computed: {
    answers() {
      return this.$store.state.answers;
    }
  },
  beforeCreate(){
    this.$store.dispatch("getAnswers")
  },
  created(){
    if(this.answers.q1 && this.answers.q2 && this.answers.q3 && this.answers.q4 && this.answers.q5 && this.answers.q6){
      if( this.answers.q1 === 'female' ) {
        this.bmr = ((parseFloat(this.answers.q4) * 10) + (parseFloat(this.answers.q3) * 6.25) - (parseFloat(this.answers.q2) *5) - 161);
      }
      if( this.answers.q1 === 'male' ){
        this.bmr = ((parseFloat(this.answers.q4) * 10) + (parseFloat(this.answers.q3) * 6.25) - (parseFloat(this.answers.q2) *5) + 5);
      }

      let activityKoeficient;
      if( this.answers.q5 === '1' ){
        this.activity = 'Légèrement active'
        activityKoeficient = 1.375;
      }
      if( this.answers.q5 === '2' ){
        this.activity = 'Modérément active'
        activityKoeficient = 1.55;
      }
      if( this.answers.q5 === '3' ){
        this.activity = 'Très active'
        activityKoeficient = 1.7;
      }
      this.calories = (parseFloat(this.bmr) * parseFloat(activityKoeficient)).toFixed();
      this.carbohydrates = ( (parseFloat(this.calories)*0.5)/4 ).toFixed();
      this.protein = ( (parseFloat(this.calories)*0.3)/4 ).toFixed();
      this.fat = ( (parseFloat(this.calories)*0.2)/9 ).toFixed();
    } else {
      this.alert = true;
    }
  },
  methods: {
    goToHome(){
      this.$router.push('/');
    }
  }
}  
</script>

<style lang="scss" scoped>
.macros {
  position: relative;
  padding-top: 30px;
  @media(min-width:768px){
    padding-top: 80px;
    padding-bottom: 80px;
  }
  &-alert{
    position: absolute;
    left: 0; top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255, .95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    flex-wrap: wrap;
    &__title{
      font-size: 30px;
      text-align: center;
      display: block;
      padding: 0 15px;
      margin-bottom: 30px;
      max-width: 500px;
    }
    &__btn{
      display: block;
      margin: 0 auto;
      color: #fff;
      border: none;
      font-size: 20px;
      font-weight: 500;
      padding: 15px 45px;
      &:hover{
        opacity: .9;
      }
    }
  }
}
.container {
  @media(min-width: 768px) {
    padding-bottom: 80px;
    display: flex;
    justify-content: space-between;
  }
}

.title {
  font-family: Agrandir;
  font-weight: 500;
  letter-spacing: 0.02em;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
  font-size: 40px;
  line-height: 1.2;
  @media(min-width:768px){
    font-size: 38px;
  }
  @media(min-width:992px){
    font-size: 45px;
  }
  @media(min-width:1200px){
    font-size: 60px;
    margin-bottom: 64px;
  }
}

.left{
  @media(min-width:768px){
    flex: 1 250px;
    max-width: 250px;
  }
  @media(min-width:992px){
    flex: 1 300px;
    max-width: 300px;
  }
  @media(min-width:1200px){
    flex: 1 400px;
    max-width: 400px;
  }
  img {
    display: block;
    width: 100%;
    @media(max-width:767px){
      width: 242px;
      margin-top: -190px;
      margin-left: 160px;
    }
  }
}

.right {
  @media(min-width:768px){
    padding-left: 16px;
    flex: 1 calc(100% - 250px);
    max-width: calc(100% - 250px);
  }
  @media(min-width:992px){
    padding-left: 30px;
    flex: 1 calc(100% - 300px);
    max-width: calc(100% - 300px);
  }
  @media(min-width:1200px){
    padding-left: 80px;
    flex: 1 calc(100% - 400px);
    max-width: calc(100% - 400px);
  }
}
.top,
.middle {
  display: flex;
  margin-bottom: 80px;
  @media(max-width: 767px) {
    flex-direction: column;
  }
  &-left {
    flex: 1 316px;
    border-bottom: 1px solid #000000;
    @media(max-width: 767px) {
      flex: 0%;
    }
  }
  &-right {
    flex: 2 316px;
    margin-left: 64px;
    border-bottom: 1px solid #000000;
    @media(max-width: 767px) {
      flex: 0%;
      margin-left: 0;
      margin-top: 50px;
    }
  }
}

.text {
  display: flex;
  justify-content: space-between;
  font-family: Agrandir;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 4%;
  text-transform: uppercase;
  margin-bottom: 24px;
  @media(min-width:992px){
    font-size: 16px;
  }
  @media(min-width:1200px){
    font-size: 18px;
  }
}
@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}
@keyframes counter {
  from {
    --num: 0;
  }
}
.calculation {
  font-family: Agrandir;
  letter-spacing: 2%;
  font-weight: 500;
  color: #D99466;
  font-size: 100px;
  @media(min-width: 768px){
    font-size: 60px;
  }
  @media(min-width: 992px){
    font-size: 70px;
  }
  @media(min-width:1200px){
    font-size: 80px;
  }
  @media(min-width:1400px){
    font-size: 120px;
  }
  span {
    display: inline-block;
    border-bottom: 4px solid #000;
    animation: counter 4s  ease;
    counter-reset: num var(--num);
    &:before{
      content: counter(num);
    }
  }
  b {
    font-size: 60px;
    color: #000;
    @media(min-width: 768px) and (max-width:991px){
      font-size: 30px;
    }
    @media(min-width: 992px) and (max-width:1199px){
      font-size: 40px;
    }
  }
  .calc-left {
    font-size: 21px;
    @media(min-width:576px){
      font-size: 28px;
    }
    @media(min-width:768px){
      font-size: 22px;
    }
    @media(min-width:1200px){
      font-size: 40px;
    }
  }
}

.bottom {
  &-title {
    font-family: Agrandir;
    font-size: 18px;
    font-weight: 300;
  }
  &-sub {
    font-family: Agrandir;
    font-size: 40px;
    font-weight: 500;
    color: #D99466;
    margin-bottom: 24px;
    border-bottom: 1px solid #000000;
  }
  span {
    padding-top: 24px;
    padding-bottom: 24px;
    display: inline-block;
    border-bottom: 4px solid #000;
  }
}
</style>
