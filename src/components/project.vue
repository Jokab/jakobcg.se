<script setup lang="ts">

defineProps({
    title: String,
});
</script>

<template>
    <div class="project">
        <h3 style="text-align: left; margin-bottom: 1rem">{{ title }}</h3>
        <slot></slot>
    </div>    
</template>

<style scoped>
.project {
    width: 20rem;
    padding: 2rem;
    border-radius: 15px;
    background-color: var(--background-color-secondary);
}
</style>
