<template>
    <div class="flex flex-col sm:justify-center items-center ml-2 mr-2">
        <div class="w-full sm:max-w-md mt-2 px-6 py-4 bg-white shadow overflow-hidden rounded-lg">
            <div class="w-full">
                <div class="container my-2 mx-auto px-2">
                    <form @submit.prevent="submit">
                        <div>
                            <label class="block font-medium text-sm text-gray-700">Name</label>
                            <input class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="text" v-model="form.name" required autocomplete="current-email" />
                        </div>

                        <div class="mt-1">
                            <label class="block font-medium text-sm text-gray-700">Email</label>
                            <input class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="email" v-model="form.email" required autocomplete="current-email" />
                        </div>

                        <div class="mt-1">
                            <label class="block font-medium text-sm text-gray-700">Password</label>
                            <input class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="password" v-model="form.password" required autocomplete="current-password" />
                        </div>

                        <div class="mt-1">
                            <label class="block font-medium text-sm text-gray-700">Confirm Password</label>
                            <input class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="password" v-model="form.password_confirmation" required autocomplete="current-password" />
                        </div>

                        <div class="flex items-center justify-end mt-4">
                            <button type="submit" class="ml-4 inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                form:{
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                    }
                }
        },

        methods: {
            submit(){
                axios.post('api/register', this.form)
                .then((res) =>{
                    if(res.data.success)
                    {
                        this.$store.commit('SET_TOAST', 'Success');
                        this.$store.commit('SET_ToastMessage', res.data.success);
                        setTimeout(() => {
                             this.$store.commit('SET_TOAST', false);
                        }, 3000);
                        this.form.name = '';
                        this.form.email = '';
                        this.form.password = '';
                        this.form.password_confirmation = '';
                        this.$router.push({name: 'Login'});
                        if(this.$store.state.EmailVerifyStatus === true){
                            this.$store.state.EmailVerifyMessage = true;
                        }
                    }
                    if(res.data.errors){
                        this.form.password = '';
                        this.form.password_confirmation = '';
                        this.$store.commit('SET_TOAST', 'Errors');
                        this.$store.commit('SET_ToastMessage', res.data.errors);
                        setTimeout(() => {
                             this.$store.commit('SET_TOAST', false);
                        }, 3000);
                    }
                })
                .catch((e) =>{
                    this.$store.commit('SET_TOAST', 'Warning');
                    this.$store.commit('SET_ToastMessage', 'Something Is Wrong !');
                    setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                    }, 3000);
                })
            }
        }
    }
</script>
