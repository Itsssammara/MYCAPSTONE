<template>
    <button class="btn btn-danger" @click="deleteProduct">Delete</button>
  </template>
  
  <script>
  export default {
    props: ['productId'],
    methods: {
      deleteProduct() {
        this.$store.dispatch('deleteProduct', this.productId);
      }
    }
  };
  </script>
  
  <style scoped>

  </style>
  