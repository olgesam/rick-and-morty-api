<template>
  <li>
    <router-link :to="`character/${character.name}/${character.id}`">
      {{character.id + ' '}}
      <img :src="character.image" alt="there's a problem with an image(in CharacterItem)">
      <strong>{{' ' + character.name}}</strong>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "CharacterItem",
  props: {
    character:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }
</style>