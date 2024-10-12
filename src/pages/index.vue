<script setup lang="ts">
import CV from '@/assets/CV.pdf'
</script>

<template>
    <div class="center">
        <p>
            <span style="font-size: 1.125rem"><b>hej, jag heter jakob csörgei gustavsson!</b></span>
            <br/><br/>
            jag är en fullstack-utvecklare som kan hela techstacken, med framför allt erfarenhet av C#/.NET, Vue/Typescript, AWS och PostgreSQL
            <br/><br/>
            kika gärna in mina <RouterLink to="/projects">egna projekt</RouterLink> eller <a :href="CV" target="_blank">CV</a>
        </p>
        <div class="links">
            <a href="https://github.com/Jokab" target="_blank"><i class="fa-brands fa-github icon"></i></a>
            <a href="https://linkedin.com/in/jakobcg/" target="_blank"><i class="fa-brands fa-linkedin icon"></i></a>
        </div>
    </div>
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
