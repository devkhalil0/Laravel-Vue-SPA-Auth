
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import store from '../Store/Index';

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../Components/Home.vue")
    },

    {
      path: "/login",
      name: "Login",
      component: () => import("../Components/Auth/Login.vue"),
      beforeEnter: (to, from, next) => {
        if(store.state.Authenticated === true)
          {
            store.state.Toast = 'Warning';
            store.state.ToastMessage = 'You are Authenticated !';
            setTimeout(() => {
                store.state.Toast = false;
            }, 3000);
            return next({ name: 'Dashboard'});
          }
          else{
            next();
          }
      }
    },
    {
        path: "/forget-password",
        name: "Forget-Password",
        component: () => import("../Components/Auth/Password/ForgetPassword.vue"),
      },
      {
        path: "/confirm-password",
        name: "Confirm-Password",
        component: () => import("../Components/Auth/Password/ConfirmPassword.vue"),
      },
    {
      path: "/register",
      name: "Register",
      component: () => import("../Components/Auth/Register.vue"),
      beforeEnter: (to, from, next) => {
        if(store.state.Authenticated === true)
          {
            store.state.Toast = 'Warning';
            store.state.ToastMessage = 'You are Authenticated !';
            setTimeout(() => {
                store.state.Toast = false;
            }, 3000);
            return next({ name: 'Dashboard'});
          }
          else{
            next();
          }
      }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../Components/User/Dashboard.vue"),
      },
    // {
    //   path: "/:catchAll(.*)",
    //   name: "NotFound",
    //   component: () => import("../components/NotFound/NotFound.vue")
    // },
  ],
  mode: "history"
});

