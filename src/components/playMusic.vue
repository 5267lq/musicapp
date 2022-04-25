<template>
  <div class="playMusic">
    <div class="bg" :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="content">
        <div class="title">
          <!-- 跑马灯标签 -->
          <marquee behavior="scroll" direction="left">{{ playDetail.name }}</marquee>
        </div>
        <!-- <div class="author"></div> -->
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="playContent"></div>
    <div class="playLyric"></div>
    <div class="progreess"></div>
    <div class="playFooter"></div>
  </div>
</template>
<script>
export default {
  props: ["playDetail"],
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
  .playTop{
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
      .icon{
          fill: white;
          width: 0.4rem;
          height: 0.4rem;
      }
      marquee{
          width: 5rem;
          flex: 1;
      }
  }
}
</style>