import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import register from '@/components/login/register'
import setting from '@/components/setting/setting'
import tabbar from '@/components/common/tabbar'
import about from '@/components/setting/apps/about'
import account from '@/components/setting/apps/account'
import repair from '@/components/repair/repair'
import second from '@/components/second/second'
import information from '@/components/information/information'
import lost from '@/components/lost/lost'


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
      path: '/setting',
      name: 'setting',
      component: setting
    },
     {
       path: '/lost',
       name: 'lost',
       component: lost
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
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path:'/tabbar',
      name: 'tabbar',
      component: tabbar
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/repair',
      name: 'repair',
      component: repair
    },
    {
      path: '/second',
      name: 'second',
      component: second
    }
  ],
  linkActiveClass:''
})
