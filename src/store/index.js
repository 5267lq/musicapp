import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist: [{
      name: '什么样的爱情',
      id: 1465245956,
      al: {
        id: 92879015,
        name: "什么样的爱情",
        pic: 109951165165023900,
        picUrl: "http://p4.music.126.net/9be-x-79CK496sa2_FcWsQ==/109951165165023901.jpg",
        pic_str: "109951165165023901",
      }
    }],
    playCurrentIndex: 0,
  },
  getters: {
  },
  mutations: {
    setPlaylist: function (state, value) {
      state.playlist = value
    }
  },
  actions: {
  },
  modules: {
  }
})
