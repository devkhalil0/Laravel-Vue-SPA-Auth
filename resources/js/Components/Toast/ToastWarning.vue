<template>
    <transition name="slide-fade">
        <div v-if="Toast" class="absolute z-40 sticky flex max-w-xs w-full mt-4 mr-4 top-0 right-0 bg-blue-100 rounded shadow p-4">
            <div class="mr-2">
                <svg class="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <div class="flex-1 text-gray-800">
               {{ Warning }}
            </div>
            <div class="ml-2">
                <button type="button" @click="ToastHide" class="align-top text-gray-500 hover:text-gray-700 focus:outline-none fucus:text-indigo-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props:{
        Warning:{
            typeof: String
        }
    },
    data(){
        return{
            Toast: false
        }
    },
    methods:{
       ToastHide(){
           this.Toast = false;
       },
       ToastShow(){
           this.Toast = true;
       },
   },
}
</script>

<style>
.slide-fade-enter-active {
    transition: all .3s ease;
    }
    .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
</style>