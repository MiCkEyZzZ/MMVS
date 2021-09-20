<template>
  <span :class="['badge', className]">В наличии: {{ text }}</span>
</template>

<script>
import {ref, watch} from 'vue'

export default {
  name: 'app-status',
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['available', 'unavailable'].includes(value)
      }
    }
  },
  setup(props) {
    const classesMap = {
      available: 'primary',
      unavailable: 'danger'
    }

    const textMap = {
      available: 'есть',
      unavailable: 'нет'
    }

    watch(props, val => {
      className.value = classesMap[val.type]
      text.value = textMap[val.type]
    })

    const className = ref(classesMap[props.type])
    const text = ref(textMap[props.type])

    return { text, className }
  }
}
</script>

<style lang="css" scoped>

</style>
