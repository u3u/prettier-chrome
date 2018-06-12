import Vue from 'vue';
import Router from 'vue-router';
import Popup from './views/Popup';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/popup',
      name: 'popup',
      component: Popup,
    },
    {
      path: '*',
      redirect: '/popup',
    },
  ],
});
