<template>
  <div class="container">
    <!-- Users Section -->
    <div class="row">
      <h2 class="display-4">Users</h2>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-success" @click="addUser()">Add</button>
      </div>
    </div>
    <div class="row">
      <table>
        <!-- Table Headers -->
        <thead>
          <tr>
            <!-- Header Columns -->
            <th>User ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>User age</th>
            <th>Gender</th>
            <th>Email address</th>
            <th>User role</th>
            <th>Action</th>
          </tr>
        </thead>
        <!-- Table Body -->
        <tbody v-if="users">
          <!-- Loop through users -->
          <tr v-for="user in users" :key="user.userID">
            <!-- Display user information -->
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <!-- Action buttons -->
            <td class="d-flex justify-content-between">
              <!-- Component for updating user -->
              <updateUser :user="user" />
              <!-- Delete user button -->
              <button class="btn btn-danger" @click="deleteUser(user.userID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Products Section -->
    <div class="row">
      <h2 class="display-4">Products</h2>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-success" @click="addProduct()">Add</button>
      </div>
    </div>
    <div class="row">
      <table>
        <!-- Table Headers -->
        <thead>
          <tr>
            <!-- Header Columns -->
            <th>Product Image</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <!-- Table Body -->
        <tbody v-if="products">
          <!-- Loop through products -->
          <tr v-for="product in products" :key="product.prodID">
            <!-- Display product information -->
            <td>
              <img :src="product.prodUrl" alt="Product Image" style="width: 100px; height: auto;">
            </td>
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>R{{ product.amount }}</td>
            <!-- Action buttons -->
            <td class="d-flex justify-content-between">
              <!-- Edit product button -->
              <button class="btn btn-success" @click="editProduct(product)">Edit</button>
              <!-- Delete product button -->
              <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import DeleteProduct from './DeleteProduct.vue';
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    deleteUser(userId) {
      this.$store.dispatch('deleteUser', userId);
    },
    deleteProduct(product) {
      this.$store.dispatch('deleteProduct', product.prodID);
    },
    addUser() {
      // Logic for adding a user
    },
    addProduct() {
      // Logic for adding a product
    },
    editProduct(product) {
      // Logic for editing a product
    }
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchProducts");
  }
};
</script>

