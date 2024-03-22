<template>
  <card v-if="product">
    <template #header>
      <h4 class="card-header">{{ product.prodName }}</h4>
    </template>
    <template #body>
      <img :src="product.prodUrl" alt="hijabs"><br><br>
      <p class="text-gray">In stock</p>
      <strong><p>R{{ product.amount }}.00</p></strong>
      <!-- Quantity buttons -->
      <div class="quantity-container">
        <button class="quantity-btn" @click="decrementQuantity">-</button>
        <span class="quantity">{{ product.quantity }}</span>
        <button class="quantity-btn" @click="incrementQuantity">+</button>
      </div><br>
      <!-- Add to Cart button -->
      <button class="btn btn-primary white-btn" @click="addToCart">
        Add to Cart
      </button>
    </template>
    <template #footer>
      <div class="back-to-products">
        <router-link :to="{ name: 'products' }" class="btn btn-secondary">
          Back to Products
        </router-link>
      </div>
    </template>
  </card>
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
    data() {
    return {
      quantity: 1 
    }
  },
    methods:{
      addToCart() {
      // Add product to cart with specified quantity
      this.$store.dispatch('addToCart', { product: this.product, quantity: this.quantity });
      alert('Item added successfully!');
    },
    incrementQuantity() {
      // Increment quantity
      this.quantity++;
    },
    decrementQuantity() {
      // Decrement quantity, but ensure it's not less than 1
      if (this.quantity > 1) {
        this.quantity--;
      }
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.$route.params)
  },
};
  </script>
  
  <style scoped>

  .back-to-products {
    margin-top: 20px;
  }
  .card-header {
    background-color: #ce7fa9;
    color: #fff;
    padding: 10px;
    margin: 0;
  }
  
  .btn-primary.white-btn {
    background-color: #fff;
    border: 2px solid #000;
    color: #000;
    transition: all 0.3s;
    border-radius: 0%;
    width: 300px;
  }

  .btn-primary.white-btn:hover {
    background-color: #000;
    color: #fff;
  }
  .text-gray {
  color: rgb(95, 94, 94);
  }
  /* Style for quantity buttons */
.quantity-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  background-color: #eee;
  border: none;
  cursor: pointer;
}

.quantity {
  margin: 0 10px;
  font-size: 18px;
}
  </style>
  