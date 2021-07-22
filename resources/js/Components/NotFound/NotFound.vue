<template>
    <div class="flex flex-col sm:justify-center items-center ml-2 mr-2">
        <div class="mt-32 lg:mt-16 mb-14 w-full sm:max-w-md mt-2 px-6 py-4 bg-gray-100 overflow-hidden rounded-lg">
           
              <div class="w-full">
                  <div class="text-center">
                      <div class="font-bold text-2xl">404 Not Found !!</div>
                      <router-link :to="{name: 'Home'}" class="text-lg font-light text-blue-500 hover:underline p-4">
                        Go To Home 
                      </router-link>
                  </div>
              </div>

        </div>
    </div>
</template>

<script>
    export default {
        metaInfo: {
            title: '404  Not Found',
        }
    }
</script>
