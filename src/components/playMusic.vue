<template>
  <div class="playMusic">
    <div
      class="bg"
      :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"
    ></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="content">
        <div class="title">
          <!-- 跑马灯标签 -->
          <marquee behavior="scroll" direction="left">{{playDetail.name}}</marquee>
        </div>
        <!-- <div class="author"></div> -->
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="playContent">
      <img class="needle" :class="{active:!playStatus}" src="../assets/img/2.png" alt="" />
      <img class="pancake" src="../assets/img/1.png" alt="" />
      <img class="playImg" :src="playDetail.al.picUrl" alt="" />
    </div>
    <div class="playLyric"></div>
    <div class="progress"></div>
    <div class="playFooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishou"></use>
      </svg>
      <svg v-if="playStatus" class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg v-else class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-24gf-playlistMusic"></use>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: ["playDetail", "playStatus","play"],
};
</script>
<style lang="less" scoped>
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(60px);
  }
  .playTop {
    display: flex;
    width: 7.5rem;
    height: 2rem;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    left: 0;
    top: 0;
    color: white;
    padding: 0 0.4rem;
    .icon {
      fill: white;
      width: 0.4rem;
      height: 0.4rem;
    }
    marquee {
      width: 5rem;
      flex: 1;
    }
  }
  .playContent {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    left: 0;
    top: 2rem;
    .needle {
      width: 2.2rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      z-index: 10;
      transform-origin: top left;
      transform: rotate(-15deg);
      transition: all 1s;
    }
    .needle.active {
      width: 2.2rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      z-index: 10;
      transform-origin: top left;
      transform: rotate(3deg);
      transition: all 1s;
    }
    .pancake {
      width: 5rem;
      height: auto;
      position: absolute;
      left: 1.2rem;
      top: 2rem;
    }
    .playImg {
      width: 3.16rem;
      height: 3.16rem;
      border-radius: 1.5rem;
      position: absolute;
      left: 2.1rem;
      top: 2.96rem;
    }
  }
  .playFooter {
    width: 7.5rem;
    height: 1.5rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: white;
    }
    .play.icon {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
</style>