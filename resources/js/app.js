
require('./bootstrap');

window.Vue = require('vue').default;

// main component
Vue.component('main-component', require('./App.vue').default);
// extra component register \
Vue.component('dropdown', require('./Components/Dropdown/Dropdown.vue').default);
// Toast Component
Vue.component('toast-success', require('./Components/Toast/ToastSuccess.vue').default)
Vue.component('toast-error', require('./Components/Toast/ToastError.vue').default)
Vue.component('toast-warning', require('./Components/Toast/ToastWarning.vue').default)

// Vue Router
import router from './Router/Index'
//  Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import StoreVuex from './Store/Index'
const store = new Vuex.Store(StoreVuex)
// Vue Meta
import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})
// mixin
Vue.mixin
 ({
    computed:{
            Authenticated(){
                return  this.$store.getters.Authenticated;
            },
            AuthUser(){
                return  this.$store.getters.AuthUser;
            },
            CurrentRoute(){
                return this.$route.name;
            },
        },

    })
let auth = localStorage.getItem("auth");


if(auth){
    store.dispatch('authUser').then(() => {
    store.dispatch('checkAdmin');

        const app = new Vue({
            metaInfo: {
                titleTemplate: title => (title ? `${title} - Khalilvaai` : 'Khalilvaai'),
              },
            store,
            router,
            el: '#app',
        });
    });
}else {
    const app = new Vue({
        metaInfo: {
            titleTemplate: title => (title ? `${title} - Khalilvaai` : 'Khalilvaai'),
          },
        store,
        router,
        el: '#app',
    });
}
