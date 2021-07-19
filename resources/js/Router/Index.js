
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

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
    },
    // {
    //   path: "/:catchAll(.*)",
    //   name: "NotFound",
    //   component: () => import("../components/NotFound/NotFound.vue")
    // },
  ],
  mode: "history"
});

