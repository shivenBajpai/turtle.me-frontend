import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Post from '../views/Post.vue'
import Tutles from '../views/Tutles.vue'
import Newsletter from '../views/Newsletter.vue'
import Optout from '../views/Optout.vue'
import FourOFour from '../views/FourOFour.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/tutles' ,
    name: 'EasterEgg',
    component: Tutles
  },
  {
    path: '/newsletter',
    name: 'Newsletter',
    component: Newsletter
  },
  {
    path: '/newsletter/optout',
    name: 'NewsletterOptout',
    component: Optout
  },
  {
    path: '/*',
    name: '404',
    component: FourOFour
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
