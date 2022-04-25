<template>
  <div class="playlist">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <div class="title">播放全部</div>
        <div class="num">(共{{ playlist.tracks.length }}首)</div>
      </div>
      <div class="right">
        <div class="btn">
          +收藏({{ changeValue(playlist.subscribedCount) }})
        </div>
      </div>
    </div>
    <div class="list">
      <!-- @click="play(i)"可以直接放在playItem中 -->
      <div class="playItem" v-for="(item, i) in playlist.tracks" :key="i">
        <div class="left">
          <div class="index">{{ i + 1 }}</div>
          <div class="content">
            <div class="title">{{ item.name }}</div>
            <div class="author">
              <span
                class="tag"
                v-for="(tag, index) in playlist.tags"
                :key="index"
                >{{ tag }}</span
              >
              <span>{{ item.al.name }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true" @click="play(i)">
          <!-- <svg class="icon" aria-hidden="true" @click="setPlayindex(i)"> -->
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-shuxiang"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapMutations } from 'vuex';
import store from '../store/index.js'
export default {
  props: ["playlist"],
  // methods:{
  //   ...mapMutations(['setPlayindex'])
  // },
  setup() {
    function changeValue(num) {
      let res = 0;
      if (num > 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num > 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      } else {
        res = num;
      }
      return res;
    }
    function play(index){
      store.commit('setPlayindex',index);
    }
    return {
      changeValue,play
    };
  },
};
</script>
<style lang="less" scoped>
.playlist {
  width: 7.5rem;
  padding: 0 0.4rem;
  margin-top: 0.3rem;
  background-color: white;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  .playlist-top {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.16rem;
      }
      .title {
        font-size: 0.36rem;
        font-weight: 650;
      }
      .num {
        font-size: 0.3rem;
        color: gray;
      }
    }
    .right {
      display: flex;
      .btn {
        font-size: 0.3rem;
        color: white;
        background: orangered;
        height: 0.6rem;
        border-radius: 0.4rem;
        padding: 0.1rem;
      }
    }
  }
  .list {
    .playItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.2rem 0;
      .left {
        display: flex;
        align-items: center;
        .index{
          width: 0.32rem;
          font-size: 0.28rem;
          color:gray;
        }
        .content {
          width: 4.6rem;
          display: flex;
          flex-direction: column;
          margin-left: 0.32rem;
          .title {
            font-size: 0.32rem;
            font-weight: 650;
            margin-bottom: 0.06rem;
          }
          .author{
            color: gray;
            font-size: 0.2rem;
            .tag{
              font-size: 0.16rem;
              color: red;
              border: 1px solid orange;
              border-radius: 0.1rem;
            }
          }
        }
      }
      .right{
        .icon{
          width: 0.33rem;
          height: 0.33rem;
          margin: 0 0.2rem;
          fill: rgb(189, 183, 183);
        }
      }
    }
  }
}
</style>