<template>
    <div class="mt-4 flex flex-col sm:justify-center items-center ml-2 mr-2">
        <div class="w-full sm:max-w-md bg-white shadow overflow-hidden rounded-lg">
            <div class="bg-gray-100 text-lg p-4 w-full">
                Password Reset
            </div>
            <div class="w-full px-6 py-4">
                <div class="container my-2 mx-auto px-2">
                    <form @submit.prevent="submit">
                        <div class="">
                            <label class="block font-medium text-md text-gray-700">Your Account Email</label>
                            <input class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="email" v-model="form.email" required autocomplete="current-email" />
                        </div>

                        <div class="flex items-center justify-end mt-4">
                            <loading-spinner :loadingSpinner="loadingSpinner" type="submit" class="ml-4 inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Submit</loading-spinner>
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
                title: 'Forgot Password',
            },
        data(){
            return{
                loadingSpinner: false,
                form:{
                    email: '',
                    }
            }
        },
       methods:{
           submit(){
               this.loadingSpinner = true;
               axios.post('/api/password/reset', this.form)
               .then((res) =>{
                   if(res.data.success){
                        this.loadingSpinner = false;
                        this.$store.commit('SET_TOAST', 'Success');
                        this.$store.commit('SET_ToastMessage', res.data.success);
                        setTimeout(() => {
                                this.$store.commit('SET_TOAST', false);
                        }, 3000);
                        this.form.email = '';
                    }
                    if(res.data.warning){
                        this.loadingSpinner = false;
                        this.$store.commit('SET_TOAST', 'Warning');
                        this.$store.commit('SET_ToastMessage', res.data.warning);
                        setTimeout(() => {
                                this.$store.commit('SET_TOAST', false);
                        }, 3000);
                    }
               })
               .catch((e) =>{
                   this.loadingSpinner = false;
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
