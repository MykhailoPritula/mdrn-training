<template>
  <div class="secure">
    <div class="secure-text">Paiement 100% sécurisé</div>
    <div class="secure-img">
      <img src="@/assets/img/checkout/icon-visa.svg">
      <img src="@/assets/img/checkout/icon-mastercard.svg">
      <img src="@/assets/img/checkout/icon-discover.svg">
      <img src="@/assets/img/checkout/icon-amex.svg">
    </div>
    <div class="secure-list">
      <div class="secure-item">
        <img src="@/assets/img/checkout/union.png" >
        <h3>100% SANS RISQUES</h3>
        <p>Si vous estimez que ce programme n’est pas adapté ou conforme à vos attentes, envoyez-nous un simple email et nous procèderons à votre remboursement.</p>
      </div>
      <div class="secure-item">
        <img src="@/assets/img/checkout/lock.png" >
        <h3>OS DONNÉES BANCAIRES 100% SÉCURISÉES</h3>
        <p>Toutes vos informations bancaires sont traitées par un système sécurisé. Aucune information confidentielle n’est conservée.</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.secure{
  padding-top: 30px;
  @media(max-width:767px){
    margin-bottom: 104px;
  }
  &-text{
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #4C4D53;
    margin-bottom: 10px;
    @media(min-width:768px){
      font-size: 13px;
      margin-bottom: 19px;
    }
  }
  &-img{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 45px;
    @media(min-width:768px){
      margin-bottom: 60px;
    }
    img{
      display: block;
      width: 53px;
      height: auto;
      margin: 0 5px;
    }
  }
  &-list{}
  &-item{
    position: relative;
    padding-left: 80px;
    &:not(:first-child){
      margin-top: 30px;
    }
    img{
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 64px;
    }
  }
  h3{
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
    margin-bottom: 7px;
    @media(min-width:768px){
      font-size: 13px;
      margin-bottom: 16px;
    }
  }
  p{
    font-size: 12px;
    line-height: 16px;
    color: #000000;
    @media(min-width:768px){
      font-size: 13px;
    }
  }
}
</style>
