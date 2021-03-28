<template>
  <div id="NewRecordForm">
    <button class="btn btn-success btn-sm" @click="toggleFormVisibility">Добавить запись</button>
    <div class="form-wrapper" v-if="showForm">
      <form class="form" @submit.prevent="handleSubmit()">
        <span>ID – {{ newRecord.id }}</span>
        <span>City – {{ newRecord.address }}</span>
        <div class="form-group d-flex justify-content-between mb-3">
          <label for="form__id" class="form__required-field">ID</label>
          <div class="input-wrapper d-flex flex-column">
            <input
              id="form__id"
              class="form-control form-control-sm"
              :class="{ 'is-invalid': submitted && $v.newRecord.id.$error }"
              type="text"
              v-model.lazy="newRecord.id"
              />
            <div v-if="submitted && $v.newRecord.id.$error" class="invalid-feedback">
              <small
                class="form-text"
                v-if="!$v.newRecord.id.required">Обязательное поле
              </small>
              <small
                class="form-text"
                v-if="!$v.newRecord.id.numeric">В поле допустимы только числовые значения
              </small>
            </div>
          </div>
        </div>

        <div class="form-group d-flex justify-content-between mb-3">
          <label for="form__firstname" class="form__required-field">First name</label>
          <div class="input-wrapper d-flex flex-column">
            <input
              id="form__firstname"
              class="form-control form-control-sm"
              :class="{ 'is-invalid': submitted && $v.newRecord.firstName.$error }"
              type="text"
              v-model.lazy="newRecord.firstName"
              />
            <div v-if="submitted && $v.newRecord.firstName.$error" class="invalid-feedback">
              <small
                class="form-text"
                v-if="!$v.newRecord.firstName.required">Обязательное поле
              </small>
              <small
                class="form-text"
                v-if="!$v.newRecord.firstName.alpha">Цифры недопустимы
              </small>
            </div>
          </div>
        </div>

        <div class="form-group d-flex justify-content-between mb-3">
          <label for="form__lastname" class="form__required-field">Last name</label>
          <div class="input-wrapper d-flex flex-column">
            <input
              id="form__lastname"
              class="form-control form-control-sm"
              :class="{ 'is-invalid': submitted && $v.newRecord.lastName.$error }"
              type="text"
              v-model.lazy="newRecord.lastName"
              />
            <div v-if="submitted && $v.newRecord.lastName.$error" class="invalid-feedback">
              <small
                class="form-text"
                v-if="!$v.newRecord.lastName.required">Обязательное поле
              </small>
              <small
                class="form-text"
                v-if="!$v.newRecord.lastName.alpha">Цифры недопустимы
              </small>
            </div>
          </div>
        </div>

        <div class="form-group d-flex justify-content-between mb-3">
          <label for="form__email" class="form__required-field">Email</label>
          <div class="input-wrapper d-flex flex-column">
            <input
              id="form__email"
              class="form-control form-control-sm"
              :class="{ 'is-invalid': submitted && $v.newRecord.email.$error }"
              type="text"
              v-model.lazy="newRecord.email"
              />
            <div v-if="submitted && $v.newRecord.email.$error" class="invalid-feedback">
              <small
                class="form-text"
                v-if="!$v.newRecord.email.required">Обязательное поле
              </small>
              <small
                class="form-text"
                v-if="!$v.newRecord.email.email">Адрес не похож на подлинный
              </small>
            </div>
          </div>
        </div>

        <div class="form-group d-flex justify-content-between mb-3">
          <label for="form__phone" class="form__required-field">Phone</label>
          <div class="input-wrapper d-flex flex-column">
            <input
              id="form__phone"
              class="form-control form-control-sm"
              :class="{ 'is-invalid': submitted && $v.newRecord.phone.$error }"
              type="text"
              v-model.lazy="newRecord.phone"
              v-phone
              />
            <div v-if="submitted && $v.newRecord.phone.$error" class="invalid-feedback">
              <small
                class="form-text"
                v-if="!$v.newRecord.phone.required">Обязательное поле
              </small>
              <small
                class="form-text"
                v-if="!$v.newRecord.phone.minLength">Поле должно содержать 10 цифр
              </small>
            </div>
          </div>
        </div>

        <div class="form-group d-flex justify-content-between mb-3">
          <label for="form__streetAddress">Street address</label>
          <div class="input-wrapper d-flex flex-column">
            <input
              id="form__streetAddress"
              class="form-control form-control-sm"
              type="text"
              v-model.lazy="newRecord.address.streetAddress"
              />
          </div>
        </div>

        <div class="form-group d-flex justify-content-between mb-3">
          <label for="form__city">City</label>
          <div class="input-wrapper d-flex flex-column">
            <input
              id="form__city"
              class="form-control form-control-sm"
              type="text"
              v-model.lazy="newRecord.address.city"
              />
          </div>
        </div>

        <div class="form-group d-flex justify-content-between mb-3">
          <label for="form__state">State</label>
          <div class="input-wrapper d-flex flex-column">
            <input
              id="form__state"
              class="form-control form-control-sm"
              type="text"
              v-model.lazy="newRecord.address.state"
              />
          </div>
        </div>

        <div class="form-group d-flex justify-content-between mb-3">
          <label for="form__zip">Zip</label>
          <div class="input-wrapper d-flex flex-column">
            <input
              id="form__zip"
              class="form-control form-control-sm"
              type="text"
              v-model.lazy="newRecord.address.zip"
              />
          </div>
        </div>

        <div class="form-group d-flex flex-column justify-content-between mb-3">
          <label for="form__description" class="mb-2">Description</label>
            <textarea
              name="description"
              id="form__description"
              class="form-control"
              rows="4"
              v-model.lazy="newRecord.description"
              />
        </div>

        <section class="form__controllers d-flex justify-content-between">
          <button
            class="btn btn-outline-danger btn-sm" @click="toggleFormVisibility">Закрыть</button>
          <button
            type="submit"
            class="btn btn-success btn-sm">Добавить</button>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required, email, alpha, minLength, numeric,
} from 'vuelidate/lib/validators';

export default {
  name: 'NewRecordForm',
  data() {
    return {
      showForm: false,
      newRecord: {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: {
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
        },
        description: '',
      },
      submitted: false,
    };
  },
  validations: {
    newRecord: {
      id: {
        required,
        numeric,
      },
      firstName: {
        required,
        alpha,
      },
      lastName: {
        required,
        alpha,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
        minLength: minLength(13),
      },
    },
  },
  directives: {
    phone: {
      bind(el) {
        // eslint-disable-next-line no-param-reassign
        el.oninput = function (e) {
          if (!e.isTrusted) {
            return;
          }

          const temp = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
          this.value = !temp[2] ? temp[1] : `(${temp[1]})${temp[2]}${temp[3] ? `-${temp[3]}` : ''}`;
          el.dispatchEvent(new Event('input'));
        };
      },

    },
  },
  methods: {
    toggleFormVisibility() {
      this.showForm = !this.showForm;
    },
    sendRecord() {
      this.$store.dispatch('addRecord', this.newRecord);
      this.clearNewRecordFields();
    },
    capitalize(value) {
      const tempValue = value.toString();
      return tempValue.charAt(0).toUpperCase() + tempValue.slice(1);
    },
    handleSubmit() {
      this.submitted = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.newRecord.firstName = this.capitalize(this.newRecord.firstName);
        this.newRecord.lastName = this.capitalize(this.newRecord.lastName);
        this.sendRecord();
        this.toggleFormVisibility();
      }
    },
    clearNewRecordFields() {
      this.newRecord.id = null;
      this.newRecord.firstName = '';
      this.newRecord.lastName = '';
      this.newRecord.email = '';
      this.newRecord.phone = '';
      this.newRecord.address.streetAddress = '';
      this.newRecord.address.city = '';
      this.newRecord.address.state = '';
      this.newRecord.address.zip = '';
      this.newRecord.description = '';

      this.submitted = false;
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
  z-index: 100;
}

.form {
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 400px;
  background-color: #fff;
  border-radius: 4px;
  max-height: 800px;
  overflow-y: auto;
}

.form-group label {
  margin-right: 12px;
}

textarea[name="description"] {
  resize: none;
  width: 100%;
}

.form__required-field:after {
  content: '*';
  color: red;
}

input.form-control, .invalid-feedback {
  width: 240px;
}
</style>
