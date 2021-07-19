<template>
    <transition name="slide-fade">
        <div v-if="Toast === 'Success'" class="absolute z-40 sticky flex justify-end max-w-xs w-full mt-2 mr-2 top-0 right-0 bg-white rounded shadow p-4">
            <div class="mr-2 mt-1">
                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div class="flex-1 text-gray-800 mt-1">
              {{ToastMessage}}
            </div>
            <div @click="ToastHide" class="mr-2 hover:bg-blue-50 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    computed:{
        ToastMessage(){
            return this.$store.getters.Toast;
        },
        Toast(){
		    return this.$store.getters.Toast;
		},
    },
    methods:{
        ToastHide(){
            this.$store.commit('SET_TOAST', false);
        }
    }


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
