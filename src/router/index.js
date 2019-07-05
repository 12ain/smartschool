import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import login from '@/components/login/login'
import register from '@/components/login/register'
import setting from '@/components/setting/setting'
import application from '@/components/application/application'
import message from '@/components/message/message'
import tabbar from '@/components/common/tabbar'
import lost from '@/components/application/apps/lost'
import repair from '@/components/application/apps/repair'
import second from '@/components/application/apps/second'
import about from '@/components/setting/apps/about'
import account from '@/components/setting/apps/account'
import feedback from '@/components/setting/apps/feedback'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/application',
      name: 'application',
      component: application,
    },      
    { 
      path:'/lost', 
      name: 'lost',
      component: lost 
    },
    {
      path: '/repair',
      name: 'repair',
      component: repair
    },
    { path:'/second',
      name: 'second',
      component: second
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path:'/tabbar',
      name: 'tabbar',
      component: tabbar
    }
  ],
  linkActiveClass:'mui-active'
})
