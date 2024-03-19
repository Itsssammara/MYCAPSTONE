<template>
    <div v-if="products" class="container"> <!-- Wrapper Element -->
      <h1>Our Products</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="product in products" :key="product.prodID" class="col">
          <div class="card h-100 product-card">
            <img :src="product.prodUrl" class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">R{{ product.amount }}</p>
            </div>
            <div class="card-footer">
              <router-link :to="{ name: 'product', params: { id: product.prodID }}">
                View More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- End of Wrapper Element -->
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  
  export default {
  
    computed: {
      products() {
        return this.$store.state.products
      }
    },
    mounted() {
      this.$store.dispatch('getProducts')
    },
  };
  </script>
  
  <style scoped>
  .product-card:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  }
  </style>
  