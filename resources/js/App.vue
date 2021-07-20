<template>
    <div class="min-h-screen bg-gray-100 relative w-full">

        <toast-success />
        <toast-error />
        <toast-warning />

        <nav class="bg-white border-b-2">
            <!-- Primary Navigation Menu -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-14">
                    <div class="flex">
                        <!-- Logo -->
                        <div class="flex-shrink-0 flex items-center text-xl">
                            <router-link :to="{name: 'Home'}">
                                Khalilvaai
                            </router-link>
                        </div>
                    </div>
                    <div class="hidden sm:flex sm:items-center sm:ml-6">
                        <div @click="chk">
                            cjeck
                        </div>
                        <!-- Settings Dropdown -->
                        <div v-if="Authenticated" class="ml-3 relative">
                            <dropdown align="right" width="48">
                                <template #trigger>
                                    <span class="inline-flex rounded-md">
                                        <button type="button" class="text-lg inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                                            {{ AuthUser.name }}
                                            <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </span>
                                </template>
                                <template #content>
                                    <!-- Account Management -->
                                    <div class="block px-4 py-2 text-xs text-gray-400 w-full text-left">
                                        Manage Account
                                    </div>
                                    <router-link :to="{name: 'Dashboard'}" :class="CurrentRoute === 'Dashboard' ? 'bg-gray-50' : ''" class="text-left w-full text-lg block border-t px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                        Dashboard
                                    </router-link>
                                    <div @click="Logout" class="text-left w-full focus:outline-none text-lg block border-t px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                        Logout
                                    </div>
                                </template>
                            </dropdown>
                        </div>
                        <!-- Single Link  -->
                        <div v-else>
                            <router-link :class="CurrentRoute === 'Login' ? 'bg-gray-50' : ''" :to="{name: 'Login'}" type="button" class="text-lg ml-1 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                                Login
                            </router-link>
                            <router-link :class="CurrentRoute === 'Register' ? 'bg-gray-50' : ''" :to="{name : 'Register'}" type="button" class="text-lg ml-1 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                                Register
                            </router-link>
                        </div>
                    </div>
                    <!-- Hamburger -->
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Responsive Navigation Menu -->
            <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">
                <!-- Responsive Settings Options -->
                <div class="border-t-2 border-gray-200">
                    
                    <!-- Settings Dropdown -->
                    <div v-if="Authenticated" class="relative">
                        <dropdown align="left" width="48">
                            <template #trigger>
                                <div class="text-lg w-full border-b inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                                    {{ AuthUser.name }}
                                    <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </template>
                            <template #content>
                                <!-- Account Management -->
                                <div class="block px-4 py-2 text-xs text-gray-400 w-full text-left">
                                    Manage Account
                                </div>
                                <router-link :to="{name: 'Dashboard'}" :class="CurrentRoute === 'Dashboard' ? 'bg-gray-50' : ''" class="w-full focus:outline-none text-left text-lg block border-t px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Dashboard
                                </router-link>
                                <div @click="Logout" class="w-full text-left focus:outline-none text-lg block border-t px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Logout
                                </div>
                            </template>
                        </dropdown>
                    </div>
                    <!-- Single link  -->
                    <div v-else>
                        <router-link :to="{name: 'Login'}" :class="CurrentRoute === 'Login' ? 'bg-gray-50' : ''" type="button" class="text-lg w-full border-b p-2 inline-flex items-center px-3 py-2  text-sm leading-4 font-medium text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                            Login
                        </router-link>
                        <router-link :to="{name: 'Register'}" :class="CurrentRoute === 'Register' ? 'bg-gray-50' : ''" type="button" class="text-lg w-full border-b p-2 inline-flex items-center px-3 py-2  text-sm leading-4 font-medium text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                            Register
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Page Content -->
        <main>
            <router-view></router-view>
        </main>
        <!-- Footer  -->
        <div>
            <!-- Footer Content  -->
        </div>
    </div>
</template>

<script>
export default {
        data() {
            return {
                showingNavigationDropdown: false,
            }
        },
        methods:{
            Logout(){
                axios.post('/api/logout')
                .then((res) => {

                    this.$store.commit('SET_TOAST', 'Success');
                        this.$store.commit('SET_ToastMessage', res.data.success);
                        setTimeout(() => {
                             this.$store.commit('SET_TOAST', false);
                        }, 3000);

                    this.$store.commit('SET_AUTHENTICATED', false);
                    if(this.CurrentRoute != 'Home'){
                        this.$router.push({name: 'Home'});
                    }
                    localStorage.removeItem("auth", false);
                })
                .catch((e) => {
                    this.$store.commit('SET_TOAST', 'Warning');
                    this.$store.commit('SET_ToastMessage', 'Something Is Wrong !');
                    setTimeout(() => {
                            this.$store.commit('SET_TOAST', false);
                    }, 3000);
                })
            },
            chk(){
                axios.get('/api/authenticated')
                .then((res) =>{
                    console.log(res);
                })
            }
        }
}
</script>

<style>

</style>
