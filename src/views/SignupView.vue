<template>
  <form  @submit.prevent="register">
      <!-- <div class="mb-3">
          <input type="number" class="form-control w-50 mx-auto" placeholder="User ID" v-model="payload.userID">
      </div> -->
      <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="First Name" v-model="payload.firstName">
      </div>
      <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="Last Name" v-model="payload.lastName">
      </div>
      <!-- <div class="mb-3">
          <input type="number" class="form-control w-50 mx-auto" placeholder="Age" v-model="payload.userAge">
      </div> -->
      <!-- <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="Gender" v-model="payload.gender">
      </div> -->
      <!-- <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="Role" v-model="payload.userRole">
        </div> -->
      <div class="mb-3">
          <input type="email" class="form-control w-50 mx-auto" placeholder="Email" v-model="payload.emailAdd">
      </div>
      <div class="mb-3">
          <input type="password" class="form-control w-50 mx-auto" placeholder="Password" v-model="payload.userPass">
      </div>
      <!-- <div class="mb-3">
          <input type="text" class="form-control w-50 mx-auto" placeholder="User Profile" v-model="payload.userProfile">
      </div> -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-success" >Add User</button>
      </div>
    </form>
  </template>
  
  
  <script>
  import sweet from 'sweetalert'
  export default {
    name: 'AddUser',
    data(){
      return{
        payload: {
          // userID: '',
          firstName:'',
          lastName:'',
          // userRole:'',
          // gender:'',
          // userAge: '',
          emailAdd:'',
          userPass:'',
          // userProfile:'https://i.postimg.cc/pTLmhdpj/placeholder-person.jpg'
        }
      }
    },
  
    methods: {
  
  async register() {
  try {
  await this.$store.dispatch('register', this.payload );
  sweet({
      title: 'Added Successful',
      text: 'User has been added successfully!',
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
      text: 'Failed to add user',
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