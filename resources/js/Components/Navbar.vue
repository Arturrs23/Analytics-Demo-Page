<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SignIn from "@/Components/SignIn.vue";
import SignUp from "@/Components/SignUp.vue";



const navigation = [
  // { name: 'Home', href: '/', current: true },
  { name: 'Products', href: 'products', current: false },
  { name: 'Pricing', href: '', current: false },

  { name: 'FAQ', href: 'faq', current: false },
  { name: 'Blog', href: '#', current: false },
  // { name: 'Sign In', href: 'login', current: false },
  // { name: 'Sign Up', href: 'register', current: false },


]
</script>

<template>
    <Disclosure as="nav" class="bg-main" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center ml-4">
               <a class="flex items-center" href="/"> <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.5083 8.70613C32.9048 3.44887 26.8551 0 20 0C8.9543 0 0 8.9543 0 20C0 21.607 0.189533 23.1697 0.547447 24.667L10.7322 14.4822C11.7085 13.5059 13.2915 13.5059 14.2678 14.4822L22.5 22.7145L36.5083 8.70613Z" fill="#EF2A82"/>
                <path d="M38.8854 13.4001L24.2678 28.0178C23.2915 28.9941 21.7085 28.9941 20.7322 28.0178L12.5 19.7855L2.53418 29.7514C5.9555 35.8662 12.495 40 20 40C31.0457 40 40 31.0457 40 20C40 17.6874 39.6075 15.4664 38.8854 13.4001Z" fill="#EF2A82"/>
                </svg>
                    <h3 class="text-white uppercase	font-bold pl-3 text-2xl">Analytics</h3>
                  </a>
            </div>
            
            <div class="hidden sm:block pl-80">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-button-color  ' : 'text-button-color   hover:bg-transparent hover:bg-sky-700 hover:text-white', 'px-3 py-2 rounded-md  font-medium text-base']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-10 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
            <!-- Sign in button -->
            <SignIn></SignIn>
           <SignUp></SignUp>

  
       
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
