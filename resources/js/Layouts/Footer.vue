<script setup>
import { Head, Link } from "@inertiajs/vue3";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const navigation = [
    // { name: 'Home', href: '/', current: true },
    { name: "Products", href: "products", current: false },
    { name: "Pricing", href: "", current: false },

    { name: "FAQ", href: "faq", current: false },
    { name: "Blog", href: "#", current: false },
    // { name: 'Sign In', href: 'login', current: false },
    // { name: 'Sign Up', href: 'register', current: false },
];
</script>

<template>
   
 



    <footer class="bg-main  lg:mt-16.5 footer-main-bg relative pt-6 ">
    <div class="">
        <svg
        class="absolute  -z-5 top-5.5 right-0"
        width="1005"
        height="910"
        viewBox="0 0 1005 1005"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g opacity="0.07">
            <path
                d="M1834.54 437.483C1653.46 173.305 1349.47 -0.00012207 1005 -0.00012207C449.954 -0.00012207 0 449.953 0 1005C0 1085.75 9.52405 1164.28 27.5092 1239.52L539.295 727.732C588.354 678.672 667.896 678.672 716.955 727.732L1130.62 1141.4L1834.54 437.483Z"
                fill="#8794BA"
            />
            <path
                d="M1953.99 673.356L1219.46 1407.89C1170.4 1456.95 1090.85 1456.95 1041.79 1407.89L628.125 994.223L127.343 1495.01C299.264 1802.28 627.874 2010 1005 2010C1560.05 2010 2010 1560.05 2010 1005C2010 888.79 1990.28 777.187 1953.99 673.356Z"
                fill="#8794BA"
            />
        </g>
    </svg>

    <div
        class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 inner-footer-main-bg relative"
    >
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-custom-five">
            <h2
                class="mb-8 text-4xl  font-extrabold text-gray-900 dark:text-white tracking-customTwoPixel"
            >
                Pricing Plans
            </h2>
            <p
                class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum nisi aliquet volutpat pellentesque volutpat est.
            </p>
        </div>
        <div
            class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 z-10"
        >
            <!-- Pricing Card -->
            <div
                class=" hover:scale-105	hover:ease-in-out duration-300 flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-2xl drop-shadow-2xl drop-shadow-2xl dark:border-gray-600 xl:p-16 xl:pt-14 bg-main dark:text-white max-h-card"
            >
                <h3 class=" text-3xl font-bold mb-1">Starter</h3>
                <p
                    class="font-light text-gray-500 sm:text-lg dark:text-gray-400"
                >
                up to 3 users
                </p>
                <hr class="mt-10"/>
                <div
                    class="flex flex-col content-center justify-center items-center mt-8 mb-4"
                >
                    <span class="mb-2 text-5xl font-extrabold"><b class="text-3xl">$</b><b class="text-6xl">29</b></span>
                    <span
                        class="text-gray-500 dark:text-gray-400"
                        dark:text-gray-400
                        >per month</span
                    >
                </div>

                <PrimaryButton class="justify-center lg:w-12.5  mt-5 bg-transparent border border-gray-500 ">Order</PrimaryButton>
            </div>
            <!-- Pricing Card -->
            <div
                class="hover:scale-105	hover:ease-in-out duration-300 flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-2xl drop-shadow-2xl drop-shadow-2xl dark:border-gray-600 xl:p-16 xl:pt-14 bg-white dark:text-blue-900 max-h-card"
            >
                <h3 class=" text-3xl font-bold mb-1">Standart</h3>
                <p
                    class="font-light text-gray-500 sm:text-lg dark:text-gray-400"
                >
                    up to 20 users
                </p>
                <hr class="mt-10"/>
                <div
                    class="flex flex-col content-center justify-center items-center mt-8 mb-4"
                >
                    <span class="mb-2 text-5xl font-extrabold"><b class="text-3xl">$</b><b class="text-6xl">99</b></span>
                    <span
                        class="text-gray-500 dark:text-gray-400"
                        dark:text-gray-400
                        >per month</span
                    >
                </div>

                <PrimaryButton class="justify-center lg:w-12.5  mt-5">Order</PrimaryButton>
            </div>
            <!-- Pricing Card -->
            <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-2xl drop-shadow-2xl drop-shadow-2xl dark:border-gray-600 xl:p-16 xl:pt-14 bg-main text-white max-h-card hover:scale-105	hover:ease-in-out duration-300	"
        >
            <h3 class=" text-3xl font-bold mb-1">Premium</h3>
            <p
                class="font-light text-gray-500 sm:text-lg dark:text-gray-400"
            >
                up to 200 users
            </p>
            <hr class="mt-10"/>
            <div
                class="flex flex-col content-center justify-center items-center mt-8 mb-4"
            >
                <span class="mb-2 text-5xl font-extrabold"><b class="text-3xl">$</b><b class="text-6xl">299</b></span>
                <span
                    class="text-gray-500 dark:text-gray-400"
                    dark:text-gray-400
                    >per month</span
                >
            </div>

            <PrimaryButton  class="justify-center lg:w-12.5  mt-5 bg-transparent border border-gray-500">Order</PrimaryButton>
        </div>
        </div>
        <!-- HR  -->
        <hr class="w-100 mt-6.5" />
        <div
            class="social flex flex-col lg:flex-row justify-between lg:grid-cols-3 pt-3.5 "
        >
            <div
                class="flex flex-shrink-0 items-center  justify-center p-5 lg:p-0"
            >
                <a class="flex items-center" href="/">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M36.5083 8.70613C32.9048 3.44887 26.8551 0 20 0C8.9543 0 0 8.9543 0 20C0 21.607 0.189533 23.1697 0.547447 24.667L10.7322 14.4822C11.7085 13.5059 13.2915 13.5059 14.2678 14.4822L22.5 22.7145L36.5083 8.70613Z"
                            fill="#8794BA"
                        />
                        <path
                            d="M38.8854 13.4001L24.2678 28.0178C23.2915 28.9941 21.7085 28.9941 20.7322 28.0178L12.5 19.7855L2.53418 29.7514C5.9555 35.8662 12.495 40 20 40C31.0457 40 40 31.0457 40 20C40 17.6874 39.6075 15.4664 38.8854 13.4001Z"
                            fill="#8794BA"
                        />
                    </svg>
                    <h3
                        class="text-button-color uppercase font-bold pl-3 text-base"
                    >
                        Analytics
                    </h3>
                </a>
            </div>
            <div class="flex space-x-6 justify-center">
                <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                        item.current
                            ? 'bg-gray-900 text-button-color  '
                            : 'text-button-color   hover:bg-transparent hover:bg-sky-700 hover:text-white',
                        'px-3 py-2 rounded-md  font-medium text-base',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                    >{{ item.name }}</a
                >
            </div>
            <!-- socials -->
            <ul
                class="flex xl:flex-row items-center space-x-12 justify-center p-5 lg:p-0"
            >
                <li>
                    <a href="#">  <svg
                        width="10"
                        height="20"
                        viewBox="0 0 10 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.5 6.66667H0V10H2.5V20H6.66667V10H9.66667L10 6.66667H6.66667V5.25C6.66667 4.5 6.83333 4.16667 7.58333 4.16667H10V0H6.83333C3.83333 0 2.5 1.33333 2.5 3.83333V6.66667Z"
                            fill="#8794BA"
                        />
                    </svg></a>
            
                </li>
                <li>
                    <a href="#">  <svg
                        width="25"
                        height="20"
                        viewBox="0 0 25 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.7392 20C17.0259 20 22.1045 12.3061 22.1045 5.63472C22.1045 5.41612 22.1 5.19865 22.0899 4.98202C23.0757 4.26942 23.9327 3.37993 24.6086 2.36786C23.704 2.76978 22.7306 3.04043 21.7093 3.16246C22.7516 2.53747 23.5521 1.54834 23.9296 0.369453C22.9539 0.947983 21.8736 1.36838 20.7238 1.59509C19.8021 0.613796 18.49 0 17.0382 0C14.2497 0 11.9885 2.26122 11.9885 5.04835C11.9885 5.44467 12.033 5.8298 12.1192 6.19953C7.92337 5.98878 4.20253 3.97946 1.71264 0.924752C1.27853 1.67066 1.02859 2.53775 1.02859 3.46222C1.02859 5.21376 1.92004 6.76015 3.27554 7.66503C2.44735 7.63956 1.66926 7.41173 0.988846 7.03332C0.987727 7.05431 0.987727 7.07558 0.987727 7.09769C0.987727 9.54308 2.72835 11.5846 5.03827 12.0472C4.61424 12.1628 4.1681 12.225 3.7074 12.225C3.38217 12.225 3.0659 12.1925 2.7583 12.134C3.40093 14.1397 5.26498 15.5996 7.47498 15.6407C5.74667 16.9951 3.5697 17.802 1.20436 17.802C0.797123 17.802 0.395203 17.7788 0 17.7321C2.23435 19.164 4.88741 20 7.7392 20Z"
                            fill="#8794BA"
                        />
                    </svg></a>
                  
                </li>
                <li>
                    <a href="#">
                        <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.6086 1.83333C13.2753 1.83333 13.6086 1.83333 14.692 1.91667C17.442 2 18.692 3.33333 18.7753 6C18.8586 7.08333 18.8586 7.33333 18.8586 10C18.8586 12.6667 18.8586 13 18.7753 14C18.692 16.6667 17.3586 18 14.692 18.0833C13.6086 18.1667 13.3586 18.1667 10.6086 18.1667C7.94198 18.1667 7.60864 18.1667 6.60864 18.0833C3.85864 18 2.60864 16.6667 2.52531 14C2.44198 12.9167 2.44198 12.6667 2.44198 10C2.44198 7.33333 2.44198 7 2.52531 6C2.60864 3.33333 3.94198 2 6.60864 1.91667C7.60864 1.83333 7.94198 1.83333 10.6086 1.83333ZM10.6086 0C7.85864 0 7.52531 0 6.52531 0.0833333C2.85864 0.25 0.858643 2.25 0.691976 5.91667C0.608643 6.91667 0.608643 7.25 0.608643 10C0.608643 12.75 0.608643 13.0833 0.691976 14.0833C0.858643 17.75 2.85864 19.75 6.52531 19.9167C7.52531 20 7.85864 20 10.6086 20C13.3586 20 13.692 20 14.692 19.9167C18.3586 19.75 20.3586 17.75 20.5253 14.0833C20.6086 13.0833 20.6086 12.75 20.6086 10C20.6086 7.25 20.6086 6.91667 20.5253 5.91667C20.3586 2.25 18.3586 0.25 14.692 0.0833333C13.692 0 13.3586 0 10.6086 0ZM10.6086 4.83333C7.77531 4.83333 5.44198 7.16667 5.44198 10C5.44198 12.8333 7.77531 15.1667 10.6086 15.1667C13.442 15.1667 15.7753 12.8333 15.7753 10C15.7753 7.16667 13.442 4.83333 10.6086 4.83333ZM10.6086 13.3333C8.77531 13.3333 7.27531 11.8333 7.27531 10C7.27531 8.16667 8.77531 6.66667 10.6086 6.66667C12.442 6.66667 13.942 8.16667 13.942 10C13.942 11.8333 12.442 13.3333 10.6086 13.3333ZM15.942 3.5C15.2753 3.5 14.7753 4 14.7753 4.66667C14.7753 5.33333 15.2753 5.83333 15.942 5.83333C16.6086 5.83333 17.1086 5.33333 17.1086 4.66667C17.1086 4 16.6086 3.5 15.942 3.5Z"
                            fill="#8794BA"
                        />
                    </svg>
                    </a>
                
                </li>
            </ul>
        </div>
    </div>
 </div>

</footer>







</template>
