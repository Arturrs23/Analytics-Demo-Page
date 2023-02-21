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
        class="inline-flex items-center px-10 mx-7 py-2 bg-transparent  border border-sky-400 rounded-full font-semibold text-base text-button-color  
     tracking-widest hover:bg-gray-700"
    >
    <a href="register">Sign Up</a>
        <slot />
    </button>
</template>
