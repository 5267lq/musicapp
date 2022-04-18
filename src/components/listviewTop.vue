<template>
  <div class="listViewTop">
    <img class="bg" :src="playlist.coverImgUrl" alt="" />
    <div class="listViewTopNav">
      <div class="back">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <div class="search">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31liebiao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["playlist"],
};
</script>

<style lang="less" scoped>
.listViewTop {
  width: 7.5rem;
  height: 6rem;
  padding: 0 0.4rem;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(40px);
  }
  .listViewTopNav {
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.35rem;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: white;
    }
    .title {
      margin-left: 0.4rem;
    }
    .search{
        margin-right: 0.5rem;
    }
  }
  .back,
  .right {
    display: flex;
    color: white;
  }
}
</style>