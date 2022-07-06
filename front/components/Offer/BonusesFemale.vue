<template>
  <section class="bonuses bonuses-female">
    <div class="container">
      <div class="title-wrap">
        <div class="title">
          <span>Nos Cadeaux <br> Bonus.</span>
        </div>
        <div class="title-sub">
            <span>obtenir encore <br> plus de Mdrn</span>
            <!-- obtenir encore plus de -->
        </div>
      </div>
      <div class="posts">
        <div class="post" v-for="(item, i) in items">
          <div class="left" >
            <div class="img">
              <img :src="item.img">
            </div>
          </div>
          <div v-animate-onscroll="(++i % 2 == 0) ? 'animated fadeInLeft':'animated fadeInRight'" class="right">
            <div :class="`cl-${answers.q1}`" class="num">{{ item.num }}</div>
            <div class="title">{{ item.title }}</div>
            <div class="sub" v-html="item.sub"></div>
            <div class="text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    answers() {
      return this.$store.state.answers;
    }
  },
  beforeCreate() {
    this.$store.dispatch("getAnswers")
  },
  data(){
    return {
      items: [
        {
          img: require('@/assets/img/offer-female/bonus-1-img.png'),
          num: 'Bonus gratuit #1:',
          title: 'Notre pack spécial abdos ventre plat',
          // sub: '(normalement à <span>47</span> euros)',
          sub: '(prix hors promotion: <span>47</span> euros)',
          text: `Pour celles qui ont TOUJOURS voulu ce fameux ventre plat plus que tout, ce programme est indispensable. Un véritable MUST HAVE. Notre programme vous expliquera exactement quels sont les bons exercices à réaliser et quel plan de nutrition adopter pour faire ressortir vos abdos. Grâce à nos exercices de cardio qui vous permettront d'éliminer la dernière couche de graisse, même le bas de vos abdos apparaîtront. Notre programme est conçu pour une progression de débutant à expert en passant par un niveau intermédiaire. Objectif : ventre plat.`
        },
        {
          img: require('@/assets/img/offer-female/bonus-2-img.png'),
          num: 'Bonus gratuit #2:',
          title: 'Notre programme booty builder',
          sub: '(prix hors promotion: <span>47</span> euros)',
          text: `Obtenez enfin les fesses de vos rêves. Il s’agit d’un de nos programmes les plus demandés. Si, comme la plupart des femmes que j'ai aidée, peu importe ce que vous avez essayez, vous n'arrivez pas à obtenir ce look que vous recherchez tant. Voici le programme PARFAIT que vous devez suivre pour avoir des jolies fesses pour votre bikini ou vos jeans moulants. Pour obtenir des résultats rapides, vous DEVEZ suivre un plan d'entrainement parallèle qui se concentre sur toutes les parties de votre fessier. Chaque entrainement de ce programme est pensé, réfléchi et imaginé pour vous aider à obtenir des fesses parfaites.`
        },
        {
          img: require('@/assets/img/offer-female/bonus-3-img.png'),
          num: 'Bonus gratuit #3:',
          title: 'Notre guide de recettes',
          sub: '(prix hors promotion: <span>37</span> euros)',
          text: `Si vous ne deviez ne manger que des blancs de poulet bouillis à l'eau, des brocolis ou autres repas fades et sans goût à chaque repas vous abandonnerez rapidement. Mais si vous aviez la possibilité de faire de bons repas qui ne vous laissent pas sur votre faim, vous serez alors capable de tenir votre régime sur la longueur. Croyez-le nous avons plus conscience que n'importe qui d'autre et c'est exactement pour cela que nous avons travaillé en collaboration avec un véritable chef pour créer pour vous ces recettes spéciales. Elles ont toutes un super goût et surtout elles sont toutes parfaitement saines. Sachant que 80% de votre succès dépend de votre alimentation, ce guide de recette est le meilleur allié de votre réussite.`
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.bonuses {
  background-color: #F9F3EE;
  padding-top: 160px;
  padding-bottom: 200px;
  overflow-x: hidden;
  @media(max-width: 767px) {
    padding-top: 105px;
    padding-bottom: 105px;
  }
  .container{
    padding-left: 0;
    padding-right: 0;
  }
}

.title {
  font-family: Agrandir;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.02em;
  color: #000;
  @media(min-width: 992px){
    font-size: 60px;
    line-height: 64px;
  }
  &-sub {
    font-family: Agrandir;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 24px;
    @media(min-width:768px){
      margin-bottom: 0;
      text-align: right;
    }
  }
  &-wrap{
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    padding-left: 16px;
    padding-right: 16px;
    @media(min-width:1200px){
      padding-left: 30px;
      padding-right: 30px;
    }
    @media(max-width: 767px) {
      flex-direction: column-reverse;
      align-items: flex-start;
      margin-bottom: 24px;
    }
  }
}

.post {
  @media(min-width: 768px) {
    display: flex;
    align-items: center;
  }
  &:not(:last-child) {
    margin-bottom: 120px;
    @media(max-width: 768px) {
      margin-top: 40px;
      margin-bottom: 80px;
    }
  }
  .left,
  .right {
    @media(min-width: 768px) {
      flex: 1 50%;
    }
  }
  .right{
    padding-right: 30px;
    padding-left: 10px;
    @media(min-width:992px){
      padding-left: 95px;
    }
    @media(max-width: 767px){
      padding: 0 16px;
    }
  }
  .num {
    font-family: Agrandir;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #D99466;
    margin-bottom: 16px;
    @media(max-width: 768px) {
      margin-top: 40px;
      margin-bottom: 12px;
    }
  }
  .title {
    font-family: Agrandir;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    color: #000000;
    margin-bottom: 8px;
    @media(max-width: 768px) {
      margin-bottom: 8px;
    }
  }
  .sub {
    font-family: Montserrat;
    font-size: 16px;
    line-height: 24px;
    color: #4C4D53;
    margin-bottom: 40px;
    @media(max-width: 768px) {
      margin-bottom: 32px;
    }
  }
  .text {
    text-align: justify;
    font-family: Montserrat;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    text-indent: 20%;
  }
  img{
    display: block;
    width: calc(100% - 30px);
    @media(min-width:768px){
      width: 100%;
    }
  }
  &:nth-child(even){
    flex-flow: row-reverse;
    .right{
      padding-left: 30px;
      padding-right: 10px;
      @media(min-width:992px){
        padding-right: 95px;
      }
      @media(max-width: 767px){
        padding: 0 16px;
      }
    }
    .left{
      @media(max-width:767px){
        img{
          margin-left: auto;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.sub{
  span{
    font-weight: 500;
    color: #000;
  }
}
</style>