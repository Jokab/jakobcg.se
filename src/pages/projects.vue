<script setup lang="ts">
import Project from "@/components/project.vue";
</script>

<template>
    <div class="projects">
        <h2 class="heading">egna projekt</h2>
        <div class="container">
            <Project title="ordle" class="item1">
                <div class="project-container">
                    <div>svensk klon av Wordle</div>
                    <div class="links">
                        <a href="https://ordle.jakobcg.se/" target="_blank" class="link-button">Spela Ordle</a>
                        <a href="https://github.com/Jokab/ordle/" target="_blank"><i class="fa-brands fa-github icon"></i></a>
                    </div>
                    <div class="skills-container">
                        <div class="skill">React</div>
                        <div class="skill">Typescript</div>
                        <div class="skill">Tailwind</div>
                        <div class="skill">Github Pages</div>
                    </div>
                </div>
            </Project>
            <Project title="manager (under utveckling)"  class="item2">
                <div class="project-container">
                    <div>fantasy-fotboll med draftsystem</div>
                    <div class="links">
                        <a href="https://github.com/Jokab/manager/" target="_blank"><i class="fa-brands fa-github icon"></i></a>
                    </div>
                    <div class="skills-container">
                        <div class="skill">.NET 8</div>
                        <div class="skill">SignalR</div>
                        <div class="skill">Vue 3</div>
                        <div class="skill">Typescript</div>
                        <div class="skill">PostgreSQL</div>
                    </div>
                </div>
            </Project>
            <Project title="quizatrack" class="item3">
                <div class="project-container">
                    <div>tracker för vårt pubquiz-lag som analyserar styrkor och svagheter</div>
                    <div class="links">
                        <a href="https://github.com/Jokab/quizatrack/" target="_blank"><i class="fa-brands fa-github icon"></i></a>
                    </div>
                    <div class="skills-container">
                        <div class="skill">Vue 3</div>
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

.link-button {
  color: #fff;
  border: 2px solid #007BFF;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.link-button:hover {
  background-color: #007BFF;
  color: #fff;
}

.projects {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.skills-container {
    display: flex; 
    gap: 0.6rem; 
    flex-wrap: wrap;
}
.skill {
    font-family: 'Franklin Gothic Medium';
    font-weight: 400;
    padding: 0.75rem;
    border-radius: 15px;
    background-color: var(--accent-color);
}
.heading {
    text-align :center; 
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: 400;
}
.container {
    display: grid; 
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    gap: 2rem;
}
@media screen and (min-width: 768px) {
    .container {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .item1 {grid-column: 1/3;}
    .item2 {grid-column: 3/5;}
    .item3 {grid-column: 2/4;}
}
.project-container {
    display: flex; 
    flex-direction: column; 
    row-gap: 1rem;
}
.links {
    gap: 0.5rem; 
    display:flex;
    min-height: 2rem;
    align-items: center;
}
</style>
