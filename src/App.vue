<template>
    <nav>
      <!-- <RouterLink to="/">Go to Home</RouterLink> -->
    </nav>
    <main class="app">
      <RouterView />
    </main>
</template>

<style>
.app {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background-color: darkgrey;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
}
</style>
