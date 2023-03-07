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
        class="inline-flex items-center mx-5 py-2 button-color border border-transparent rounded-md font-semibold text-base text-button-color hover:text-white hover:py-2"
    >
    <a href="login">Sign In</a>
        <slot />
    </button>
</template>
