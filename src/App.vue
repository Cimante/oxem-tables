<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-8 offset-2 mt-3">
          <section>
            <button
              class="btn btn-sm btn-dark divide"
              @click="getData('less')">Загрузить малую часть
            </button>
            <button
              class="btn btn-sm btn-dark"
              @click="getData('more')">Загрузить большую часть
            </button>
          </section>
          <main class="mt-5">
            <Table :data="this.$store.state.data" />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table.vue';

export default {
  name: 'App',
  components: {
    Table,
  },
  methods: {
    getData(qty) {
      switch (qty) {
        case 'less':
          this.$store.dispatch('setLessData');
          break;
        case 'more':
          this.$store.dispatch('setMoreData');
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
.divide {
  margin-right: 8px;
}
</style>
