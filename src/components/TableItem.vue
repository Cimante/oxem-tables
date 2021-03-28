<template>
  <div id="TableItem" class="container">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="table__item mb-5">
          <p>Выбран пользователь <b>{{ item.firstName }}&nbsp;{{ item.lastName }}</b></p>
          <p>Описание:</p>
          <textarea name="description" cols="60" rows="5" v-model="item.description" />
          <p>Адрес проживания: <b>{{ item.address.streetAddress }}</b></p>
          <p>Город <b>{{ item.address.city }}</b></p>
          <p>Провинция/штат: <b>{{ item.address.state }}</b></p>
          <p>Индекс: <b>{{ item.address.zip }}</b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableItem',
  props: ['item'],
};
</script>

<style>
.table__item {
  background-color: #e5e5e5;
  padding: 8px 16px;
  border-radius: 7px;
}

.table__item p {
  padding-left: 2px;
  margin-bottom: 4px;
}

.table__item textarea {
  padding-left: 5px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  resize: none
}
</style>
