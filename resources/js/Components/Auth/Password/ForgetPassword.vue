<template>
    <div class="flex flex-col sm:justify-center items-center ml-2 mr-2">
        <div class="w-full sm:max-w-md mt-2 px-6 py-4 bg-white shadow overflow-hidden rounded-lg">
            <div class="w-full">
                <div class="text-lg p-4 text-green-500">
                    Account Verification Link Send Successfull !!
                </div>
                <div class="container my-2 mx-auto px-2">
                    <form @submit.prevent="submit">
                        <div class="">
                            <label class="block font-medium text-sm text-gray-700">Your Account Email</label>
                            <input class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow" type="email" v-model="form.email" required autocomplete="current-email" />
                        </div>

                        <div class="flex items-center justify-end mt-4">
                            <button type="submit" class="ml-4 inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Submit</button>
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
                title: 'Forget Password',
            },
        data(){
            return{
                form:{
                    email: '',
                    }
            }
        }
}
</script>

<style>

</style>
