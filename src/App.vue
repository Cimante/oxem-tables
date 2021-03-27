<template>
  <div id="app">
    <Loader v-if="this.$store.state.loading" />
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
            <Table v-if="this.$store.state.data"/>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'App',
  components: {
    Table,
    Loader,
  },
  methods: {
    getData(qty) {
      switch (qty) {
        case 'less':
          this.$store.dispatch(
            'setData',
            'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
          );
          break;
        case 'more':
          this.$store.dispatch(
            'setData',
            'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
          );
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
