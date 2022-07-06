<template>
  <section class="clients">
    <!-- <div class="container">
      <div class="title-wrap">
        <div class="title-sub">they've already changed <br> themselves</div>
        <div class="title">Mes clients.</div>
      </div>
      <div id="gallery">
        <div class="gallery-item">
          <img class="gallery-img" src="@/assets/img/clients/cl-001.png">
          <div class="gallery-name"><span>Blaise Matuidi</span></div>
          <div class="gallery-program">Programm name</div>
        </div>
        <div class="gallery-item">
          <img class="gallery-img" src="@/assets/img/clients/cl-002.png">
          <div class="gallery-name"><span>Bella Silva</span></div>
          <div class="gallery-program">Programm name</div>
        </div>
        <div class="gallery-item">
          <img class="gallery-img" src="@/assets/img/clients/cl-003.png">
          <div class="gallery-name"><span>Kingsley Coman</span></div>
          <div class="gallery-program">Programm name</div>
        </div>
        <div class="gallery-item">
          <img class="gallery-img" src="@/assets/img/clients/cl-004.png">
          <div class="gallery-name"><span>Audrey Bouetté</span></div>
          <div class="gallery-program">Programm name</div>
        </div>
        <div class="gallery-item">
          <img class="gallery-img" src="@/assets/img/clients/cl-004.png">
          <div class="gallery-name"><span>Audrey Bouetté</span></div>
          <div class="gallery-program">Programm name</div>
        </div>
      </div>
    </div> -->
  </section>
</template>
<script>
// export default {
//   methods: {
//     setSlider(){
//       return tns({
//         container: '#gallery',
//         mouseDrag: true,
//         items: 1,
//         gutter: 16,
//         controls: false,
//         nav: false,
//         loop: true,
//         autoplay: true,
//         autoplayButtonOutput: false,
//         responsive: {
//           768: {
//             items: 2
//           },
//           992: {
//             items: 3
//           },
//           1200: {
//             items: 4
//           },
//           1400: {
//             items: 3
//           }
//         }
//       })
//     },
//     checkSlider(){
//       if(window.innerWidth > 768){
//         this.setSlider()
//       }
//     }
//   },
//   mounted(){
//     this.checkSlider()
//     window.onresize = e => this.checkSlider()
//   }
// }
</script>
// <style lang="scss" scoped>
// .clients{
//   max-width: 100%;
//   overflow-x: hidden;
//   padding-top: 100px;
//   padding-bottom: 140px;
//   margin-bottom: 70px;
//   @media(min-width:768px){
//     padding-top: 160px;
//     margin-bottom: 0;
//   }
// }
// .title{
//   font-family: Agrandir;
//   font-weight: 500;
//   font-size: 40px;
//   line-height: 48px;
//   display: flex;
//   align-items: center;
//   letter-spacing: 0.02em;
//   color: #000000;
//   margin-bottom: 40px;
//   @media(min-width:768px){
//     font-size: 50px;
//     line-height: 54px;
//   }
//   @media(min-width:1200px){
//     font-size: 60px;
//     line-height: 64px;
//   }
//   &-wrap{
//     @media(min-width:768px){
//       display: flex;
//     }
//   }
//   &-sub{
//     font-family: Agrandir;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 24px;
//     letter-spacing: 0.02em;
//     text-transform: uppercase;
//     color: #000000;
//     margin-bottom: 20px;
//     @media(min-width:768px){
//       margin-bottom: 0;
//       text-align: right;
//       font-size: 16px;
//       margin-left: auto;
//       order: 2;
//     }
//     @media(min-width:1200px){
//       font-size: 20px;
//     }
//   }
// }
// .gallery{
//   &-item{
//     @media(max-width:767px){
//       &:not(:first-child){
//         margin-top: 36px;
//       }
//     }
//   }
//   &-img{
//     display: block;
//     margin-bottom: 20px;
//     width: 100%;
//     height: auto;
//   }
//   &-name{
//     font-family: Agrandir;
//     font-weight: 300;
//     font-size: 18px;
//     line-height: 1;
//     letter-spacing: 0.04em;
//     text-transform: uppercase;
//     color: #000000;
//     border-bottom: 1px solid #000000;
//     margin-bottom: 16px;
//     span{
//       padding-bottom: 6px;
//       display: inline-block;
//       position: relative;
//       border-bottom: 3px solid #000000;
//     }
//   }
//   &-program{
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 24px;
//     color: #000000;
//   }
// }
// .tns-liveregion.tns-visually-hidden{
//   display: none;
// }
// .tns-ovh {
//   overflow: visible;
// }
// </style>
