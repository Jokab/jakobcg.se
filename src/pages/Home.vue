<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'Jakobs hemsida',
  meta: [
    {
      name: 'description',
      content: 'En sida om Jakob',
    },
  ],
})
</script>

<template>
  <div class="main">
    <h1>Hej jag heter Jakob!</h1>
  </div>
</template>

<style>
.main {
  display: flex; 
  flex-direction: column;
  align-items: center; 
  margin: 0 auto;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
}
</style>
