<template>
  <div class="page page-index">
    <section class="quiz-section">
      <div class="column column-quiz">
        <Quiz />
      </div>
      <div class="column column-img">
        <Chris />
      </div>
    </section>
    <Tidbit />
  </div>
</template>
<script>
export default {
  layout: 'index',
  mounted(){
    if( !localStorage.fullPath ) localStorage.fullPath = this.$route.fullPath;

    if( this.$route.query.gclid ) localStorage.gclid = this.$route.query.gclid;

    if( this.$route.query.affId ) localStorage.affId = this.$route.query.affId;

    localStorage.httpReferer = window.location.href;

    snaptr('init', '8e2daa52-aa46-4ef7-88e5-72a03964197d');

    snaptr('track', 'PAGE_VIEW');

    fbq('track', 'ViewContent', {
      content_name: 'mdrn, homepage'
    });
  }
}
</script>
<style lang="scss" scoped>
.page-index{
  background: #ECF0F5;
}
.quiz-section{
  max-width: 1920px;
  margin: 0 auto;
  @media(min-width:768px){
    display: flex;
  }
  .column{
    position: relative;
    @media(min-width:768px){
      flex: 1 50%;
      max-width: 50%;
      &-quiz{
        order: 2;
      }
    }
    @media(min-width:768px) and (max-height:1100px){
      min-height: 100vh;
    }
  }
}
</style>
