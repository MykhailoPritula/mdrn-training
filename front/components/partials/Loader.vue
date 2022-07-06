<template>
  <div class="loader">
    <Logo />
    <div class="loader-msg" v-html="this.$store.state.loaderMSG" v-if="this.$store.state.loaderMSG"></div>
  </div>
</template>
<style lang="scss">
.loader{
  background: rgba(255,255,255, .9);
  position: fixed;
  left: 0; top: 0;
  width: 100%; height: 100vh;
  z-index: 9999;
  .logo{
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
  }
  &-msg{
    font-family: Agrandir;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    padding: 50px;
  }
  &:before, &:after{
    content: "";
    border-radius: 50%;
    border-left: 1px solid #000;
    position: absolute;
    left: 50%; top: 50%;
    transform-origin: 0 0;
    transform: translate(-50%, -50%);
  }
  &:before{
    width: 80px;
    height: 80px;
    animation: spin .5s infinite linear;
  }
  &:after{
    width: 100px;
    height: 100px;
    animation: spin .75s infinite linear;
  }
}
@keyframes spin {
  from {
      transform: rotate(0deg) translate(-50%, -50%);
  }
  to {
      transform: rotate(360deg) translate(-50%, -50%);
  }
}
</style>