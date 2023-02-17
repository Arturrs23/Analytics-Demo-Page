<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Navbar from "@/Components/Navbar.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
<Head title="Just another Laravel Website" />
<div class="relative sm:flex sm:justify-center sm:items-center h-custom bg-dots-darker bg-center bg-main clip-path-mypolygon  border-b-4 border-pink-500">
    <Navbar class="absolute top-0 bg-transparent w-full px-40"></Navbar>
<!-- first logo -->
        <svg class="absolute left-0 top-0 " width="560" height="399" viewBox="0 0 560 399" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.07">
            <path d="M502.387 -117.35C442.928 -204.094 343.11 -261.001 230 -261.001C47.746 -261.001 -100 -113.255 -100 68.9993C-100 95.5144 -96.8727 121.299 -90.9671 146.005L77.0818 -22.0439C93.191 -38.1531 119.309 -38.1531 135.418 -22.0439L271.25 113.788L502.387 -117.35Z" fill="#8794BA"/>
            <path d="M541.609 -39.8988L300.418 201.292C284.309 217.402 258.191 217.402 242.082 201.292L106.25 65.4606L-58.186 229.897C-1.73431 330.792 106.168 398.999 230 398.999C412.254 398.999 560 251.253 560 68.9993C560 30.8407 553.523 -5.80507 541.609 -39.8988Z" fill="#8794BA"/>
            </g>
            </svg>
            <!-- second logo -->
            <svg class="absolute   top-0 right-0" width="1080" height="798" viewBox="0 0 1080 798" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.07">
                <path d="M1312.47 274.985C1182.93 85.9868 965.442 -38 719 -38C321.907 -38 0 283.907 0 681C0 738.771 6.81372 794.95 19.6807 848.779L385.824 482.636C420.922 447.538 477.828 447.538 512.926 482.636L808.875 778.585L1312.47 274.985Z" fill="#8794BA"/>
                <path d="M1397.93 443.734L872.426 969.239C837.328 1004.34 780.422 1004.34 745.324 969.239L449.375 673.29L91.1038 1031.56C214.1 1251.39 449.195 1400 719 1400C1116.09 1400 1438 1078.09 1438 681C1438 597.861 1423.89 518.017 1397.93 443.734Z" fill="#8794BA"/>
                </g>
                </svg>
                <div class="container  absolute top-60  mx-auto px-44">
                    
                        <div class="grid grid-cols-2 gap-3">
                           <div class="hero-text">
                            <h1 class="text-white text-5xl leading-10 font-bold">Monitor your business on real-time dashboard</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. </p>
                        <!-- button -->
                        <PrimaryButton></PrimaryButton>
                        
                        </div>
            
                        <div class="hero w-full" style="background-image: url('/resources/img/main-screen.png');"></div>

                        
                          



                </div>
          


    </div>
    </div>

</template>


