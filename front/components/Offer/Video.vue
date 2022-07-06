<template>
  <div class="video-wrap">
    <iframe :src="videos[answers.q6]" id="video" class="video" width="100%" height="600px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <svg class="btndown" @click="down" v-if="btnDown" width="25px" height="25px" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="chevron-double-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <g class="fa-group">
      <path :class="`cl-${answers.q1}`" fill="currentColor" d="M207 285.54L12.7 91.14a23.9 23.9 0 0 1 0-33.9l22.7-22.7a24.08 24.08 0 0 1 33.9 0l154.7 154 154.7-154a23.9 23.9 0 0 1 33.9 0l22.7 22.7a23.9 23.9 0 0 1 0 33.9L241 285.54a24.2 24.2 0 0 1-34 0z" class="fa-secondary"></path>
      <path :class="`cl-${answers.q1}`" fill="currentColor" d="M207 477.54L12.7 283.14a23.9 23.9 0 0 1 0-33.9l22.7-22.7a23.9 23.9 0 0 1 33.9 0l154.7 154 154.7-154a24.08 24.08 0 0 1 33.9 0l22.7 22.7a23.9 23.9 0 0 1 0 33.9L241 477.54a24.2 24.2 0 0 1-34 0z" class="fa-primary"></path>
      </g>
    </svg>
    <!-- <button @click="play"  class="cl" :class="`cl-${answers.q1}`" v-if="btnPlay">
      <img class="mob" :src="require(`@/assets/img/offer-${this.answers.q1}/play-mob.png`)">
      <img class="desk" :src="require(`@/assets/img/offer-${this.answers.q1}/play.png`)" media="(min-width: 768px)">
      <span>Cliquez pour <br> commencer</span>
    </button> -->
    <button @click="play" :class="`pr-${answers.q1}`" v-if="btnPlay"><span></span></button>
  </div>
</template>
<script>
import Player from '@vimeo/player'
export default {
  data(){
    return{
      btnDown: false,
      btnPlay: true,
      videos: {
        1: 'https://player.vimeo.com/video/658973700?h=faa5cb438b',
        2: 'https://player.vimeo.com/video/658974397?h=a365fccebf',
        3: 'https://player.vimeo.com/video/658970045?h=3af8a9d002',
        4: 'https://player.vimeo.com/video/658961766?h=054210bbc0',
        5: 'https://player.vimeo.com/video/658964158?h=ea43b090d5',
        6: 'https://player.vimeo.com/video/658968209?h=9ff98af172',
        7: 'https://player.vimeo.com/video/658966049?h=f7556fa91d',
      }
    }   
  },
  computed: {
    answers() {
      return this.$store.state.answers;
    }
  },
  beforeCreate(){
    this.$store.dispatch("getAnswers")
  },
  methods:{
    play(e){
      e.preventDefault()
      this.btnPlay = false
      const player = new Player(document.getElementById('video'))
      player.play();
      let setBtnPlay = a => this.btnPlay = a;
      player.on('pause', function(){
        setBtnPlay(false);
      })
      player.on('ended', function(){
        setBtnPlay(true);
      })
      let setOpenContent = a => {
        this.$store.state.offerActive = a;
      }
      let interval = setInterval(()=>{
        player.getCurrentTime()
        .then(sec => {
          if(sec > 15){
            localStorage.offer = true;
            this.$store.state.offerActive = true;
            this.btnDown = true;
            clearInterval(interval)
          }
        })
      },1000)
    },
    down(){
      document.querySelector('.macros').scrollIntoView({block: "start", behavior: "smooth"});
        this.btnDown = false
    }
  }
}
</script>

<style lang="scss" scoped>
.video-wrap{
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
button{
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: content-box;
  display: block;
  width: 32px;
  height: 44px;
  border-radius: 50%;
  padding: 18px 20px 18px 28px;
  cursor: pointer;
  border: none;
  span{
    display: block;
    position: relative;
    z-index: 3;
    width: 0;
    height: 0;
    border-left: 32px solid #fff;
    border-top: 22px solid transparent;
    border-bottom: 22px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 120px;
    height: 120px;
    background: #ffc700;
    border-radius: 50%;
    animation: 1s ease-out infinite pulse-border;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 120px;
    height: 120px;
    background: #ffc700;
    border-radius: 50%;
    transition: .2s;
    animation: 1s ease-out infinite scale;
  }
}
@keyframes pulse-border{
  0%{
    transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity:1
  }
  100%{
    transform:translateX(-50%) translateY(-50%) translateZ(0) scale(2);
    opacity:0
  }
}
@keyframes scale{
  0%{
    transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);
  }
  50%{
    transform:translateX(-50%) translateY(-50%) translateZ(0) scale(.8);
  }
  100%{
    transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);
  }
}
.btndown{
  position: absolute;
  top: 75%;
  left: 90%;
  opacity: .9;
  transform: rotate(-180deg);
  animation: 4s ease-out infinite transform;
  cursor: pointer;
  @media(min-width:768px){
    width: 35px;
    height: 35px;
    top: 85%;
  }
}
@keyframes transform{
  0%{
    transform: translateY(-15px);
  }
  100%{
    transform: translateY(15px);
  }
}
</style>
