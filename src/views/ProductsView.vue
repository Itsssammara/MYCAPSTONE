<template>
  <div class="container">
      <h1>our products</h1>
      <div v-if="products">
          <card v-for="product in products" :key="product.prodID">
              <template #header>
                  <h4>{{ product.prodName }}</h4>
              </template>
              <template #body>
                 <img :src="product.prodUrl" alt="hijabs">
                 <p>R{{ product.amount }}</p>
              </template>
              <template #footer>
                  <router-link :to="{name:'product',params:{id:product.prodID}}">
                      View More
                  </router-link>
              </template>
          </card>
      </div>
  </div>
</template>

<script>
import card from '../components/card.vue'
  export default {
      name: "test",
      components:{
          card
      },
      computed:{
          products(){
              return this.$store.state.products
          }
      },
      mounted() {
          this.$store.dispatch('getProducts')
      },
  }
</script>

<style scoped>

</style>