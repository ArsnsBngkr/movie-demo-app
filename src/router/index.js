import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home-page.vue'
import LoginUser from '../views/login-user.vue'
import FavouritesMovies from '../views/favourite-movies.vue' 

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage
  },
  {
    path: '/login-user',
    name: 'LoginUser',
    component: LoginUser
  },
  {
    path: '/favourite-movies',
    name: 'Favourite Movies',
    component: FavouritesMovies
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
