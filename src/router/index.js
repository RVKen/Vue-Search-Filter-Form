import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../components/pages/App';
import LoginPageComponent from '../components/organisms/LoginPageComponent';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '',
      name: 'App',
      component: App,
      children: [
        {
          path: 'login',
          name: 'LoginPageComponent',
          component: LoginPageComponent,
        },
      ],
    },
  ],
});
