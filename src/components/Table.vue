<template>
  <div id="Table">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th
            class="table-head"
            scope="col"
            v-for="(field, idx) in tableFields"
            :key="idx"
            @click="sortTable(`${field}`)"
          >
            <span>{{ field }}</span>
            <span v-if="sortField === `${field}` && sortDirection === 1">&nbsp;▼</span>
            <span v-if="sortField === `${field}` && sortDirection === -1">&nbsp;▲</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in this.$store.state.data" :key="idx">
          <td v-for="(field, idx) in tableFields" :key="idx">{{ item[field] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      tableFields: ['id', 'firstName', 'lastName', 'email', 'phone'],
      sortField: '',
      sortDirection: 1,
    };
  },
  methods: {
    sortTable(sortField) {
      if (this.$store.state.data) {
        if (this.sortField === sortField) {
          this.sortDirection *= -1;
        } else {
          this.sortField = sortField;
          this.sortDirection = 1;
        }
        this.$store.dispatch('sortData', [this.sortField, this.sortDirection]);
      }
    },
  },
};
</script>

<style>
.table-head {
  cursor: pointer;
}

.table-head:hover {
  color: lightblue;
}
</style>
