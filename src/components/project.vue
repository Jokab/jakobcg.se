<script setup lang="ts">
defineProps({
    title: String
});
</script>

<template>
    <div>
        <h3 style="text-align: center">{{ title }}</h3>
        <img src="@/assets/jakob.jpeg" style="width: 10rem" />
    </div>    
</template>
