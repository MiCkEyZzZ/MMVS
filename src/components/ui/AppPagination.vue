<template>
  <div class="pagination-container">
    <ul class="pagination">
      <li class="pagination-item">
        <button class="btn-pgn" disabled>Prev</button>
      </li>
      <li class="pagination-item">
        <button class="btn-pgn primary">1</button>
      </li>
      <li class="pagination-item">
        <button class="btn-pgn">2</button>
      </li>
      <li class="pagination-item">
        <button class="btn-pgn">3</button>
      </li>
      <li class="pagination-item">
        <button class="btn-pgn">Next</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app-pagination'
}
</script>

<style lang="css" scoped>
.pagination-container {
  width: 100%;
  height: 50px;
  margin: 20px 0 0 0;
  padding: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.pagination {
  display: flex;
  justify-content: center;
  flex-direction: row;
  max-width: 100%;
  width: 100%;
  align-items: center;
  margin: 0;
  padding-left: 0;
}
.pagination-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  align-items: center;
  margin: .3rem;
  color: #9ca4c1;
}
.btn-pgn {
  width: 100%;
  min-width: 2.6rem;
  height: 2.2rem;
  font-size: 12px;
  font-weight: 700;
  margin: 0;
  padding: 0 5px 0 5px;
  border-radius: 4px;
  border: 0;
  outline: none;
  cursor: pointer;
}
</style>
