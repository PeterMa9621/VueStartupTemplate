<template>
  <div id="app">
    <div class="h-100 d-flex flex-column">
      <navigation/>
      <div class="flex-column flex-grow-1 overflow-auto">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/navigation/Navigation";
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
  html, body {
    height: 100%;
    min-width: 40vh;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
