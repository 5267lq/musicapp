<template>
  <div class="playController">
    <div class="left" @click="show=!show">
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="" />
      <div class="content">
        <div class="title">{{ playlist[playCurrentIndex].name }}</div>
        <div class="tips">横滑可以切换上下首歌</div>
      </div>
    </div>
    <div class="right">
      <svg v-if="paused" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
    <play-music v-show="show" :playDetail="playlist[playCurrentIndex]" @back="show=!show" :playStatus="paused" :play="play"></play-music>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"
    ></audio>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import playMusic from '../components/playMusic.vue'
export default {
  data(){
    return {
      paused:true,
      show:false
    }
  },
  computed: {
    ...mapState(["playlist", "playCurrentIndex"]),
  },
  components:{
    playMusic
  },
  mounted() {
    console.log(this.$refs.audio);
  },
  updated() {
    console.log(this.playlist[this.playCurrentIndex]);
  },
  methods: {
    play: function () {
      console.log([this.$refs.audio]);
      if (this.$refs.audio.paused) {
        this.paused=false;
        this.$refs.audio.play();
      } else {
        this.paused=true;
        this.$refs.audio.pause();
      }
    },
  },
};
</script>
<style lang="less" scoped>
.playController {
  width: 7.5rem;
  height: 1.2rem;
  // 固定位置
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: rgb(241, 235, 235);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgb(219, 213, 213);
  .left {
    display: flex;
    align-items: center;
    img {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 0.6rem;
      margin: 0 0.2rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        font-size: 0.3rem;
      }
      .tips {
        font-size: 0.2rem;
        color: gray;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .icon {
      width: 0.45rem;
      height: 0.45rem;
      margin: 0 0.3rem;
    }
  }
}
</style>