<template>
  <div class="chris">
    <picture>
      <source srcset="@/assets/img/cris-mob.webp" type="image/webp">
      <source srcset="@/assets/img/cris-mob.png" type="image/png"> 
      <img src="@/assets/img/cris-mob.png">
    </picture>
  </div>
</template>
<style lang="scss" scoped>
.chris{
  width: 100%;
  background: url('../../assets/img/cris-desc.png') no-repeat top center;
  @media(min-width:768px){
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }
  img{
    display: block;
    width: 100%;
    @media(min-width:768px){
      display: none;
    }
  }
}
</style>