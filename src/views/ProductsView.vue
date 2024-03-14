<template>
  <header>
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
      rel="stylesheet"
    />
  </header>
  <div class="products">
    <h1 class="display-2">This is the products page</h1>
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="product in products" :key="product.prodID" class="col">
          <div class="card mx-1 my-3">
            <img :src="product.prodUrl" class="card-img-top h-25" id="image"/>
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <h5 class="card-title">{{ product.category }}</h5>
              <p class="card-text">
                R{{ product.amount }}
              </p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  }
}
</script>

<style scoped>
.container {
  background-color: #e9abc4;
  height: 100vh;
}

img {
  width: 200px;
  aspect-ratio: 1/1.25;
}

.btn {
  border-radius: 30px;
  color: #fff;
  background-color: #e9abc4;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: .4s;
}

.btn:hover {
  background-color: #e5799e;
  color: #fff;
  transition: 1s;
  padding: 10px;
  font-size: small;
}

.card-deck {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 10px;
}

.card {
  margin: 20px auto;
  height: auto;
  border-radius: 15px;
}

.card:hover {
  border: none;
  box-shadow: 10px 5px 15px 0px #4E96D3;
}

.card-img-top {
  height: 160px;
  width: 18rem;
  display: flex;
  margin: auto;
}
</style>
