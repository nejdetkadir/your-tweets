import Vue from 'vue'
import VueRouter from 'vue-router'
import TweetList from "@/components/TweetList";
import Form from "@/components/Form";
import Auth from "@/components/Auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Feed',
    component: TweetList
  },
  {
    path: '/new',
    name: 'New',
    component: Form
  },
  {
    path: '/profile',
    name: 'Profile',
    component: TweetList
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
