<template>
  <div class="quiz">
    <Logo />
    <div class="quiz-wrap">
      <!-- <div class="survey">Take the <br> survey</div> -->
      <div class="survey">Répondez <br> à l'enquête</div>
      <div class="title">Découvrez quel est le meilleur régime et programme d'entraînement pour vous</div>
      <div class="question" v-if="quizNumber === 1">Vous êtes:</div>
      <div class="question" v-else-if="quizNumber === 2">Votre âge ?</div>
      <div class="question" v-else-if="quizNumber === 3">Votre taille: <span>{{ height }} CM</span></div>
      <div class="question" v-else-if="quizNumber === 4">Votre poids actuel: <span>{{ weight }} KG</span></div>
      <div class="question" v-else-if="quizNumber === 5">Décrivez-nous votre activité physique</div>
      <div class="question" v-else-if="quizNumber === 6">Qu’estce qui vous décrit le mieux?</div>

      <div class="quiz-progress">
        <span :class="`bg-${answers.q1}`" :style="`width: ${quizProgress}%;`"></span>
      </div>

      <div class="answers" v-if="quizNumber === 1">
        <div class="radio">
          <button class="btn btn-radio btn-female" @click="setQ1('female')">UNE Femme</button>
          <button class="btn btn-radio btn-male" @click="setQ1('male')">UN Homme</button>
        </div>
      </div>

      <div class="answers" v-if="quizNumber === 2">
        <div class="radio">
          <button class="btn btn-radio btn-age" :class="`bg-${answers.q1} cl-age-${answers.q1}`" @click="setQ2('20')">Moins de <span>20</span> ans</button>
          <button class="btn btn-radio btn-age" :class="`bg-${answers.q1} cl-age-${answers.q1}`" @click="setQ2('30')">Entre <span>20</span> et <span>29</span> ans</button>
          <button class="btn btn-radio btn-age" :class="`bg-${answers.q1} cl-age-${answers.q1}`" @click="setQ2('40')">Entre <span>30</span> et <span>39</span> ans</button>
          <button class="btn btn-radio btn-age" :class="`bg-${answers.q1} cl-age-${answers.q1}`" @click="setQ2('50')">Entre <span>40</span> et <span>49</span> ans</button>
          <button class="btn btn-radio btn-age" :class="`bg-${answers.q1} cl-age-${answers.q1}`" @click="setQ2('60')">Entre <span>50</span> et <span>59</span> ans</button>
          <button class="btn btn-radio btn-age" :class="`bg-${answers.q1} cl-age-${answers.q1}`" @click="setQ2('70')"><span>60</span> ans et plus</button>
        </div>
      </div>

      <div class="answers" v-if="quizNumber === 3">
        <div class="range">
          <div class="range-wrap">
            <label>En centimètres</label>
            <div class="range-bg">
              <span :class="`bgslider-${answers.q1}`" :style="`width: ${heightWidth}%`"></span>
              <input :class="answers.q1" v-model="height" @input="heightAction" @change="heightAction" type="range" min="90" max="240" step="1" >
            </div>
          </div>
          <button class="btn btn-continue" :class="`bg-${answers.q1}`" @click="setQ3(height)" :disabled="(height > 0) ? false:true">Continuez</button>
        </div>
      </div>

      <div class="answers" v-if="quizNumber === 4">
        <div class="range">
          <div class="range-wrap" >
            <label>Kilogrammes</label>
            <div class="range-bg">
              <span :class="`bgslider-${answers.q1}`" :style="`width: ${weightWidth}%`"></span>
              <input :class="answers.q1" v-model="weight" @input="weightAction" @change="weightAction" type="range" min="40" max="200" step="1">
            </div>
          </div>
          <button class="btn btn-continue" :class="`bg-${answers.q1}`" @click="setQ4(weight)" :disabled="(weight > 0) ? false:true">Continuez</button>
        </div>
      </div>

      <div class="answers" v-if="quizNumber === 5">
        <div class="radio">
          <button class="btn btn-radio" :class="`bg-${answers.q1}`" @click="setQ5('1')">Légèrement active</button>
          <button class="btn btn-radio" :class="`bg-${answers.q1}`" @click="setQ5('2')">Modérément active</button>
          <button class="btn btn-radio" :class="`bg-${answers.q1}`" @click="setQ5('3')">Très active</button>
        </div>
      </div>

      <div class="answers" v-if="quizNumber === 6 && answers.q1 === 'female'">
        <div class="radio">
          <button class="btn btn-radio btn-radio__last bg-female" @click="setQ6('1')">J’ai besoin de perdre 3 à 5 kilos et de tonifier mon ventre mes fesses et mes bras</button>
          <button class="btn btn-radio btn-radio__last bg-female" @click="setQ6('2')">J’ai besoin de perdre environ 10 kilos</button>
          <button class="btn btn-radio btn-radio__last bg-female" @click="setQ6('3')">Je suis mince. J’ai besoin de me tonifier et de perdre un peu de gras à certains endroits pour être bien</button>
        </div>
      </div>
      <div class="answers" v-if="quizNumber === 6 && answers.q1 === 'male'">
        <div class="radio">
          <button class="btn btn-radio btn-radio__last bg-male" @click="setQ6('4')">Je n’arrive pas à prendre de la masse musculaire, peu importe ce que je mange ou la façon dont je m’entraine</button>
          <button class="btn btn-radio btn-radio__last bg-male" @click="setQ6('5')">Je suis un « faux maigre », j’ai l’air mince habillé mais j’ai un peu de graisse</button>
          <button class="btn btn-radio btn-radio__last bg-male" @click="setQ6('6')">Je suis plutôt satisfait de mon apparence mais je voudrais juste perdre un petit peu de masse graisseuse</button>
          <button class="btn btn-radio btn-radio__last bg-male" @click="setQ6('7')">Je ne suis pas content de mon apparence, je voudrais perdre du poids</button>
        </div>
      </div>
      <button @click="stepBack" class="back" v-if="quizNumber > 1">retour</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      quizNumber: 1,
      quizProgress: 0,
      height: 0,
      heightWidth: 0,
      weight: 0,
      weightWidth: 0
    }
  },
  methods: {
    heightAction(){
      this.heightWidth = (this.height - 90) * 100 / (240 - 90);
    },
    weightAction(){
      this.weightWidth = (this.weight - 40) * 100 / (200 - 40);
    },
    setQ1(a){
      this.quizProgress = 100/6;
      this.quizNumber = 2;
      let answers = this.answers;
      answers.q1 = a;
      localStorage.answers = JSON.stringify(answers);
    },
    setQ2(a){
      this.quizProgress = 100 / 6 * this.quizNumber;
      this.quizNumber = 3;
      let answers = this.answers;
      answers.q2 = a;
      localStorage.answers = JSON.stringify(answers);
    },
    setQ3(a){
      this.quizProgress = 100 / 6 * this.quizNumber;
      this.quizNumber = 4;
      let answers = this.answers;
      answers.q3 = a;
      localStorage.answers = JSON.stringify(answers);
    },
    setQ4(a){
      this.quizProgress = 100 / 6 * this.quizNumber;
      this.quizNumber = 5;
      let answers = this.answers;
      answers.q4 = a;
      localStorage.answers = JSON.stringify(answers);
    },
    setQ5(a){
      this.quizProgress = 100 / 6 * this.quizNumber;
      this.quizNumber = 6;
      let answers = this.answers;
      answers.q5 = a;
      localStorage.answers = JSON.stringify(answers);
    },
    setQ6(a){
      this.quizProgress = 100;
      let answers = this.answers;
      answers.q6 = a;
      localStorage.answers = JSON.stringify(answers);
      if(answers.q1 && answers.q2 && answers.q3 && answers.q4 && answers.q5 && answers.q6){
        this.$router.push('/offer');
      } else {
        this.quizProgress = 100 / 6 * (this.quizNumber - 1);
      }
    },
    stepBack(){
      this.quizNumber = Number(this.quizNumber) - 1;
      this.quizProgress = 100 / 6 * (this.quizNumber - 1);
      this.answers[`q${this.quizNumber}`] = false;
      localStorage.answers = JSON.stringify(this.answers);
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
  mounted() {
    if(this.answers.q1) this.setQ1(this.answers.q1);
    if(this.answers.q2) this.setQ2(this.answers.q2);
    if(this.answers.q3) this.setQ3(this.answers.q3);
    if(this.answers.q4) this.setQ4(this.answers.q4);
    if(this.answers.q5) this.setQ5(this.answers.q5);
    if(this.answers.q6) this.setQ6(this.answers.q6);
    if(localStorage.offer && this.answers.q1 && this.answers.q2 && this.answers.q3 && this.answers.q4 && this.answers.q5 && this.answers.q6 ){
      let offer = JSON.parse(localStorage.offer)
      if(offer){
        this.$router.push('/checkout');
        this.$store.state.offerActive = true;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.quiz{
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 40px;
  @media(min-width:768px){
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 80px;
  }
  @media(min-width:1200px){
    padding-bottom: 150px;
  }
  @media(min-width:1920px){
    padding-bottom: 180px;
  }
  &-wrap{
    width: 100%;
  }
  .logo{
    margin-bottom: 50px;
    @media(min-width:768px){
      margin-bottom: 80px;
    }
  }
}
.survey{
  font-family: Agrandir;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 24px;
  @media(min-width:1200px){
    font-size: 20px;
    text-align: right;
    margin-bottom: 40px;
  }
  br{
    display: none;
    @media(min-width:1200px){
      display: block;
    }
  }
}
.title{
  font-family: Agrandir;
  font-weight: 500;
  font-size: 29px;
  line-height: 44px;
  color: #000000;
  margin-bottom: 32px;
  @media(min-width:576px){
    font-size: 36px;
  }
  @media(min-width:1200px){
    font-size: 45px;
    line-height: 50px;
  }
  @media(min-width:1440px){
    font-size: 68px;
    line-height: 72px;
    margin-bottom: 40px;
  }
}
.question{
  font-family: Agrandir;
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 24px;
  @media(min-width:576px){
    font-size: 15px;
  }
  @media(min-width:768px){
    font-size: 14px;
  }
  @media(min-width:992px){
    font-size: 15px;
  }
  @media(min-width:1200px){
    font-size: 16px;
    line-height: 20px;
  }
  @media(min-width:1440px){
    margin-bottom: 50px;
    font-size: 18px;
    line-height: 24px;
  }
  span{
    font-weight: 500;
  }
}
.quiz-progress{
  height: 4px;
  width: 100%;
  background: #CCCCD9;
  position: relative;
  margin-bottom: 32px;
  @media(min-width:1440px){
    margin-bottom: 40px;
  }
  span{
    width: 0;
    height: 8px;
    background: #000;
    transition: width .5s ease;
    position: absolute;
    left: 0; bottom: 0;
  }
}
.btn{
  border: none;
  padding: 0;
  background: none;
  &-radio{
    background-color: gray;
    padding: 20px 85px 20px 24px;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.02em;
    line-height: 1.2;
    text-transform: uppercase;
    color: #FDFDFD;
    position: relative;
    text-align: left;
    font-family: Agrandir;
    @media(min-width:1440px){
      font-size: 17px;
    }
    &:after{
      content: "";
      background: url('../../assets/img/icon-right.png') no-repeat center center/24px 24px;
      display: block;
      position: absolute;
      right: 0; top: 0;
      border-left: 1.4px solid #F1D4C1;
      width: 64px; height: 100%;
    }
    &__last{
      padding: 24px 16px;
      text-align: center;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: 0.02em;
      &:after{
        display: none;
      }
    }
  }
  &-age{
    span{
      color: #fff;
    }
  }
  &-continue{
    background-color: gray;
    padding: 20px 24px;
    font-weight: 500;
    font-size: 17px;
    text-transform: uppercase;
    color: #FDFDFD;
    position: relative;
    text-align: left;
    font-family: Agrandir;
    width: 300px;
    max-width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 50px;
    letter-spacing: 0.02em;
    &:disabled{
      background: #CCCCD9;
      opacity: .7 !important;
      cursor: default;
      pointer-events: none;
    }
  }
  &-female{
    background-color: #D99466;
  }
  &-male{
    background-color: #004889;
  }
  &:hover{
    opacity: .9;
  }
}
.radio{
  @media(min-width:1200px){
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    @media(min-width:1200px){
      flex: 1 calc(50% - 10px);
      max-width: calc(50% - 10px);
    }
  }
}
.range{
  &-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width:576px){
      flex-direction: column;
      align-items: flex-start;
    }
  }
  label{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    width: 230px;
    @media(max-width:576px){
      margin-bottom: 22px;
    }
  }
  &-bg{
    position: relative;
    max-width: 575px;
    width: 100%;
    height: 24px;
    &:before{
      border: 1px solid #CCCCD9;
      height: 4px;
      width: 100%;
      content:"";
      position: absolute;
      z-index: 1;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  span{
    position: absolute;
    left: 0;
    width: 0;
    height: 7px;
    z-index: 2;
    top: 50%;
    transform: translate(0, -50%);
  }
  input{
    width: 100%;
    height: 24px;
    margin: 0;
    background-color: transparent;
    -webkit-appearance: none;
    position: relative;
    z-index: 3;
    &:focus {
      outline: none;
    }
    &::-webkit-slider-runnable-track {
      background: transparent;
      border: 1px solid transparent;
      width: 100%;
      height: 6px;
      cursor: pointer;
    }
    &::-webkit-slider-thumb {
      margin-top: -12px;
      width: 24px;
      height: 24px;
      background: #d99466;
      border: 0px solid transparent;
      border: 0;
      -webkit-appearance: none;
    }
    &::-moz-range-track {
      background: transparent;
      border: 1px solid transparent;
      width: 100%;
      // height: 6px;
      // max-height: 6px;
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 24px;
      height: 24px;
      background: #d99466;
      border: 0px solid transparent;
      border: 0;
      cursor: pointer;
      border-radius: 0;
      margin: 0;
      padding: 0;
    }
    &::-ms-track {
      background: transparent;
      border-color: transparent;
      border-width: 0;
      color: transparent;
      width: 100%;
      // height: 6px;
      cursor: pointer;
    }
    &::-ms-fill-lower {
      background: transparent;
    }
    &::-ms-fill-upper {
      background: transparent;
    }
    &::-ms-thumb {
      width: 24px;
      height: 24px;
      background: #d99466;
      border: 0px solid transparent;
      border: 0;
      cursor: pointer;
      margin-top: 0px;
    }
    @supports (-ms-ime-align:auto) {
      margin: 0;
    }
    &::-ms-track {
      border: none;
      color: transparent;
    }
    &::-moz-range-progress{
      padding: 0;
      height: 6px;
    }
    &.female{
      &::-moz-range-thumb {
        background: #d99466;
      }
      &::-webkit-slider-thumb{
        background: #d99466;
      }
      &::-ms-thumb{
        background: #d99466;
      }
    }
    &.male{
      &::-moz-range-thumb {
        background: #004889;
      }
      &::-webkit-slider-thumb{
        background: #004889;
      }
      &::-ms-thumb{
        background: #004889;
      }
    }
  }
}
.back{
  margin-top: 10px;
  text-transform: uppercase;
  font-size: 13px;
  color: #000;
  opacity: 0.7;
  border: 0;
  font-family: Agrandir;
  font-weight: 300;
  letter-spacing: 1px;
  -webkit-appearance: none;
  &::before{
    content: '❮';
    margin-right: 4px;
  }
  &:hover {
    opacity: 1;
  }
}
</style>
