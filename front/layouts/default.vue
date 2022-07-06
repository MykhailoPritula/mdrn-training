<template>
  <main>
    <Header />
    <Nuxt />
    <Footer />
    <Modal v-if="this.$store.state.modal" />
    <Loader v-if="this.$store.state.loader" />
    <Scripts v-if="scripts"/>
  </main>
</template>
<script>
export default{
  data(){
    return {
      scripts: false
    }
  },
  methods: {
    fixedHeader(){
      if(window.innerWidth < 768){
        document.querySelector('.header').classList.add('header-fixed')
        document.querySelector('main').style.paddingTop = '50px'
      } else {
        document.querySelector('.header').classList.remove('header-fixed')
        document.querySelector('main').style.paddingTop = '0'
      }
    }
  },
  mounted(){
    this.fixedHeader()
    window.addEventListener('resize', e => this.fixedHeader())
    setTimeout(() => {
      this.scripts = true
    }, 4000)
  }
}
</script>