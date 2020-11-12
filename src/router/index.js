import Vue from 'vue'
import VueRouter from 'vue-router'
import TweetList from "@/components/TweetList";
import Form from "@/components/Form";
import Auth from "@/components/Auth";

import {store} from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Feed',
    component: TweetList,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    }
  },
  {
    path: '/new',
    name: 'New',
    component: Form,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    }

  },
  {
    path: '/profile',
    name: 'Profile',
    component: TweetList,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    }

  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
