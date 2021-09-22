<template>
  <div>
    <img :src="character.image" alt="there's a problem with an image(in CharacterItem)">
    <strong>{{' ' + character.name}}</strong>
  </div>
</template>

<script>
export default {
  name: "CharacterPage",
  props: [
    'characters'
  ],
  mounted() {
    fetch('https://rickandmortyapi.com/api/character)
        .then(response => response.json())
        .then(json => {
          this.characters = json.results

        })
  },
}
</script>

<style scoped>

</style>