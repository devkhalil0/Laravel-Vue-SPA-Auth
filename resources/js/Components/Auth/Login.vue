<template>
    <div class="mt-3 flex flex-col sm:justify-center items-center ml-2 mr-2">
        <div class="w-full sm:max-w-md bg-white shadow overflow-hidden rounded-lg">
            <div class="w-full bg-gray-100 p-3 text-lg">
                <div class="ml-4">Login</div>
            </div>
            <div class="w-ful mt-2 px-6 py-4">
                <div v-if="EmailVerifyMessage" class="text-md font-semibold p-1 bg-green-500 rounded text-white mt-2 mb-3">
                    <div class="flex justify-between">
                        <div class="ml-4 p-1">
                            Verify Your Email !
                        </div>
                        <div @click="EmailVerifyMessageHide" class="mr-2 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div v-if="warningMessage" class="text-md font-semibold p-1 bg-red-400 rounded text-white mt-2 mb-3">
                    <div class="flex justify-between">
                        <div class="ml-4 p-1">
                            {{ warningMessage }}
                            <br>
                            For Verify Your Email -
                            <router-link :to="{name: 'Verify-Email'}" class="text-green-200 underline font-bold">Click Here</router-link>
                        </div>
                        <div @click="EmailVerifyWarningHide" class="mr-2 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="container my-2 mx-auto px-2">
                    <form @submit.prevent="submit">
                        <div class="">
                            <label class="block font-medium text-sm text-gray-700">Email</label>
                            <input class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="email" v-model="form.email" required autocomplete="current-email" />
                        </div>

                        <div class="mt-1">
                            <label class="block font-medium text-sm text-gray-700">Password</label>
                            <input class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="password" v-model="form.password" required autocomplete="current-password" />
                        </div>

                        <div class="block mt-4">
                            <label class="flex items-center">
                                <input type="checkbox" v-model="form.remember" class="rounded border-gray-300 text-indigo-600 shadow focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                <span class="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>

                        <div class="flex items-center justify-between mt-4">
                            <router-link :to="{name: 'Forgot-Password'}" class="text-blue-500 font-medium">
                                Forgot Password ?
                            </router-link>
                            <loading-spinner :loadingSpinner="loadingSpinner" type="submit" class="ml-4 inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Login</loading-spinner>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        metaInfo:{
                title: 'Login',
            },
        data(){
            return{
                loadingSpinner: false,
                warningMessage: '',
                form:{
                    email: 'dexoga@mailinator.com',
                    password: '11111111',
                    remember: false
                    }
            }
        },
        computed:{
            EmailVerifyMessage(){
                return this.$store.getters.EmailVerifyMessage;
            },
        },
        methods:{
            GetUser(){
                axios.get('/api/user')
                .then((res)=>{
                this.$store.commit('SET_AUTHUSER', res.data);
                this.$store.commit('SET_AUTHENTICATED', true);
                localStorage.setItem("auth", true);
                })
            },
            submit(){
                this.loadingSpinner = true;
                axios.post('api/login', this.form)
                .then((res) => {
                    if(res.data.success)
                    {
                    this.loadingSpinner = false;
                    this.$store.commit('SET_TOAST', 'Success');
                    this.$store.commit('SET_ToastMessage', res.data.success);
                    setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                    }, 3000);
                    this.form.email = '';
                    this.form.password = '';
                    this.GetUser();
                    if(this.$store.getters.AdminStatus){
                        if(this.$store.getters.AuthUser.role === 'admin'){
                            this.$router.push({name: 'Admin-Dashboard'});
                        }else{
                            this.$router.push({name: 'Dashboard'});
                        }
                    }else{
                        this.$router.push({name: 'Dashboard'});
                    }
                    this.$store.dispatch('checkAdmin');
                    }
                    if(res.data.warning)
                    {
                    this.loadingSpinner = false;
                    this.warningMessage = res.data.warning;
                    this.form.password = '';
                    }
                    if(res.data.errors)
                    {
                    this.loadingSpinner = false;
                    this.form.password = '';
                    this.$store.commit('SET_TOAST', 'Errors');
                    this.$store.commit('SET_ToastMessage', res.data.errors);
                    setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                    }, 3000);
                    }

                })
                .catch((e) => {
                    this.loadingSpinner = false;
                    this.$store.commit('SET_TOAST', 'Warning');
                    this.$store.commit('SET_ToastMessage', 'Something Is Wrong !');
                    setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                    }, 3000);
                })
            },
            EmailVerifyMessageHide(){
                this.$store.state.EmailVerifyMessage = false;
            },
            EmailVerifyWarningHide(){
                this.warningMessage = '';
            }
        }
}
</script>

<style>

</style>
