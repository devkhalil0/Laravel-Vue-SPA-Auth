<template>
    <div class="flex flex-col sm:justify-center items-center ml-2 mr-2">
        <div class="w-full sm:max-w-md mt-2 px-6 py-4 bg-white shadow overflow-hidden rounded-lg">
            <div class="w-full">
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
                            <router-link :to="{name: 'Forget-Password'}" class="text-blue-500 font-medium">
                                Forget Password ?
                            </router-link>
                            <button type="submit" class="ml-4 inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        data(){
            return{
                form:{
                    email: '',
                    password: '',
                    remember: false
                    }
            }
        }
}
</script>

<style>

</style>
