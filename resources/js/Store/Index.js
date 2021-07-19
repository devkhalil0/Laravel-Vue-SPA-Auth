import axios from 'axios';
import router from '../Router/Index'
export default {

    state: {
        // Toast Status 
        Toast: false,
        ToastMessage: null,
    },
    actions: { 
        // authUser ({ commit, dispatch }) {
        //     return axios.get('/api/user').then((response) => {
        //         commit('SET_AUTHENTICATED', true)
        //         commit('SET_AUTHUSER', response.data)
        //         localStorage.setItem("auth", true);
                
        //         if(router.currentRoute.name !== null){
        //             router.push({ name: 'Dashboard' })
        //         };

        //     }).catch(() => {
        //         commit('SET_AUTHENTICATED', false)
        //         commit('SET_AUTHUSER', null)
        //         localStorage.removeItem("auth");

        //         if(this.CurrentRoute != 'Login'){
        //             router.push({ name: 'Login' })
        //         };
        //     })
        // },
        // checkAdmin({commit, dispatch}){
        //     return axios.get('/api/authenticated/admin')
        //     .then((res) => {
        //         if(res.data == true)
        //         {
        //             commit('SET_ADMIN', true)
        //         }else{
        //             commit('SET_ADMIN', false)
        //         }

        //     }).catch(() => {
        //         commit('SET_ADMIN', false)

        //     })
        // }
    },
    mutations: {
        SET_TOAST (state, status) {
            state.Toast = status;
        },
        SET_ToastMessage(state, message){
            state.ToastMessage = message;
        }
     },
    getters: { 
        Toast(state){
            return state.Toast;
        },
        
     }

}