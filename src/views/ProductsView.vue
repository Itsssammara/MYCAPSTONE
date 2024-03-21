<template>
  <div v-if="products" class="container"> <!-- Wrapper Element -->
  <br>
    <h2>Discover Our Collection</h2><br>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="product in products" :key="product.prodID" class="col">
        <div class="card product-card">
          <div class="image-container">
            <img :src="product.prodUrl" class="card-img-top" alt="Product Image">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="text-gray">{{ product.category }}</p>
            <b><p class="card-text">R{{ product.amount }}.00</p></b>
            
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
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>
.product-card {
  height: 500px; /* Set the height of the card */
  background: linear-gradient(to top, rgba(183, 106, 142, 0.552), rgba(0, 0, 0, 0)); /* Adjust gradient colors as needed */
}


.image-container {
  height: 300px; /* Adjust this value as needed */
  overflow: hidden;
}

.image-container img {
  width: 90%;
  height: 115%; /* Set height to fill container */
  object-fit: cover; /* Maintain aspect ratio and cover container */
  transition: transform 0.3s ease; /* Adding transition effect */
}

.image-container:hover img {
  transform: scale(1.1); /* Zoom out effect */
}

.product-card:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

.btn-primary {
  background-color: #b53996;
  border-color: #d389c2;
}

.btn-primary:hover {
  background-color: #b80382;
  border-color: #d3e0ed;
}
.text-gray {
  color: rgb(95, 94, 94);
}
</style>
