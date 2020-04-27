import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../home/HomePage.vue'
import RobotBuilder from '../build/RobotBuilder.vue'
import PartInfo from '../parts/PartInfo.vue'
import BrowseParts from '../parts/BrowseParts.vue'
import BrowseHeads from '../parts/RobotHeads.vue'
import BrowseArms from '../parts/RobotArms.vue'
import BrowseTorsos from '../parts/RobotTorsos.vue'
import BrowseBases from '../parts/RobotBases.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder,
    },
    {
      // Va antes de partinfo
      path: '/parts/browse', 
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          name: 'BrowseHeads',
          path: 'heads', // ruta relativa a la ruta /browse/
          component: BrowseHeads
        },
        {
          name: 'BrowseArms',
          path: 'arms',
          component: BrowseArms
        },
        {
          name: 'BrowseTorsos',
          path: 'torsos',
          component: BrowseTorsos
        },
        {
          name: 'BrowseBases',
          path: 'bases',
          component: BrowseBases
        },
      ]
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true, // pasa los parametros como props del componente
    },
  ],
})
