<template>
    <div class="mt-3 flex flex-col sm:justify-center items-center ml-2 mr-2">
        <div class="w-full sm:max-w-md bg-white shadow overflow-hidden rounded-lg">
            <div class="w-full bg-gray-100 p-3 text-lg">
                Confirm Password
            </div>
            <div v-if="WaitTime" class="bg-white p-4">
                <!-- Loading  -->
                <div class="flex text-md mt-4 mb-4 font-semibold">
                    <div class="w-full text-md font-semibold p-1 rounded mt-2 mb-3">
                        <div class="w-full">
                            <div class="flex justify-center p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="text-green-500 bi bi-stopwatch" viewBox="0 0 16 16">
                                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
                                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
                                </svg>
                            </div>
                            <div class="ml-4 p-1 text-center">
                                    Please Wait...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="Response.user" class="w-full mt-2 px-6 py-4">
                <div class="container my-2 mx-auto px-2">
                    <form @submit.prevent="submit">
                        <div class="">
                            <label class="block font-medium text-sm text-gray-700">Email</label>
                            <input disabled class="bg-gray-50 mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="email" v-model="form.email" required autocomplete="current-email" />
                        </div>

                        <div class="mt-1">
                            <label class="block font-medium text-sm text-gray-700">Password</label>
                            <input placeholder="Your Password" class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="password" v-model="form.password" required autocomplete="current-password" />
                        </div>

                        <div class="mt-1">
                            <label class="block font-medium text-sm text-gray-700">Confirm Password</label>
                            <input placeholder="Confirm Password" class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="password" v-model="form.password_confirmation" required autocomplete="current-password" />
                        </div>

                        <div class="flex items-center justify-end mt-4">
                            <loading-spinner :loadingSpinner="loadingSpinner" type="submit" class="ml-4 inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Submit</loading-spinner>
                        </div>
                    </form>
                </div>
            </div>
            <!-- For Errors  -->
            <div v-else v-for="(res,i) in Response" :key="i" class="flex text-md mt-8 mb-8 ml-4 mr-4 font-semibold">
                <div class="w-full text-md font-semibold p-1 bg-red-500 rounded text-white mt-2 mb-3">
                    <div class="flex justify-between">
                        <div class="ml-4 p-1">
                                {{ res }}!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        metaInfo:{
                title: 'Confirm Password',
            },
        data() {
            return {
                loadingSpinner: false,
                WaitTime: true,
                Response: '',
                form:{
                    email: '',
                    password: '',
                    password_confirmation: ''
                    }
                }
        },
        mounted(){
            this.ConfirmPassword();
            setTimeout(() => {
                this.WaitTime = false
            }, 3000);
        },
        methods: {
            ConfirmPassword(){
                axios.get('/api/password/confirmation/'+this.$route.params.token)
                .then((res) => {
                    this.Response = res.data;
                    if(res.data.user){
                        this.form.email = res.data.user.email;
                    }
                })
                .catch((e) => {
                })
            },
            submit(){
                this.loadingSpinner = true;
                axios.post('/api/password/change', this.form)
                .then((res) =>{
                    if(res.data.success){
                        this.loadingSpinner = false;
                        this.$store.commit('SET_TOAST', 'Success');
                        this.$store.commit('SET_ToastMessage', res.data.success);
                        setTimeout(() => {
                                this.$store.commit('SET_TOAST', false);
                        }, 3000);
                        if(this.CurrentRoute != 'Login'){
                            this.$router.push({name: 'Login'});
                        }
                        this.form.password = '';
                        this.form.password_confirmation = '';
                    }
                    if(res.data.errors){
                        this.loadingSpinner = false;
                        this.$store.commit('SET_TOAST', 'Errors');
                        this.$store.commit('SET_ToastMessage', res.data.errors);
                        setTimeout(() => {
                                this.$store.commit('SET_TOAST', false);
                        }, 3000);
                        this.form.password = '';
                        this.form.password_confirmation = '';
                    }
                })
                .catch(e => {
                    this.loadingSpinner = false;
                    this.form.password = '';
                    this.form.password_confirmation = '';
                })
            }
        }
    }
</script>
