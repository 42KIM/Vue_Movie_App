import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import List  from './List ';
import NotFound from './NotFound';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/list/:keyword',
      name: 'list',
      component: List 
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});