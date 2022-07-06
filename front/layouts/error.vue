<template>
  <section class="not-found">
    <div class="container">
      <div class="info">
        <div class="title">Page not found ;(</div>
        <div class="sub">Oops! Something went wrong!</div>
        <button @click="goToHome">Return to homepage</button>
      </div>
      <div class="img">
        <picture>
          <source srcset="@/assets/img/404-img.png" media="(min-width: 768px)" width="100%">
          <img src="" width="100%">
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  props: ['error'],
  layout: 'error',
  methods: {
    goToHome(){
      this.$router.push('/');
    }
  },
  mounted(){
    if(this.error.statusCode !== 404) this.goToHome();
  }
}
</script>

<style lang="scss" scoped>
.not-found{
  margin-top: 105px;
  margin-bottom: 96px;
  @media(max-width: 767px){
    margin-top: 32px;
    margin-bottom: 120px;
  }
}
.container{
  @media(min-width:768px){
    display: flex;
    align-items: flex-start;
  }
}
.info{
  @media(min-width:768px){
    min-width: 320px;
  }
  @media(min-width:992px){
    min-width: 400px;
  }
  @media(min-width:1200px){
    min-width: 470px;
  }
}
.title{
  font-family: Agrandir;
  font-weight: normal;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: #000;
  margin-bottom: 16px;
  @media(min-width:992px){
    font-size: 50px;
  }
  @media(min-width:1200px){
    font-size: 60px;
  }
}
.sub{
  font-family: Montserrat;
  font-weight: 500;
  line-height: 1.2;
  color: #000;
  margin-bottom: 40px;
  font-size: 18px;
  @media(min-width:992px){
    font-size: 16px;
  }
  @media(min-width:1200px){
    font-size: 20px;
  }
}
button{
  background: #004889;
  width: 100%;
  height: 65px;
  font-family: Agrandir;
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #FDFDFD;
  margin-top: 40px;
  border: 0;
  @media(min-width:768px){
    max-width: 250px;
    margin-top: 0;
  }
  @media(min-width:992px){
    max-width: 300px;
  }
  @media(min-width:1200px){
    max-width: 343px;
  }
}
.img{}
</style>