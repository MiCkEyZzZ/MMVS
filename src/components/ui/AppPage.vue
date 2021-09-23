<template>
  <div class="breadcrumbs" v-if="back">
    <slot name="arrow" />
    <router-link
        to="/products"
        class="text-white pl-2"
    >Вернуться к списку продуктов</router-link>
  </div>
  <div class="card">
    <h1 class="card-title">
      {{title}}
      <slot name="header" />
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'app-page',
  props: {
    title: {
      type: String,
      required: true
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    document.title = `${props.title}`
  }
}
</script>

<style lang="css" scoped>

</style>
