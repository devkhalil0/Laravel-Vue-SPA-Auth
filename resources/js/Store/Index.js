import axios from 'axios';
import router from '../Router/Index'
export default {

    state: {
        // Admin and Email Verify System On Off 
        EmailVerifyStatus: false,
        AdminStatus: false,

        // Toast Status
        Toast: false,
        ToastMessage: null,
        // Auth User
        AuthUser: [],
        Authenticated: false,
        // Admin Check
        IsAdmin: false,
        // Email Verification
        EmailVerifyMessage: false,
        
    },
    actions: {
        authUser ({ commit, dispatch }) {
            return axios.get('/api/user').then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_AUTHUSER', response.data)
                localStorage.setItem("auth", true);

                if(router.currentRoute.name !== null){
                    router.push({ name: 'Dashboard' })
                };

            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_AUTHUSER', null);
                localStorage.removeItem("auth");

                if(this.CurrentRoute != 'Login'){
                    router.push({ name: 'Login' })
                };
            })
        },
        checkAdmin({commit, dispatch}){
            return axios.get('/api/authenticated/admin')
            .then((res) => {
                if(res.data == true)
                {
                    commit('SET_ADMIN', true)
                }else{
                    commit('SET_ADMIN', false)
                }

            }).catch(() => {
                commit('SET_ADMIN', false)

            })
        }
    },
    mutations: {
        SET_TOAST (state, status) {
            state.Toast = status;
        },
        SET_ToastMessage(state, message){
            state.ToastMessage = message;
        },
        SET_AUTHUSER (state, user) {
            state.AuthUser = user;
        },
        SET_AUTHENTICATED (state, data) {
            state.Authenticated = data;
        },
        SET_ADMIN (state, data) {
            state.IsAdmin = data;
        },
     },
    getters: {
        Toast(state){
            return state.Toast;
        },
        ToastMessage(state){
            return state.ToastMessage;
        },
        AuthUser(state){
            return state.AuthUser;
        },
        Authenticated(state){
            return state.Authenticated;
        },
        EmailVerifyMessage(state){
            return state.EmailVerifyMessage;
        },
        IsAdmin(state){
            return state.IsAdmin;
        },
        AdminStatus(state){
            return state.AdminStatus;
        },

     }

}
