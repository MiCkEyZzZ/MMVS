<template>
  <div class="filter">
    <div class="form-control">
      <input
          type="text"
          placeholder="Введите название..."
          v-model.trim="name"
      >
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Выберите статус</option>
        <option value="available">В наличии</option>
        <option value="unavailable">Нет в наличии</option>
      </select>
    </div>
    <button
        class="btn warning"
        v-if="isActive"
        @click="reset"
    >Очистить</button>
  </div>
</template>

<script>
import {computed, ref, watch} from 'vue'

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],

  setup(_, {emit}) {
    const name = ref()
    const status = ref()

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    const isActive = computed(() => name.value || status.value)

    return {
      name,
      status,
      isActive,
      reset: () => {
        name.value = ''
        status.value = null
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>
