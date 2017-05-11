import Vue from 'vue';
import Router from 'vue-router';
import LoginPageComponent from '@/components/LoginPageComponent';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'LoginPageComponent',
    component: LoginPageComponent,
  }],
});
