import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import register from '@/components/login/register'
import setting from '@/components/setting/setting'
import tabbar from '@/components/common/tabbar'
import about from '@/components/setting/apps/about'
import account from '@/components/setting/apps/account'
import repair from '@/components/repair/repair'
import repairdetails from '@/components/repair/repairdetails'
import changerepair from '@/components/repair/changerepair'
import second from '@/components/second/second'
import seconddetails from '@/components/second/seconddetails'
import changesecond from '@/components/second/changesecond'
import information from '@/components/information/information'
import entrance from '@/components/information/entrance'
import lost from '@/components/lost/lost'
import lostdetails from '@/components/lost/lostdetails'
import changelost from '@/components/lost/changelost'
import view from '@/components/common/view'
import school from '@/components/setting/apps/school'
import myLost from '@/components/setting/apps/myLost'
import myRepair from '@/components/setting/apps/myRepair'
import mySecond from '@/components/setting/apps/mySecond'
import admin from '@/components/admin/admin'
import manageEntrance from '@/components/admin/manageEntrance'
import manageInformation from '@/components/admin/manageInformation'
import manageLost from '@/components/admin/manageLost'
import manageRepair from '@/components/admin/manageRepair'
import manageSecond from '@/components/admin/manageSecond'
import changeInformation from '@/components/admin/changeInformation'
import changeEntrance from '@/components/admin/changeEntrance'

Vue.use(Router)

const router= new Router({
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
      component: setting,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/lost',
      name: 'lost',
      component: lost,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/lostdetails',
      name: 'lostdetails',
      component: lostdetails,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/changelost',
      name: 'changelost',
      component: changelost,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/school',
      name: 'school',
      component: school,
    },
    {
      path: '/account',
      name: 'account',
      component: account,
      meta: {
        checkLogined: true
      },
    },
    {
      path:'/tabbar',
      name: 'tabbar',
      component: tabbar,
    },
    {
      path: '/information',
      name: 'information',
      component: information,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/changeInformation',
      name: 'changeInformation',
      component: changeInformation,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: entrance,
    },
    {
      path: '/changeEntrance',
      name: 'changeEntrance',
      component: changeEntrance,
    },
    {
      path: '/repair',
      name: 'repair',
      component: repair,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/repairdetails',
      name: 'repairdetails',
      component: repairdetails,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/changerepair',
      name: 'changerepair',
      component: changerepair,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/second',
      name: 'second',
      component: second,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/seconddetails',
      name: 'seconddetails',
      component: seconddetails,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/changesecond',
      name: 'changesecond',
      component: changesecond,
      meta: {
        checkLogined: true
      },
    },
    {
      path: '/view',
      name: 'view',
      component: view,
    },
    {
      path: '/myLost',
      name: 'myLost',
      component: myLost,
    },
    {
      path: '/myRepair',
      name: 'myRepair',
      component: myRepair,
    },
    {
      path: '/mySecond',
      name: 'mySecond',
      component: mySecond,
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
    },
    {
      path: '/manageEntrance',
      name: 'manageEntrance',
      component: manageEntrance,
    },
    {
      path: '/manageInformation',
      name: 'manageInformation',
      component: manageInformation,
    },
    {
      path: '/manageLost',
      name: 'manageLost',
      component: manageLost,
    },
    {
      path: '/manageRepair',
      name: 'manageRepair',
      component: manageRepair,
    },
    {
      path: '/manageSecond',
      name: 'manageSecond',
      component: manageSecond,
    },
  ],
  linkActiveClass:''
})
// router.beforeEach((to, from, next) => {
//       if (to.meta.checkLogined) {
//         if (
//           window.localStorage.getItem("uid") &&
//           window.localStorage.getItem("upsd")
//         ) {
//           next({
//             path: "/",
//           });
//         } else {
//           next();
//         }
//       } else {
//         next();
//       }
//     });
export default router;