<script setup lang="ts">
import Project from "@/components/project.vue";
</script>

<template>
    <div class="projects">
        <h2 style="text-align :center; margin-bottom: 2rem">EGNA PROJEKT</h2>
        <div style="display: flex; flex-direction: column; justify-content:center; align-items: center; width: 100%; gap: 2rem">
            <div style="display: flex; flex-direction: row; justify-content: space-around; gap: 2rem">
                <Project title="Ordle">
                    <div style="display: flex; flex-direction: column; row-gap: 1rem">
                        <div>Svensk klon av Wordle</div>
                        <div style="gap: 0.5rem; display:flex;">
                            <a href="https://jokab.github.io/ordle/" target="_blank"><i class="fa-solid fa-link"></i></a>
                            <a href="https://github.com/Jokab/ordle/" target="_blank"><i class="fa-brands fa-github icon"></i></a>
                        </div>
                        <div style="display: flex; gap: 0.6rem; flex-wrap: wrap">
                            <div class="skill">React</div>
                            <div class="skill">Typescript</div>
                            <div class="skill">Tailwind</div>
                            <div class="skill">Github Pages</div>
                        </div>
                    </div>
                </Project>
                <Project title="Manager (under utveckling)">
                    <div style="display: flex; flex-direction: column; row-gap: 1rem">
                        <div>Fantasy-fotboll med draftsystem</div>
                        <div style="gap: 0.5rem; display:flex;">
                            <a href="https://github.com/Jokab/manager/" target="_blank"><i class="fa-brands fa-github icon"></i></a>
                        </div>
                        <div style="display: flex; gap: 0.6rem; flex-wrap: wrap">
                            <div class="skill">.NET</div>
                            <div class="skill">SignalR</div>
                            <div class="skill">Vue</div>
                            <div class="skill">Typescript</div>
                            <div class="skill">PostgreSQL</div>
                        </div>
                    </div>
                </Project>
            </div>
            <Project title="Quizatrack">
                <div style="display: flex; flex-direction: column; row-gap: 1rem">
                    <div>Tracker för vårt pubquiz-lag som analyserar styrkor och svagheter</div>
                    <div style="gap: 0.5rem; display:flex;">
                        <a href="https://github.com/Jokab/quizatrack/" target="_blank"><i class="fa-brands fa-github icon"></i></a>
                    </div>
                    <div style="display: flex; gap: 0.6rem; flex-wrap: wrap">
                        <div class="skill">Vue</div>
                        <div class="skill">Typescript</div>
                        <div class="skill">Nuxt</div>
                        <div class="skill">PostgreSQL</div>
                    </div>
                </div>
            </Project>
        </div>
    </div>
</template>

<style scoped>
.projects {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.skill {
    font-family: Arial;
    font-weight: 400;
    padding: 0.5rem;
    border-radius: 15px;
    background-color: var(--accent-color);
}
</style>
