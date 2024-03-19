<template>
  <div class="container">
      <h1>our products</h1>
      <div >
          <card v-if="product">
              <template #header>
                  <h4>{{ product.prodName }}</h4>
              </template>
              <template #body>
                 <img :src="product.prodUrl" alt="hijabs">
                 <p>R{{ product.amount }}</p>
              </template>
              <template #footer>
                  <!-- <router-link :to="{name:'product',params:{id:product.prodID}}">
                      View More
                  </router-link> -->
                  <button>
                    Add to cart
                  </button>
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
          product(){
              return this.$store.state.product
          }
      },
      mounted() {
          this.$store.dispatch('fetchProduct', this.$route.params)
      },
  }
</script>

<style scoped>

</style>