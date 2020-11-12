import Vue from 'vue';
import Vuex from 'vuex';
import swal from 'sweetalert';
import router from "@/router";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== "";
    }
  },
  mutations: {
    setToken(state, token){
      state.token = token;
    },
    clearToken(state){
      state.token = "";
      localStorage.removeItem("token");
      router.replace("/auth");
    }
  },
  actions: {
    auth({commit}, data) {
      const url = data.isRegistered ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}` : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`;
      return Vue.axios.post(url, {
        email: data.email,
        password: data.password,
        returnSecureToken: true
      }).then((res) => {
        commit("setToken", res.data.idToken);
        localStorage.setItem("token", res.data.idToken);
      }).catch(() => {
        swal("Error!", "Please check your information", "error");
      });
    },
    logout({commit}) {
      commit("clearToken");
    },
    initToken({commit}) {
      let token = localStorage.getItem("token");
      if (token) {
        commit("setToken", token);
        router.replace("/");
      } else {
        router.replace("/auth");
        return false
      }
    }
  }
});
