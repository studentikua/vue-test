import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/who',
    name: 'who',
    component: () => import('../views/WhoView.vue')
  },
  {
    path: '/where',
    name: 'where',
    component: () => import('../views/WhereView.vue')
  },
  {
    path: '/what',
    name: 'what',
    component: () => import('../views/WhatView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
