<template>
  <div class="content">
    <div class="signup-container">
      <h1 class="signup-title">Welcome back!</h1>

      <div class="form-floating w-75 mx-auto mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="payload.emailAdd">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating w-75 mx-auto mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="payload.userPass">
        <label for="floatingPassword">Password</label>
      </div>

      <button class="btn btn-primary btn-block" type="button" @click="login">Login</button>
      
      <div class="regist-link">Don't have an account? 
          <router-link to="/signup">Sign up here</router-link>
      </div>
    </div>
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
      this.$store.dispatch('login', this.payload);
    }
  }
};
</script>

<style scoped>
.content {
  background-image: url('https://i.postimg.cc/yYy6dSBN/contactbg.jpg');
  background-size: cover;
  background-position: center;
  width: 100vw; 
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-container {
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin-bottom: 110px;
}

.signup-title {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: #000000;
}

.form-floating input[type="email"],
.form-floating input[type="password"] {
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  background-color: transparent;
}

.form-floating input[type="email"]:focus,
.form-floating input[type="password"]:focus {
  border-color: #6c757d;
}

.btn-primary {
  background-color: #d45693;
  border: none;
}

.btn-primary:hover {
  background-color: #d45693;
  box-shadow: 0 0 10px rgba(212, 86, 147, 0.5);
}

@media only screen and (max-width: 768px) {
  .signup-container {
    width: 90%;
  }
}

@media only screen and (max-width: 576px) {
  .signup-container {
    width: 80%;
  }
}

@media only screen and (max-width: 400px) {
  .signup-title {
    font-size: 24px;
  }
}
</style>
