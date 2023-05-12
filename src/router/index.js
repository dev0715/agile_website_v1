import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dragonfly from '@/components/Dragonfly'
import DragonflyRegisterForm from '@/components/Dragonfly/RegisterForm'
import Firefly from '@/components/Firefly'
import FireflyRegisterForm from '@/components/Firefly/RegisterForm'
import Bumblebee from '@/components/Bumblebee'
import BumblebeeRegisterForm from '@/components/Bumblebee/RegisterForm'
import Pangolin from '@/components/Pangolin'
import PangolinRegisterForm from '@/components/Pangolin/RegisterForm'
import Partners from '@/components/Partners'
import Meta from 'vue-meta'
Vue.use(Router)
Vue.use(Meta)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/dragonfly',
      name: 'Dragonfly',
      component: Dragonfly,
      meta: {
        title: route => 'Dragonfly',
      },
      children:[
        {
          path: '/dragonfly/dragon_register',
          name: 'DragonRegister',
          components: {
            default: DragonflyRegisterForm
          },
          meta: {
            title: route => 'DragonRegister',
          },
        }
      ]
    },
    {
      path: '/firefly',
      name: 'Firefly',
      component: Firefly,
      meta: {
        title: route => 'Firefly',
      },
      children:[
        {
          path: '/firefly/firefly_register',
          name: 'FireflyRegister',
          components: {
            default: FireflyRegisterForm
          },
          meta: {
            title: route => 'FireflyRegister',
          },
        }
      ]
    },
    {
      path: '/bumblebee',
      name: 'Bumblebee',
      component: Bumblebee,
      meta: {
        title: route => 'Bumblebee',
      },
      children:[
        {
          path: '/bumblebee/bumblebee_register',
          name: 'BumblebeeRegister',
          components: {
            default: BumblebeeRegisterForm
          },
          meta: {
            title: route => 'BumblebeeRegister',
          },
        }
      ]
    },
    {
      path: '/pangolin',
      name: 'Pangolin',
      component: Pangolin,
      meta: {
        title: route => 'Pangolin',
      },
      children:[
        {
          path: '/pangolin/pangolin_register',
          name: 'PangolinRegister',
          components: {
            default: PangolinRegisterForm
          },
          meta: {
            title: route => 'PangolinRegister',
          },
        }
      ]
    },
    {
      path: '/partners',
      name: 'Partners',
      component: Partners,
    },
    {
      path: '/contactus',
      name: 'Contactus',
      beforeEnter(to, from, next) {
        window.location.href = "https://agiletestware.atlassian.net/servicedesk/customer/portal/2";
      }
    }
  ]
})

export default router;
