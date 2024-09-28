<script setup lang="ts">

</script>

<template>
    <div style="display: flex; flex-direction: column; height: 100%">
        <div class="center">
            <p>
                <span style="font-size: 1.125rem"><b>Hej, jag heter Jakob Csörgei Gustavsson!</b></span>
                <br/><br/>
                Jag är en fullstack-utvecklare som kan hela techstacken, med framför allt erfarenhet av C#/.NET, Vue/Typescript, AWS och PostgreSQL.
                <br/><br/>
                Kika in mina erfarenheter och projekt här -->
            </p>
        </div>
        <div class="links">
            <!-- TODO: Replace with icons-->
            <a href="https://github.com/Jokab" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/jakobcg/" target="_blank">Linkedin</a>
        </div>
    </div>
</template>

<style scoped>
.center {
    margin: 0 auto;
    align-self: center;
    width: 100%;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.links {
    display:flex;
    gap: 1rem;
}
</style>
