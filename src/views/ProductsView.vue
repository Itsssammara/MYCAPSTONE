<template>
    <div v-if="products" class="container"> <!-- Wrapper Element -->
      <h1>Our Products</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="product in products" :key="product.prodID" class="col">
          <div class="card product-card">
            <div class="image-container">
              <img :src="product.prodUrl" class="card-img-top" alt="Product Image">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">R{{ product.amount }}</p>
            </div>
            <div class="card-footer">
              <router-link :to="{ name: 'product', params: { id: product.prodID }}" class="btn btn-primary">
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
        return this.$store.state.products;
      },
    },
    mounted() {
      this.$store.dispatch('getProducts');
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    height: 100%;
  }
  
  .image-container {
    height: 200px; /* Adjust this value as needed */
    overflow: hidden;
  }
  
  .image-container img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease; /* Adding transition effect */
  }
  
  .image-container:hover img {
    transform: scale(1.1); /* Zoom out effect */
  }
  
  .product-card:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  </style>
  