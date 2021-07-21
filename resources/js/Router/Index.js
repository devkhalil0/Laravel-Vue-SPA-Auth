
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
    path: "/verify-email",
    name: "Verify-Email",
    component: () => import("../Components/Auth/VerifyEmail.vue"),
    },
    {
    path: "/register",
    name: "Register",
    component: () => import("../Components/Auth/Register.vue"),
    beforeEnter: (to, from, next) => {
    if(store.state.Authenticated === true)
        {
        store.state.Toast = 'Warning';
        store.state.ToastMessage = 'You are authenticated !';
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
    // {
    // path: "/dashboard",
    // name: "Dashboard",
    // component: () => import("../Components/User/Dashboard.vue"),
    // beforeEnter: (to, from, next) => {
    //     axios.get('/api/authenticated')
    //         .then(()=>{
    //             console.log(store.state.Authenticated);
    //             if(store.state.EmailVerifyStatus === true){
    //                 if(store.state.AuthUser.email_verified_at === null){

    //                     store.state.ToastMessage = 'Please Verify Your Email !';
    //                     store.state.Toast = 'Warning';
    //                     setTimeout(() => {
    //                         store.state.Toast = false;
    //                     }, 2000);
    //                     return next({ name: 'Verify-Email'});
    //                 }else{
    //                     next();
    //                 }
    //             }else{
    //                 next();
    //             }

    //         })
    //         .catch(()=>{
    //         store.state.ToastMessage = 'You are not authenticated !';
    //         store.state.Toast = 'Warning';
    //         setTimeout(() => {
    //             store.state.Toast = false;
    //         }, 2000);
    //         return next({ name: 'Login'});

    //         })
    //     },
    //   },
    {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../Components/User/Dashboard.vue"),
    beforeEnter: (to, from, next) => {
        setTimeout(() => {
            if(store.state.AdminStatus){
                if(store.state.Authenticated && store.state.AuthUser.role === 'user'){
                    if(store.state.EmailVerifyStatus === true){
                        if(store.state.AuthUser.email_verified_at === null){

                            store.state.ToastMessage = 'Please Verify Your Email !';
                            store.state.Toast = 'Warning';
                            setTimeout(() => {
                                store.state.Toast = false;
                            }, 2000);
                            return next({ name: 'Verify-Email'});
                        }else{
                            next();
                        }
                    }else{
                        next();
                    }
                }else{
                    store.state.ToastMessage = 'No Permission !';
                    store.state.Toast = 'Warning';
                    setTimeout(() => {
                        store.state.Toast = false;
                    }, 2000);
                    return next({ name: 'Admin-Dashboard'});
                }
            }else{
                if(store.state.Authenticated){
                    if(store.state.EmailVerifyStatus === true){
                        if(store.state.AuthUser.email_verified_at === null){

                            store.state.ToastMessage = 'Please Verify Your Email !';
                            store.state.Toast = 'Warning';
                            setTimeout(() => {
                                store.state.Toast = false;
                            }, 2000);
                            return next({ name: 'Verify-Email'});
                        }else{
                            next();
                        }
                    }else{
                        next();
                    }
                }else{
                    store.state.ToastMessage = 'No Permission !';
                    store.state.Toast = 'Warning';
                    setTimeout(() => {
                        store.state.Toast = false;
                    }, 2000);
                    return next({ name: 'Admin-Dashboard'});
                }
            }
        }, 1000);
    }
    },
    //   For Admin
    {
    path: "/admin/dashboard",
    name: "Admin-Dashboard",
    component: () => import("../Components/Admin/Dashboard.vue"),
    beforeEnter: (to, from, next) => {
        setTimeout(() => {
            if(store.state.Authenticated && store.state.IsAdmin){
                if(store.state.EmailVerifyStatus === true){
                    if(store.state.AuthUser.email_verified_at === null){

                        store.state.ToastMessage = 'Please Verify Your Email !';
                        store.state.Toast = 'Warning';
                        setTimeout(() => {
                            store.state.Toast = false;
                        }, 2000);
                        return next({ name: 'Verify-Email'});
                    }else{
                        next();
                    }
                }else{
                    next();
                }
            }else{
                store.state.ToastMessage = 'No Permission !';
                store.state.Toast = 'Warning';
                setTimeout(() => {
                    store.state.Toast = false;
                }, 2000);
                return next({ name: 'Dashboard'});
            }
        }, 1000);
    }
      },
    // {
    //   path: "/:catchAll(.*)",
    //   name: "NotFound",
    //   component: () => import("../components/NotFound/NotFound.vue")
    // },
  ],
  mode: "history"
});

