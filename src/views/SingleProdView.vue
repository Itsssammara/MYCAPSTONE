<template>
    <div class="container">
      <h1>Our Products</h1>
      <div>
        <card v-if="product">
          <template #header>
            <h4>{{ product.prodName }}</h4>
          </template>
          <template #body>
            <img :src="product.prodUrl" alt="hijabs">
            <p>R{{ product.amount }}</p>
          </template>
          <template #footer>
            <button class="btn btn-primary">
              Add to Cart
            </button>
            <div class="back-to-products">
              <router-link :to="{ name: 'products' }" class="btn btn-secondary">
                Back to Products
              </router-link>
            </div>
          </template>
        </card>
      </div>
    </div>
  </template>
  
  <script>
  import card from '../components/card.vue'
  
  export default {
    name: "test",
    components: {
      card
    },
    computed: {
      product() {
        return this.$store.state.product
      }
    },
    methods:{
      addToCart(){
        this.$store.dispatch('addToCart', this.product);
        alert('Item added successfully!');
      }
    },
    mounted() {
      this.$store.dispatch('fetchProduct', this.$route.params)
    },
  }
  </script>
  
  <style scoped>
  .back-to-products {
    margin-top: 20px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
    transition: all 0.3s;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  </style>
  