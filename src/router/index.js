import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../home/HomePage.vue'
import RobotBuilder from '../build/RobotBuilder.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      home: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      home: 'Build',
      component: RobotBuilder,
    },
  ],
})
