// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import createRouter from './router'

Vue.config.productionTip = false

export function createApp (options) {
  const router = createRouter()

  /* eslint-disable no-new */
  const app = new Vue(Object.assign({
    router,
    render: h => h(App)
  }, options))

  return {
    app,
    router
  }
}
