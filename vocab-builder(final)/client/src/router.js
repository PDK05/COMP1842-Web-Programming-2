import { createRouter, createWebHistory } from 'vue-router'

import Words from './views/Words.vue'
import Show from './views/Show.vue'
import New from './views/New.vue'
import Edit from './views/Edit.vue'
// import Test from 'views/Test.vue'
// import Login from '/views/Login.vue'

const route = [
  {
    path: '/',
    redirect: '/words'
  },
  {
    path: '/words/',
    name: 'Words',
    component: Words
  },
  {
    path: '/words/new',
    name: 'New',
    component: New
  },
  {
    path: '/words/show/:id',
    name: 'Show',
    component: Show
  },
  {
    path: '/words/edit/:id',
    name: 'Edit',
    component: Edit
  },
  // {
  //   path: '/words/test/',
  //   name: 'Test',
  //   component: Test
  // },
  // {
  //   path: '/words/login',
  //   name: 'Login',
  //   component: Login
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes: route
})

export default router