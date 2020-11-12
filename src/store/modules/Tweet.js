import Vue from "vue";
//import router from "@/router";

const state = {
  myTweets: []
};

const getters = {
  getMyTweets(state) {
    return state.myTweets;
  }
};

const mutations = {};

const actions = {
  initMyTweets() {
    Vue.axios.post(`${process.env.VUE_APP_FIREBASE_DB_URL}/tweets.json`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  saveTweet({getters}, data) {
    Vue.axios.post(`${process.env.VUE_APP_FIREBASE_DB_URL}/tweets.json`, {
      email: getters.getUserEmail,
      content: data.text
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
