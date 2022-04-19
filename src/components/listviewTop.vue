<template>
  <div class="listViewTop">
    <img class="bg" :src="playlist.coverImgUrl" alt="" />
    <div class="listViewTopNav">
      <div class="back" @click="$router.go(-1)">
        <!-- <router-link :to="{ path: '/' }"> -->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuojiantou"></use>
          </svg>
        <!-- </router-link> -->
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
    <div class="content">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl" alt="" />
        <div class="count">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-24gl-play"></use>
          </svg>
          <span>{{ changeValue(playlist.playCount) }}</span>
        </div>
      </div>
      <div class="contentRight">
        <h3>{{ playlist.name }}</h3>
        <div class="creator">
          <!-- creator为空，需在父组件添加 -->
          <img class="header" :src="playlist.creator.avatarUrl" />
          <span>{{ playlist.creator.nickname }}</span>
        </div>
        <div class="description">{{ playlist.description }}</div>
      </div>
    </div>
    <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["playlist"],
  setup() {
    function changeValue(num) {
      let res = 0;
      if (num > 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num > 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    }
    return {
      changeValue,
    };
  },
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
    .search {
      margin-right: 0.5rem;
    }
  }
  .back,
  .right {
    display: flex;
    color: white;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    .contentLeft {
      position: relative;
      img {
        width: 2.5rem;
        height: 2.5rem;
      }
      .count {
        position: absolute;
        right: 0.1rem;
        top: 0.02rem;
        font-size: 0.24rem;
        color: white;
        display: flex;
        align-items: center;
        .icon {
          fill: white;
        }
        span {
          font-weight: 900;
        }
      }
    }
    .contentRight {
      width: 3.9rem;
      h3 {
        color: white;
      }
      .creator {
        display: flex;
        align-items: center;
        margin: 0.2rem 0;
        img.header {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 0.3rem;
          margin-right: 0.2rem;
        }
        span {
          color: white;
        }
      }
      .description {
        font-size: 0.24rem;
        color: white;
        // 文本显示为两行,超过部分隐藏并使用省略号
        // 修改 width 属性查看效果。
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .iconList {
    display: flex;
    justify-content: space-around;
    .iconItem {
      display: flex;
      flex-direction: column;
      .icon {
        width: 0.45rem;
        height: 0.45rem;
        fill: white;
      }
      span {
        font-size: 0.24rem;
        padding-top: 0.15rem;
        color: white;
      }
    }
  }
}
</style>