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
  
>
<a href="register">Sign Up</a>
    <slot />
</button>
</template>





