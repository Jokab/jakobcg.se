<script setup lang="ts">
import Project from "@/components/project.vue";
</script>

<template>
    <div class="projects">
        <h2 style="text-align :center;">EGNA PROJEKT</h2>
        <div style="display: flex; flex-direction: column; justify-content:center; align-items: center; width: 100%">
            <div style="display: flex; flex-direction: row; justify-content: space-around; width: 30rem">
                <Project title="Ordle"/>
                <Project title="Manager"/>
            </div>
            <Project title="Quiz tracker"/>
        </div>
    </div>
</template>

<style scoped>
.projects {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
