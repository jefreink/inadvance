import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollReveal from "vue-scroll-reveal";
import VueObserveVisibility from 'vue-observe-visibility'


import routes from './routes'

var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);

Vue.use(VueRouter)
Vue.use(VueScrollReveal, {
  reset: false,
  duration: 800,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.35,.01,.17,1.33)",
  mobile: true,
});
Vue.use(VueObserveVisibility)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
