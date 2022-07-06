<template>
  <header class="header" :class="this.$route.name === 'index'?'header-index':'header-default'">
    <div class="container">
      <Logo />
      <Nav />
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header{
  width: 100%;
  &-default{
    @media(min-width:768px){
      padding-top: 36px;
      padding-bottom: 36px;
    }
  }
  &-fixed{
    background: #fff;
    position: fixed;
    left: 0; top: 0;
    z-index: 20;
    .container{
      min-height: 50px;
      overflow-y: visible;
    }
  }
}
.container{
  display: flex;
  align-items: center;
}
.nav{
  margin-left: auto;
}
</style>