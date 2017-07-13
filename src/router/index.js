import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import goods from '@/components/goods'
import ratings from '@/components/ratings'
import sellers from '@/components/sellers'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: sellers
    }
  ]
})
