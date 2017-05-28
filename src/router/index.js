import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }, {
      // All invalid routes will redirect here
      path: '*',
      redirect: '/blog'
    }
  ]
})
