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
        class="inline-flex items-center mx-3 py-2 button-color border border-transparent rounded-md font-semibold text-base text-button-color"
    >
    <a href="login">Sign In</a>
        <slot />
    </button>
</template>
