<template>
  <div>
    <ul>
      <CharacterItem
          v-for="character in characters"
          :character="character"
          :key="character.id"></CharacterItem>
    </ul>
  </div>
</template>

<script>
import CharacterItem from "./CharacterItem"
export default {
  name: "CharactersList",
  props: [
      'characters'
  ],
  components: {
    CharacterItem
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

  }
</style>