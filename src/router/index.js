import Vue from 'vue'
import VueRouter from 'vue-router'
import TweetList from "@/components/TweetList";
import Form from "@/components/Form";

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
