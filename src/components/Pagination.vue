<template>
  <div>
    <div>
      <button
          :disabled="page == 1"
          @click="page --"
      >
        Prev Page
      </button>
      <button
          :disabled="page == info.pages"
          @click="page ++"
      >
        Next Page
      </button>
    </div>
    <p>
      <span>Page {{ page }}</span>
      <span v-if="info.pages">/{{info.pages}}</span>
    </p>
  </div>

</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      info: [],
      page: 1,
      all_pages: null
    }
  },
  props: [
      'characters',
  ],
  mounted() {
    this.loadData()
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(json => {
          this.info = json.info
        })
  },
  computed: {

  },
}
</script>

<style scoped>

</style>