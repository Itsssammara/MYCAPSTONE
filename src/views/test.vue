<template>
    <div class="container-fluid">
      <!-- Login form -->
      <!-- <div class="mb-3 form-floating" >
        <input type="email" class="form-control w-50 mx-auto" required placeholder="Email" id="floatingInput" v-model="payload.email">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="mb-3">
        <div class="row">
          <div class="col">
            <input class="form-control w-50 mx-auto" required placeholder="Password" v-model="payload.emailPwd">
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="login">Login</button> -->
      <form>
      <h1 class="h3 mb-3 fw-normal">Welcome back!</h1>
  
      <div class="form-floating w-50 mx-auto m-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="payload.emailAdd">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating w-50 mx-auto m-3">
        <input type="password" class="form-control"  id="floatingPassword" placeholder="Password" v-model="payload.emailPass">
        <label for="floatingPassword">Password</label>
      </div>
  
      <button class="btn btn-primary " type="button" @click="login">Login</button>
    </form>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        payload: {
          emailAdd: "",
          userPass: ""
        },
      };
    },
    computed: {
      users() {
        return this.$store.state.users;
      }
    },
    methods: {
      login() {
        this.$store.dispatch('login', this.packet);
      }
     
    }
  };
  </script>
  
  <style scoped>
  form {
      display: block;
      margin-top: 0em;
  }
  
  button{
    margin-bottom: 100px;
  }
  </style>