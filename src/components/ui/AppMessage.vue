<template>
  <div :class="['alert', message.type]" v-if="message">
    <p class="alert-title" v-if="title">{{ title }}</p>
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { TITLE_MAP } from '@/common/constants'

export default {
  name: 'app-message',
  setup() {
    const store = useStore()
    const message = computed(() => store.state.message)
    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)

    return { message, title, close: () => store.commit('clearMessage') }
  }
}
</script>

<style lang="css" scoped>

</style>
