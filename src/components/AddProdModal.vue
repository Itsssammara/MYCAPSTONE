<template>
    <div class="modal" @click.self="closeModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add to Cart</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <h5 class="card-title">{{ product.category }}</h5>
            <p class="card-text">R{{ product.amount }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
            <button type="button" class="btn btn-primary" @click="addProductToCart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
    methods: {
      closeModal() {
        this.$emit('close');
      },
      addProductToCart() {
        this.$emit('add', this.product);
      }
    }
  };
  </script>
  
  <style scoped>

  </style>
  