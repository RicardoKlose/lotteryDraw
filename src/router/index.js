import Vue from 'vue';
import Router from 'vue-router';
import Double from '@/components/Double';
import Mega from '@/components/Mega';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Double',
      name: 'Double',
      component: Double,
    },
    {
      path: '/Mega',
      name: 'Mega',
      component: Mega,
    },
    {
      path: '*',
      redirect: '/Double',
    },
  ],
  linkActiveClass: 'is-active',
});
