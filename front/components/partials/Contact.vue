<template>
  <div class="contact">
    <div class="title">Nous contacter</div>
    <a href="mailto:support@mdrn-training.com">support@mdrn-training.com</a>
  </div>
</template>
<style lang="scss" scoped>
.title{
  font-family: Agrandir;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4C4D53;
  margin-bottom: 8px;
}
a{
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #000000;
}
.contact{
  margin-bottom: 40px;
  @media(min-width:768px){
    margin-bottom: 0;
  }
}
</style>
