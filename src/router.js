import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AuditServer from './views/AuditServer.vue'
import SearchPage from './views/SearchPage.vue'
import Audits from './views/Audits.vue'
import Reports from './views/Reports.vue'
import ServersReports from './views/ServersReports.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/server',
      name: 'server',
      component: AuditServer
    },
    {
      path: '/searchServer',
      name: 'searchServer',
      component: SearchPage
    },
    {
      path: '/audits',
      name: 'audits',
      component: Audits
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    },
    {
      path: '/serversReports',
      name: 'serversReports',
      component: ServersReports
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
