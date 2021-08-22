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
                        <form @submit.prevent="submit">
                            <div class="mt-2">
                                <label class="block font-medium text-sm text-gray-700">Registered Account Email</label>
                                <input placeholder="Your Account Email" class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="email" v-model="form.email" required autocomplete="current-email" />
                            </div>
                            <div class="items-end mt-4">
                                <loading-spinner :loadingSpinner="loadingSpinner" type="submit" class="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Submit</loading-spinner>
                            </div>
                        </form>
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
    data(){
        return{
            loadingSpinner: false,
            form:{
                email: ''
            }
        }
    },
    methods:{
        submit(){
            this.loadingSpinner = true;
            axios.post('/api/email/verify/resendlink', this.form)
            .then((res) => {
                if(res.data.errors){
                    this.loadingSpinner = false;
                    this.$store.commit('SET_TOAST', 'Errors');
                    this.$store.commit('SET_ToastMessage', res.data.errors);
                    setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                    }, 3000);
                }
                if(res.data.warning){
                    this.loadingSpinner = false;
                    this.$store.commit('SET_TOAST', 'Warning');
                    this.$store.commit('SET_ToastMessage', res.data.warning);
                    setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                    }, 3000);
                }
                if(res.data.success){
                    this.loadingSpinner = false;
                    this.$store.commit('SET_TOAST', 'Success');
                    this.$store.commit('SET_ToastMessage', res.data.success);
                    this.form.email = '';
                    setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                    }, 3000);
                }
            })
            .catch((e) => {
                this.loadingSpinner = false;
                this.$store.commit('SET_TOAST', 'Warning');
                this.$store.commit('SET_ToastMessage', 'Something Is Wrong');
                setTimeout(() => {
                        this.$store.commit('SET_TOAST', false);
                }, 3000);
            })
        },
    }
}
</script>

<style>

</style>
