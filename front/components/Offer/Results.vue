<template>
  <section class="result">
    <div class="container">
      <div class="title-wrap">
        <div class="title">Votre résultat.</div>
        <div class="title-sub">Vos suggestions<br>personnalisées</div>
      </div>
      <div class="text">Dans cette vidéo, Chris Gomes, l’entraîneur des stars et auteur de programmes de fitness à succès, partage RIEN qu'avec vous ses 3 techniques adaptées à VOTRE morphologie, commencez dès aujourd’hui à les utiliser.</div>
      <div class="note"><b>Note: </b>Regardez cette courte vidéo pour accéder à votre résultat</div>
      <Video />
      <div class="subs"><b>Chris Gomes: </b>entraîneur des stars, auteur de programmes <br> de fitness à succès et co-fondateur de MDRN Training.</div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.result{
  padding-top: 40px;
  padding-bottom: 40px;
  @media(min-width:768px){
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
.title{
  font-family: Agrandir;
  font-weight: 500;
  letter-spacing: 4%;
  text-align: left;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 52px;
  @media(min-width:992px){
    font-size: 68px;
    line-height: 72px;
  }
  &-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width:768px){
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
  &-sub{
    font-family: Agrandir;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2%;
    text-transform: uppercase;
    margin-bottom: 24px;
    text-align: right;
    @media(max-width:767px){
      text-align: left;
    }
    @media(min-width:768px){
      margin-bottom: 0;
    }
  }
}
.text{
  padding-left: 150px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 8px;
  @media(max-width:768px){
    padding-left: 0;
  }
  @media(min-width:1200px){
    margin-right: 300px;
  }
}
.note{
  padding-left: 150px;
  font-size: 13px;
  margin-bottom: 32px;
  @media(max-width:768px){
    padding-left: 0;
  }
}
.subs{
  padding-top: 16px;
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #000000;
  @media(max-width:767px){
    br{
      display: none;
    }
  }
  @media(min-width:768px){
    font-size: 13px;
  }
}
</style>
