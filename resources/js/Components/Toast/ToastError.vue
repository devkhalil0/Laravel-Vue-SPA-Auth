<template>
    <transition name="slide-fade">
        <div v-if="Toast" class="absolute z-40 sticky top-0 right-0 max-w-xs w-full mt-4 mr-4">
            <div class="flex bg-red-100 rounded shadow p-4 mt-4">
                <div class="mr-2">
                    <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div class="flex-1 text-black">
                    {{error}}
                </div>
                <div class="ml-2">
                    <button type="button" @click="ToastHide" class="align-top text-gray-500 hover:text-gray-700 focus:outline-none fucus:text-indigo-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  props:{
        error:{
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
#slide-fade-enter-active {
  transition: all .3s ease;
}
#slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
#slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>