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
    class="inline-flex items-center px-16  py-3 mt-6 md:mt-12 bg-pink rounded-full text-base text-white
    hover:bg-sky-700 hover:text-white tracking-wides"
>
<a href="register"></a>
    <slot />
</button>
</template>




