<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Navbar from "@/Components/Navbar.vue";
import Footer from "@/Layouts/Footer.vue";

</script>

<template>
    <Head title="Real-Time Business Monitoring Dashboard | Analytics" />

    <Navbar></Navbar>
    <section class="bg-body h-full">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-main text-main">Frequently asked questions</h2>
            <div class="grid pt-8 text-left border-t border-white md:gap-16 dark:border-white md:grid-cols-2">
                <div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-main">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-main text-main" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What is business analytics?
                        </h3>
                        <p class="text-main text-main">Business analytics refers to the process of examining data and using statistical analysis to make informed decisions and drive business strategy. It involves collecting, cleaning, and analyzing large amounts of data to identify trends and patterns that can help organizations make data-driven decisions.</p>
                    </div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-main text-main">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-main text-main" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            How can business analytics help my business?
                        </h3>
                        <p class="text-main text-main">By using business analytics, organizations can gain insights into their operations and customer behavior that can help them optimize their processes and increase revenue. For example, analytics can help businesses identify areas of their website or app that are causing users to drop off, or analyze customer data to better understand their preferences and purchasing.</p>
                    </div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-main text-main">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-main text-main" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            I want to build more than one project. Is that allowed?
                        </h3>
                        <p class="text-main text-main">You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI kit, theme, or template, it's fine.</p>
                        <p class="text-main text-main">Find out more information by <a href="#" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.</p>
                    </div>
                </div>
                <div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-main text-main">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-main text-main" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What does "free updates" include?
                        </h3>
                        <p class="text-main text-main">The free updates that will be provided is based on the <a href="#" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.</p>
                    </div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-main text-main">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-main text-main" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What does the free version include?
                        </h3>
                        <p class="text-main text-main">The <a href="#" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">free version</a> of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it.</p>
                        <p class="text-main text-main">You can use this version for any purposes, because it is open-source under the MIT license.</p>
                    </div>
                    <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-main text-main">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-main text-main" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            How can business analytics help my business?
                        </h3>
                        <p class="text-main text-main">Business analytics can help your business gain insights into its operations and customer behavior, allowing you to optimize your processes and increase revenue. For example, by analyzing data from your website or app, you can identify areas that are causing users to drop off and take steps to improve the user experience. Additionally, analyzing customer data can help you better understand their preferences and behaviors, allowing you to tailor your marketing and sales strategies to better meet their needs.</p>
                    </div>
                  
                </div>
            </div>
        </div>
      </section>
      <Footer></Footer>

  </template>
  
