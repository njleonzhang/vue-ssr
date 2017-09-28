import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

let createRouter = function () {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
    }]
  })
}

export default createRouter
