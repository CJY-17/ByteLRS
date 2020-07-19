import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../page/home/index.vue')
const Rule = () => import('../page/home/rule.vue')
const DayRule = () => import('../page/home/dayrule.vue')
const DarkRule = () => import('../page/home/darkrule.vue')
const Skill = () => import('../page/home/skill.vue')
const CreateRoom = () => import('../page/createroom/index.vue')
const JoinRoom = () => import('../page/joinroom/index.vue')
const OwnerRoom = () => import('../page/ownerroom/index.vue')
const UserRoom = () => import('../page/userroom/index.vue')
const Operate = () => import('../page/operate/index.vue')
const Show = () => import('../page/show/index.vue')
const TopList = () => import('../page/toplist/index.vue')
const Result = () => import('../page/result/index.vue')
const Leaderboard = () => import('../page/leaderboard/index.vue')
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
      path: '/leaderboard',
      component: Leaderboard
    },
    {
      path: '/rule',
      component: Rule,
      children: [
        {
          path: '/rule',
          redirect: 'dayrule'
        },
        {
          path:'dayrule',
          component:DayRule
        },
        {
          path:'darkrule',
          component:DarkRule
        },
        {
          path:'skill',
          component:Skill
        }
      ]
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
      name: 'OwnerRoom',
      path: '/ownerroom',
      component: OwnerRoom
    },
    {
      name:'UserRoom',
      path: '/userroom',
      component: UserRoom
    },
    {
      name:'Result',
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
      name:'Operate',
      path: '/operate',
      component: Operate
    }
  ]
})
