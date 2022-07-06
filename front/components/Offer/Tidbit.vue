<template>
  <section class="tidbit">
    <img :src="require(`@/assets/img/offer-${ (answers.q1) ? answers.q1:'female' }/tidbit-img.png`)">
    <div class="container">
      <div class="tidbit-box">
        <!-- <div class="title"><span>Take a tidbit from <br> your workout</span></div> -->
        <div class="title"><span>Prenez un morceau de votre <br> séance d'entraînement</span></div>
        <p class="description">
          Les résultats peuvent varier en fonction de votre point de départ, de vos objectifs et de vos efforts. <br><br>
          La pratique d’une activité physique et le suivi d’un régime alimentaire sont nécessaires pour obtenir et maintenir votre perte de poids et/ou prise de masse. <br><br>
          Les témoignages présents sur notre site ont été, dans certains cas, effectués par des membres ayant utilisé plusieurs produits MDRN Training, et ce, parfois, sur une période plus longue que les 90 jours du programme afin de maximiser leurs résultats. <br><br>
          Consultez votre médecin et suivez l’ensemble des instructions données avant d’entamer une activité physique, un régime alimentaire ou un programme de compléments alimentaires. <br><br>
          L’ensemble de nos contenus présentés sur notre site internet et nos programmes ne sont proposés qu’à titre informatif. Ils n’ont pas vocation à se substituer à un quelconque avis médical ou à un diagnostique réalisé par un professionnel de santé.
        </p>
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
  }
}
</script>
<style lang="scss" scoped>
.tidbit{
  background: #fff;
  max-width: 100%;
  padding-bottom: 100px;
  padding-top: 155px;
  position: relative;
  height: auto;
  @media(min-width:576px){
    padding-top: 200px;
  }
  @media(min-width:768px){
    padding-bottom: 160px;
    padding-top: 160px;
  }
  &-box{
    position: relative;
    z-index: 2;
    @media(min-width:992px){
      margin-left: 50%;
    }
  }
}
img {
  position: absolute;
  z-index: 1;
  @media(max-width:767px){
    width: calc(100% - 40px);
    left: 0;
    transform: translate(0, -35%);
  }
  @media(min-width:768px){
    right: 55%;
    top: 50%;
    transform: translate(0, -50%);
  }
}
.title{
  font-family: Agrandir;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #000000;
  border-bottom: 1px solid #000000;
  margin-bottom: 40px;
  @media(min-width:768px){
    font-size: 20px;
  }
  span{
    padding-bottom: 22px;
    line-height: 1.2;
    display: inline-block;
    position: relative;
    border-bottom: 3px solid #000000;
  }
}
p{
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #000000;
  &:not(:last-child){
      margin-bottom: 35px;
  }
}
</style>
