<template>
    <div class="flex flex-col sm:justify-center items-center ml-2 mr-2">
        <div class="w-full sm:max-w-lg mt-2 bg-white shadow overflow-hidden">
            <div class="w-full">
                <div class="w-full bg-gray-100 p-4 text-lg">
                    Email Verification
                </div>
                <div class="bg-white p-4">
                    <!-- Loading  -->
                    <div v-if="WaitTime" class="flex text-md mt-4 mb-4 font-semibold">
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
                    <!-- Status  -->
                    <div v-else v-for="(res,i) in Response" :key="i" class="flex text-md mt-4 mb-4 font-semibold">
                        <!-- For Errors  -->
                        <div v-if="Response.warning" class="w-full text-md font-semibold p-1 bg-red-500 rounded text-white mt-2 mb-3">
                            <div class="flex justify-between">
                                <div class="ml-4 p-1">
                                     {{ res }}!
                                </div>
                            </div>
                        </div>
                        <!-- For Success  -->
                        <div v-if="Response.success" class="w-full">
                            <div class="w-full text-md font-semibold p-1 bg-green-500 rounded text-white mt-2 mb-3">
                                <div class="ml-4 p-1">
                                        {{ res }}!
                                </div>
                            </div>
                            <router-link :to="{name: 'Login'}" class="flex justify-center bg-white p-4 mt-2 mb-2">
                                <button class="bg-blue-500 hover:bg-blue-400 mt-4 px-4 rounded text-white p-1 font-semibold">
                                   Now Login
                                </button>
                            </router-link>
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
                title: 'Confirm Your Email',
            },

    data(){
        return{
            Response: '',
            WaitTime: true,
        }
    },
    mounted(){
        this.EmailVerify();
        setTimeout(() => {
            this.WaitTime = false
        }, 3000);
    },
    methods:{
        EmailVerify(){
            axios.get('/api/email/verify/'+this.$route.params.token)
            .then((res) => {
                
                this.Response = res.data;
            })
            .catch((e) => {
                this.$store.commit('SET_TOAST', 'Warning');
                this.$store.commit('SET_ToastMessage', 'Something Is Wrong');
                setTimeout(() => {
                        this.$store.commit('SET_TOAST', false);
                }, 3000);
            })
        }
    }

}
</script>

<style>

</style>
