<template>
  <div id="filterTable" class="d-flex ">
    <input
      type="text"
      class="divide form-control form-control-sm"
      v-model="searchQuery"
      @change="searchFieldWatcher()">
    <button class="btn btn-sm btn-primary" @click="search()">Найти</button>
  </div>
</template>

<script>
export default {
  name: 'FilterTable',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
      this.$store.dispatch('applyFilter', this.searchQuery);
    },
    searchFieldWatcher() {
      if (this.searchQuery.length === 0) {
        this.$store.dispatch('restoreData');
      }
    },
  },
};
</script>

<style>

</style>
