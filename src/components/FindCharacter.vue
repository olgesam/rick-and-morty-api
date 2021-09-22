<template>
  <form @keydown.enter.prevent="findCharacter">
    <input type="text"
           v-model="inputValue"
           name="search"
           id="search"
           autocomplete="on"
           placeholder="Enter character's name"
           @keydown.enter.prevent="findCharacter"

    >
  </form>
</template>

<script>
export default {
  name: "FindCharacter",
  data () {
    return {
      inputValue: '',
    }
  },
  props: [
      'characters'
  ],
  methods: {
    findCharacter () {
      console.log('input', this.inputValue)
      if (this.inputValue.trim()) {
        return this.characters.filter(t => t.name == this.inputValue)
      }
      this.$emit('find-character', this.characters)
      this.inputValue = ''
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    justify-content: center;
  }
  input {
    width: 400px
  }
</style>