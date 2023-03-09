<script setup>


import { Head, Link } from '@inertiajs/vue3';
import Navbar from "@/Components/Navbar.vue";
import Footer from "@/Layouts/Footer.vue";


</script>

<template>
    <Head title="Real-Time Business Monitoring Dashboard | Analytics" />

    <Navbar></Navbar>

    <section class="mb-96">
        

<div class="w-full p-4 text-center bg-body  rounded-lg shadow sm:p-8 dark:bg-body dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-black">Work fast from anywhere</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date with the newest analytics.</p>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="white" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-white text-xs">Download on the</div>
                <div class="-mt-1 text-white font-sans text-sm font-semibold">Mac App Store</div>
            </div>
        </a>
        <a target="_blank" href="https://pay.google.com/" class="w-full sm:w-auto bg-white-800 hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-white-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-white text-xs">Get in on</div>
                <div class="-mt-1 text-white font-sans text-sm font-semibold">Google Play</div>
            </div>
        </a>
    </div>
</div>

<!-- second section -->
<div class="w-full  p-4 bg-body   rounded-lg shadow sm:p-8 bg-body dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-black">Latest Customers</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                            Neil Sims
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                        $320
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                            Bonnie Green
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                        $3467
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                    
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                            Michael Gough
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                        $67
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                            Lana Byrd
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                        $367
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-black">
                            Thomes Lean
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                        $2367
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>

    </section>




    <Footer></Footer>
  </template>
  
