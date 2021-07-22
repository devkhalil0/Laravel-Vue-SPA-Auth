<template>
    <div class="flex flex-col sm:justify-center items-center ml-2 mr-2">
        <div class="w-full sm:max-w-lg mt-2 bg-white shadow overflow-hidden">
            <div class="w-full">
                <div class="w-full bg-gray-100 p-4 text-lg">
                    Verify Your Email Address !
                </div>
                <div class="bg-white p-4">
                    <div class="text-md font-semibold">
                        <div>if you are not received verification email , click verify email below !!</div>
                        <div @click="ResendLink" class="ml-2 mt-2 text-blue-400 hover:underline">Verify Email</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo:{
                title: 'Verify Email Address',
            },
    methods:{
        ResendLink(){
            axios.post('/api/email/verify/resendlink')
            .then((res) => {
                this.$store.commit('SET_TOAST', 'Success');
                this.$store.commit('SET_ToastMessage', res.data.success);
                setTimeout(() => {
                        this.$store.commit('SET_TOAST', false);
                }, 3000);
                this.Logout();
            })
            .catch((e) => {
                this.$store.commit('SET_TOAST', 'Warning');
                this.$store.commit('SET_ToastMessage', 'Something Is Wrong');
                setTimeout(() => {
                        this.$store.commit('SET_TOAST', false);
                }, 3000);
            })
        },
        Logout(){
                axios.post('/api/logout')
                .then((res) => {
                    this.$store.commit('SET_AUTHENTICATED', false);
                    if(this.CurrentRoute != 'Login'){
                        this.$router.push({name: 'Login'});
                    }
                    localStorage.removeItem("auth", false);
                    this.$store.commit('SET_ADMIN', false);
                })
                .catch((e) => {
                   
                })
            },
    }
}
</script>

<style>

</style>
