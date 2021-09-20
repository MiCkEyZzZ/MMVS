<template>
  <button class="more">Загрузить ещё</button>
</template>

<script>
export default {
  name: 'app-load-more'
}
</script>

<style lang="css" scoped>
.more {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  text-align: center;
  margin: 35px auto 0 auto;
  padding: 20px 0;
  color: #ffffff;
  background: #3eaf7c;
  border-radius: 5px;
  border: 1px solid #3eaf7c;
}

.more:hover {
  opacity: .8;
  cursor: pointer;
}
</style>
