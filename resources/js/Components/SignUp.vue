<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button
    :type="type"
    class="inline-flex items-center px-9 mx-5 py-2 bg-transparent  border border-sky-700 rounded-full font-semibold text-base text-button-color  
    tracking-customTwoPixel  hover:text-white"
>
<a href="register">Sign Up</a>
    <slot />
</button>
</template>





