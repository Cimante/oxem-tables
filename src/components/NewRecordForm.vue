<template>
  <div id="NewRecordForm">
    <button class="btn btn-success btn-sm" @click="toggleFormVisibility">Добавить запись</button>
    <div class="form-wrapper" v-if="showForm">
      <form class="form">
        <div class="form-group d-flex justify-content-between align-items-center mb-3">
          <label for="form__id">ID: </label>
          <input id="form__id" type="number" min="1" v-model.lazy="newRecord.id" />
        </div>
        <div class="form-group d-flex justify-content-between align-items-center mb-3">
          <label for="form__firstname">First name: </label>
          <input id="form__firstname" type="text" v-model.lazy="newRecord.firstName" />
        </div>
        <div class="form-group d-flex justify-content-between align-items-center mb-3">
          <label for="form__lastname">Last name: </label>
          <input id="form__lastname" type="text" v-model.lazy="newRecord.lastName" />
        </div>
        <div class="form-group d-flex justify-content-between align-items-center mb-3">
          <label for="form__email">Email: </label>
          <input id="form__email" type="email" v-model.lazy="newRecord.email" />
        </div>
        <div class="form-group d-flex justify-content-between align-items-center mb-3">
          <label for="form__phone">Phone: </label>
          <input id="form__phone" type="tel" v-model.lazy="newRecord.phone" />
        </div>
        <div class="form-group d-flex justify-content-between align-items-center mb-3">
          <label for="form__streetAddress">Street address: </label>
          <input
            id="form__streetAddress"
            type="text"
            v-model.lazy="newRecord.address.streetAddress" />
        </div>
        <div class="form-group d-flex justify-content-between align-items-center mb-3">
          <label for="form__city">City: </label>
          <input id="form__city" type="text" v-model.lazy="newRecord.address.city" />
        </div>
        <div class="form-group d-flex justify-content-between align-items-center mb-3">
          <label for="form__state">State: </label>
          <input id="form__state" type="text" v-model.lazy="newRecord.address.state" />
        </div>
        <div class="form-group d-flex justify-content-between align-items-center mb-3">
          <label for="form__zip">Zip: </label>
          <input id="form__zip" type="text" v-model.lazy="newRecord.address.zip" />
        </div>
        <div class="form-group d-flex flex-column mb-3">
          <label for="form__description" class="mb-2">Description: </label>
          <textarea
            name="description"
            id="form__description"
            cols="30"
            rows="4"
            v-model.lazy="newRecord.description" />
        </div>
        <section class="form__controllers d-flex justify-content-between">
          <button
            class="btn btn-outline-danger btn-sm" @click="toggleFormVisibility">Закрыть</button>
          <button
            type="submit"
            class="btn btn-success btn-sm"
            @click.prevent="sendRecord(), toggleFormVisibility()">Добавить</button>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewRecordForm',
  data() {
    return {
      showForm: false,
      newRecord: {
        id: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: {
          streetAddress: '',
          city: '',
          state: '',
          zip: '000000',
        },
        description: '',
      },
    };
  },
  methods: {
    toggleFormVisibility() {
      this.showForm = !this.showForm;
    },
    sendRecord() {
      this.$store.dispatch('addRecord', this.newRecord);
    },
  },
};
</script>

<style>
.form-wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .6);
}

.form {
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-width: 480px;
  background-color: #fff;
  border-radius: 4px;
}

.form-group label {
  margin-right: 12px;
}

textarea[name="description"] {
  resize: none
}
</style>
