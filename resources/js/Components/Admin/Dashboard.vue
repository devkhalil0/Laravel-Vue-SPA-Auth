<template>
    <div class="flex flex-col sm:justify-center items-center ml-2 mr-2">
        <div class="w-full sm:max-w-lg mt-2 bg-white shadow overflow-hidden">
            <div class="w-full">
                <div class="w-full bg-gray-100 p-4 text-lg">
                    Welcome To Admin Dashboard
                </div>
                <div class="bg-white p-4">
                    <div class="flex text-md font-semibold">
                        <div>Name:</div>
                        <div class="ml-2">{{ AuthUser.name }}</div>
                    </div>
                    <div class="flex text-md font-semibold">
                        <div>Email:</div>
                        <div class="ml-2">{{ AuthUser.email }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
