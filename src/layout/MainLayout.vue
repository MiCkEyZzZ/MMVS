<template>
  <the-navbar />
  <div class="container with-nav">
    <router-view />
  </div>
  <app-message />
</template>

<script>
import TheNavbar from '../components/TheNavbar'

export default {
  components: { TheNavbar }
}
</script>

<style lang="css" scoped>

</style>
