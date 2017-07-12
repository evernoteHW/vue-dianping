import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import foo from '@/components/foo'
import bar from '@/components/bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/foo',
      name: 'foo',
      component: foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar
    }
  ]
})
