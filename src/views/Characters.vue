<template>
  <div>
    <h2>Characters</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <FindCharacter
        @find-character="findCharacter"
    />
    <hr>
    <CharactersList
        :characters="characters"
    />
    <hr>
    <Pagination @click="loadData"/>
  </div>

</template>

<script>
import CharactersList from "../components/CharactersList"
import FindCharacter from "../components/FindCharacter"
import Pagination from "../components/Pagination";

export default {
  name: "Characters",
  data () {
    return {
      characters:[],
      page: 1,
      all_pages: null
    }
  },
  methods: {
    loadData() {
      fetch('https://rickandmortyapi.com/api/character?page=' + this.page)
          .then(response => response.json())
          .then(json => {
            this.characters = json.results
            this.all_pages = json.info.pages
          })
    },
    findCharacter(character) {
      return this.characters.filter(t => t.name == character)
    }
  },
  mounted() {
    this.loadData()
  },
  components: {
    Pagination,
    CharactersList,
    FindCharacter
  },
  watch: {
    page() {
      this.page.loadData()
    }
  }
}
</script>

<style scoped>

</style>