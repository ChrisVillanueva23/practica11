import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DirectorioHorario from '@/views/DirectorioHorario.vue'
import EducacionSuperiorView from '@/views/EducacionSuperiorView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/directorio',
    name: 'directorio',
    component: DirectorioHorario
  },

  {
    path: '/educacion',
    name: 'educacion',
    component: EducacionSuperiorView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
