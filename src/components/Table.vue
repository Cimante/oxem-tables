<template>
  <div id="Table">
    <div class="d-flex justify-content-between">
      <form>
        <label for="sizeRecordsField" class="divide">Кол-во записей на странице:</label>
        <input
          id="sizeRecordsField"
          type="number"
          min="1"
          max="50"
          class="inputSizeRecords"
          v-model.lazy.number="sizeRecords"
          @change="inputSizeRecordsValue()">
      </form>
      <vFilter />
    </div>
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
        <tr v-for="(item, idx) in paginatedData" :key="idx">
          <td
            class="table-row"
            v-for="(field, idx) in tableFields"
            :key="idx"
            @click="showMore(item)">{{ item[field] }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center mb-5">
          <div>
            <button
            class="btn btn-dark btn-sm"
            @click="prevPage()"
            :disabled="pageNumber === 0">
              ◀ Предыдущая страница
          </button>
          <span class="currentPage">{{ pageNumber + 1 }}</span>
          <button
            class="btn btn-dark btn-sm"
            @click="nextPage()"
            :disabled="pageNumber >= pageCount - 1">
              Следующая страница ▶
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vFilter from '@/components/Filter.vue';

export default {
  name: 'Table',
  components: {
    vFilter,
  },
  data() {
    return {
      tableFields: ['id', 'firstName', 'lastName', 'email', 'phone'],
      sortField: '',
      sortDirection: 1,
      pageNumber: 0,
      sizeRecords: 10,
    };
  },
  computed: {
    pageCount() {
      const len = this.$store.state.data.length;
      const size = this.sizeRecords;
      return Math.ceil(len / size);
    },
    paginatedData() {
      const start = this.pageNumber * this.sizeRecords;
      const end = start + this.sizeRecords;
      return this.$store.state.data.slice(start, end);
    },
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
    nextPage() {
      this.pageNumber += 1;
    },
    prevPage() {
      this.pageNumber -= 1;
    },
    inputSizeRecordsValue() {
      if (this.sizeRecords < 1) this.sizeRecords = 1;
      if (this.sizeRecords > 50) this.sizeRecords = 50;
    },
    showMore(payload) {
      this.$store.dispatch('setChoosenItem', payload);
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

.table-row {
  cursor: pointer;
}

.inputSizeRecords {
  max-width: 64px;
  padding-left: 6px;
}

.currentPage {
  display: inline-block;
  text-align: center;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .1);
  border-radius: 4px;
  padding: 4px 12px 4px 12px;
  margin: 0px 12px 0px 12px;
}
</style>
