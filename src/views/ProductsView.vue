<template>
  <div class="container">
    <br>
    <h2 class="animate__animated heartBeat">Discover Our Collection</h2><br>
    <div class="search-container">
  <input v-model="searchQuery" type="text" class="searchBar" placeholder="Search...">
</div><br>
    <div class="row row-cols-1 row-cols-md-3 g-4 animate__animated fadeInUp">
      <div v-for="product in filteredProducts" :key="product.prodID" class="col">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      if (!this.searchQuery.trim()) return this.products;
      const query = this.searchQuery.trim().toLowerCase();
      return this.products.filter(product => {
        return product.prodName.toLowerCase().includes(query);
      });
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  }
}
</script>


<style scoped>
h2{

  font-family: 'Pacifico'; 
  font-size: 26px;
  font-weight: lighter; 
  color: #d45555; 
}
.product-card {
  height: 500px; 
  background: linear-gradient(to top, rgba(183, 106, 142, 0.552), rgba(0, 0, 0, 0)); /* Adjust gradient colors as needed */
}


.image-container {
  height: 300px; 
  overflow: hidden;
}

.image-container img {
  width: 90%;
  height: 115%; 
  object-fit: cover; 
  transition: transform 0.3s ease; 
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
/* searchbar */
.search-container {
  position: relative;
}

.searchBar {
  width: 600px; 
  padding: 10px;
  padding-right: 30px; 
  border: 1px solid #ccc;
  border-radius: 5px;
}
.searchBar {
  width: 300px; /* Default width */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Media query for smaller screens */
@media only screen and (max-width: 600px) {
  .searchBar {
    width: 300px; /* Adjusted width for smaller screens */
  }
}

/* Media query for larger screens */
@media only screen and (min-width: 1200px) {
  .searchBar {
    width: 500px; /* Adjusted width for larger screens */
  }
}
/* title animation */
.animate__animated {
  animation-duration: 2.5s; /* Adjust animation duration as needed */
  animation-fill-mode: both;
}

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}

.heartBeat {
  animation-name: heartBeat;
}

/* prods animation */
.animate__animated {
  animation-duration: 1.5s; /* Adjust animation duration as needed */
}

.fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px); /* Adjust initial position as needed */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Adjust final position as needed */
  }
}

</style>
