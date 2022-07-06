<template>
  <footer class="main-footer">
    <div class="container">
      <div class="left">
        <Logo />
        <Popups />
      </div>
      <div class="right">
        <Contact />
        <Nav />
      </div>
    </div>
    <div class="copy">Copyright © 2022 MDRN Training. All rights reserved.</div>
  </footer>
</template>
<style lang="scss" scoped>
.main-footer{
  border-top: 1px solid #CCCCD9;
  padding-top: 40px;
  background: #ECF0F5;
  position: relative;
  z-index: 2;
}
.container{
  padding-bottom: 40px;
  @media(min-width:768px){
    display: flex;
    align-items: flex-start;
  }
}
.left, .right{
  @media(min-width:768px){
    display: flex;
    align-items: flex-start;
  }
}
.right{
  @media(min-width:768px){
    margin-left: auto;
    justify-content: flex-end;
  }
}
.logo{
  margin-right: 110px;
  @media(min-width:992px){
  margin-right: 160px;
  }
}
.copy{
  border-top: 1px solid #CCCCD9;
  font-size: 12px;
  line-height: 16px;
  color: #4C4D53;
  padding: 16px;
  @media(min-width:768px){
    font-size: 13px;
    text-align: center;
  }
}
.logo{
  margin-bottom: 40px;
}
</style>
