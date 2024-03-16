<template>
  <div>
      <button type="button " class="btn modalButton" data-bs-toggle="modal" data-bs-target="#addProductModal">
Add product
</button>
<div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Product Details</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form  @submit.prevent="addProduct">
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Product Image" v-model="payload.prodUrl">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Product ID" v-model="payload.prodID">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Product Name" v-model="payload.prodName">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control w-50 mx-auto" placeholder="Product Quantity" v-model="payload.quantity">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Product Amount" v-model="payload.amount">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-success" >Add Product</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
  </div>
</template>

<script>
import sweet from 'sweetalert'
  export default {
      name: 'AddProd',
      data(){
        return{
          payload: {
            prodUrl: '',
            prodID:'',
            prodName:'',
            quantity:'',
            amount:''
          }
        }
      },

      methods: {

async addProduct() {
try {
  await this.$store.dispatch('addProduct', this.payload );
  sweet({
        title: 'Added Successful',
        text: 'Product has been added successfully!',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });

      setTimeout(() => {
        window.location.reload();
      }, 3000);

} catch (error) {
  console.error(error);
  sweet({
        title: 'Error',
        text: 'Failed to add product',
        icon: 'error',
        timer: 2000
      });
      
      setTimeout(() => {
        window.location.reload();
      }, 3000);
}
}
}
  }
</script>

<style scoped>

</style>