import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CateGoryList from '../views/CategoryList.vue'

import ItemList from '../views/itemList.vue'
import ItemEdit from '../views/itemEdit.vue'

import HeroList from '../views/HeroList.vue'
import HeroEdit from '../views/HeroEdit.vue'

import ArticlesList from '../views/ArticlesList.vue'
import ArticlesEdit from '../views/ArticlesEdit.vue'

import AdsList from '../views/AdsList.vue'
import AdsEdit from '../views/AdsEdit.vue'

import Login from '../views/Login.vue'

import AdminUserList from '../views/AdminUserList.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login, meta: { isPublic: true } },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/categories/create', component: CategoryEdit },
      { path: '/categories/edit/:id', component: CategoryEdit, props: true },
      { path: '/categories/list', component: CateGoryList },


      { path: '/items/create', component: ItemEdit },
      { path: '/items/edit/:id', component: ItemEdit, props: true },
      { path: '/items/list', component: ItemList },


      { path: '/heroes/create', component: HeroEdit },
      { path: '/heroes/edit/:id', component: HeroEdit, props: true },
      { path: '/heroes/list', component: HeroList },

      { path: '/articles/create', component: ArticlesEdit },
      { path: '/articles/edit/:id', component: ArticlesEdit, props: true },
      { path: '/articles/list', component: ArticlesList },

      { path: '/ads/create', component: AdsEdit },
      { path: '/ads/edit/:id', component: AdsEdit, props: true },
      { path: '/ads/list', component: AdsList },

      { path: '/admin_users/create', component: AdminUserEdit },
      { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true },
      { path: '/admin_users/list', component: AdminUserList },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//设置导航守卫
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router
