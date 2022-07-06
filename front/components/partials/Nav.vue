<template>
  <nav class="nav">
    <button class="back" v-if="this.$route.name !== 'index' && this.$route.name !== 'thank-you' && this.$parent._vnode.tag === 'header'" @click="goToPage">retour page</button>
  </nav>
</template>
<script>
export default {
  computed: {
    answers() {
      return this.$store.state.answers;
    }
  },
  beforeCreate(){
    this.$store.dispatch("getAnswers")
  },
  methods: {
    goToPage(){ 
      if(this.$route.name === 'offer'){
        this.answers.q6 = false;
        localStorage.answers = JSON.stringify(this.answers);
        this.$router.push('/')
      }
      else if(this.$route.name === 'checkout'){
        // localStorage.removeItem('offer')
        this.$router.push('/offer')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.back{
  color: #000;
  border: 0;
  background: none;
  text-transform: uppercase;
  margin-right: 15px;
  font-family: Agrandir;
  font-weight: 300;
  letter-spacing: 0.04em;
  padding: 0;
  font-size: 0;
  @media(min-width:768px){
    font-size: 15px;
    line-height: 20px;
  }
  &::before{
    content: '❮ retour page';
    text-transform: uppercase;
    font-size: 15px;
    line-height: 20px;
    @media(min-width:768px){
      margin-right: 10px;
      content: '❮';
    }
  }
  &:hover{
    opacity: 0.7;
  }
}
</style>
