<script setup lang="ts">
import CV from '@/assets/CV.pdf'
</script>

<template>
    <!-- <div style="display: flex; flex-direction: column; height: 100%"> -->
        <div class="center">
            <p>
                <span style="font-size: 1.125rem"><b>hej, jag heter jakob csörgei gustavsson!</b></span>
                <br/><br/>
                jag är en fullstack-utvecklare som kan hela techstacken, med framför allt erfarenhet av C#/.NET, Vue/Typescript, AWS och PostgreSQL
                <br/><br/>
                kika in mina <RouterLink to="/projects">egna projekt</RouterLink> eller <a :href="CV" target="_blank">CV</a>
            </p>
            <div class="links">
                <!-- TODO: Replace with icons-->
                <a href="https://github.com/Jokab" target="_blank">github</a>
                <a href="https://linkedin.com/in/jakobcg/" target="_blank">linkedin</a>
            </div>
        </div>
    <!-- </div> -->
</template>

<style scoped>
.center {
    margin: 0 auto;
    align-self: center;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20rem;
}
.links {
    display:flex;
    gap: 1rem;
    justify-content: center;
}
</style>
