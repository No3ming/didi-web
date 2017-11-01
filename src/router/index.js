import Vue from 'vue'
import Router from 'vue-router'

import NavBar from '../components/NavBar.vue'

import CanOrder from '../views/CanOrder.vue'
import Progress from '../views/Progress.vue'
import Completed from '../views/Completed.vue'
import OrderDetail from '../views/OrderDetail.vue'

import NotFound from '../views/NotFound.vue'

Vue.use(Router)

const routes = [
  {
    path: '/canOrder',
    name: ' 我要接单',
    components: {
      default: CanOrder,
      nav: NavBar
    }
  },
  {
    path: '/progress',
    components: {
      default: Progress,
      nav: NavBar
    }
  },
  {
    path: '/completed',
    components: {
      default: Completed,
      nav: NavBar
    }
  },
  {
    path: '/order/detail/:id',
    components: OrderDetail
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.afterEach(to => {
  switch (to.path) {
    case '/canOrder':
      document.title = '我要接单'
      break
    case '/not-found':
      document.title = '404'
      break
    default:
      break
  }
})

export default router
