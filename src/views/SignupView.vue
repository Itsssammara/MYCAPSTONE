<template>
  <div class="content">
    <div class="signup-container">
      <h2 class="signup-title">Create Account</h2>
      <form @submit.prevent="register" class="signup-form">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="First Name" v-model="payload.firstName">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Last Name" v-model="payload.lastName">
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">Create</button>
        </div>
        <div class="regist-link">Already have an account?
          <router-link to="/login">Login now</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import sweet from 'sweetalert'

export default {
  name: 'Signup',
  data() {
    return {
      payload: {
        firstName: '',
        lastName: '',
        emailAdd: '',
        userPass: ''
      }
    };
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('register', this.payload);
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
};
</script>

<style scoped>
.content {
  background-image: url('https://i.postimg.cc/yYy6dSBN/contactbg.jpg');
  background-size: cover;
  background-position: center;
  width: 100vw; /* Full width of the viewport */
  height: 100vh; /* Full height of the viewport */
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-container {
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 500px;
  margin-bottom: 130px;
}

.signup-title {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: #000000;
}

.signup-form .form-group {
  margin-bottom: 15px;
}

.signup-form .form-control {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

.signup-form .form-control:focus {
  border-color: #6c757d;
}

.signup-form .btn-primary {
  background-color: #d45693;
  border-color: #ffffff;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.signup-form .btn-primary:hover {
  background-color: #d45693;
  border-color: #f1f1f1;
  box-shadow: 0 0 10px rgb(107, 45, 45);
}

.regist-link {
  color: #000000;
}
/* Media Queries */
@media only screen and (max-width: 768px) {
  .signup-container {
    width: 90%; /* Adjust width for smaller screens */
  }
}

@media only screen and (max-width: 576px) {
  .signup-container {
    width: 80%; /* Further adjust width for smaller screens */
  }

  .signup-title {
    font-size: 24px; /* Adjust title font size for smaller screens */
  }

  .signup-form .form-control {
    font-size: 14px; /* Adjust input font size for smaller screens */
  }
}

@media only screen and (max-width: 400px) {
  .signup-container {
    width: 95%; /* Further adjust width for smaller screens */
  }
}
</style>
