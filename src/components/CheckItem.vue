<!-- CartItem.vue -->
<template>
    <div>
      <p>{{ item.name }} - ${{ item.amount }} x {{ item.quantity }}</p>
      <button @click="removeItem">Remove</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      removeItem() {
        this.$emit('remove');
      }
    }
  }
  </script>
  