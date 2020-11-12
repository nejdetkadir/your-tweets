import Vue from "vue";
import swal from 'sweetalert';
import router from "@/router";

const state = {
  myTweets: [],
  allTweets: []
};

const getters = {
  getMyTweets(state) {
    return state.myTweets;
  },
  getAllTweets(state) {
    return state.allTweets;
  }
};

const mutations = {
  clearTweetData(state) {
    state.myTweets = [];
    state.allTweets = [];
  }
};

const actions = {
  initAllTweets({state, getters, commit}) {
    if (getters.isAuthenticated) {
      Vue.axios.get(`${process.env.VUE_APP_FIREBASE_DB_URL}/tweets.json`)
        .then((res) => {
          commit("clearTweetData");
          let data = [];
          let activeUserData = [];
          state.allTweets = res.data;
          for (let id in res.data) {
            res.data[id].id = id;
            if (res.data[id].email === getters.getUserEmail) {
              activeUserData.push(res.data[id]);
            }
            data.push(res.data[id]);
          }
          state.allTweets = data;
          state.myTweets = activeUserData;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  saveTweet({getters, dispatch}, data) {
    if (getters.getUserEmail) {
      Vue.axios.post(`${process.env.VUE_APP_FIREBASE_DB_URL}/tweets.json`, {
        email: getters.getUserEmail,
        content: data.text
      })
        .then(() => {
          dispatch("initAllTweets");
          swal("Aww yiss!", "Shared your tweet!", "success")
            .then(() => {
              router.replace("/");
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      swal("Error!", "There is a error!", "error");
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
