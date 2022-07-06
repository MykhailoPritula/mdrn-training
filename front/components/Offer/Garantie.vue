<template>
  <section class="garantie">
    <div class="container">
      <div class="row">
        <img src="@/assets/img/offer-female/medal-of-garant-img.png">
        <div class="content">
          <div :class="`cl-${answers.q1}`" class="title">Ma garantie 30 jours</div>
          <div class="sub">Remboursement garantie</div>
          <div class="text">Nous vous garantissons que notre programme fonctionne. Essayez-le pendant 30 jours et, si vous n'êtes pas satisfait du résultat, nous vous remboursons. La seule chose que vous devez alors faire est de nous envoyer un email avec votre demande.
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
  }
}
</script>

<style lang="scss" scoped>
.garantie{
  padding-top: 40px;
  padding-bottom: 100px;
  @media(min-width:768px){
    padding-top: 80px;
    padding-bottom: 160px;
  }
  .row{
    background-color: #ECF0F5;
    padding: 24px 16px;
    position: relative;
    @media(min-width:768px){
      padding: 64px 40px;
      display: flex;
      align-items: center;
    }
  }
  img{
    display: block;
    margin-right: 56px;
    @media(max-width:768px){
      margin-right: 0;
      position: absolute;
      top: 16px;
      right: 10px;
      width: 64px;
    }
  }
  .title{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #AE6653;
    margin-bottom: 8px;
  }
  .sub{
    font-family: Agrandir;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 8px;
    @media(min-width:768px){
      font-size: 20px;
    }
  }
  .text{
    font-size: 16px;
    line-height: 24px;
    color: #000;
    @media(min-width:1200px){
      width: 82%;
    }
  }
}
</style>
