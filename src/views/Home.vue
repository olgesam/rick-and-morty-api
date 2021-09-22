<template>
  <div>
    <h2>Home page</h2>
    <ul>
      <li><router-link to="/characters">Characters</router-link></li>
      <li><router-link to="/locations">Locations</router-link></li>
      <li><router-link to="/episodes">Episodes</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>