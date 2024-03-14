<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">Card Header</slot>
    </div>
    <div class="card-body">
      <slot name="body">Card Body</slot>
    </div>
    <div class="card-footer">
      <slot name="footer">Card Footer</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card'
}
</script>
<style>
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}
.card-header {
  background-color: #F5F5F5;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.card-body {
  padding: 10px;
}
.card-footer {
  background-color: #F5F5F5;
  padding: 10px;
  border-top: 1px solid #ccc;
}
</style>