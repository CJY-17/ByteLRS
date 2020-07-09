import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../page/home/index.vue')
const CreateRoom = () => import('../page/createroom/index.vue')
const JoinRoom = () => import('../page/joinroom/index.vue')
const OwnerRoom = () => import('../page/ownerroom/index.vue')
const UserRoom = () => import('../page/userroom/index.vue')
const Operate = () => import('../page/operate/index.vue')
const Show = () => import('../page/show/index.vue')
const TopList = () => import('../page/toplist/index.vue')
const Result = () => import('../page/result/index.vue')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/createroom',
      component: CreateRoom
    },
    {
      path: '/joinroom',
      component: JoinRoom
    },
    {
      path: '/ownerroom',
      component: OwnerRoom
    },
    {
      path: '/userroom',
      component: UserRoom
    },
    {
      path: '/result',
      component: Result
    },
    {
      path: '/toplist',
      component: TopList
    },
    {
      path: '/show',
      component: Show
    },
    {
      path: '/operate',
      component: Operate
    }
  ]
})
