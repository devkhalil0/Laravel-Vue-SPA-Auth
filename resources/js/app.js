
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


const app = new Vue({
    router,
    store,
    el: '#app',
});
