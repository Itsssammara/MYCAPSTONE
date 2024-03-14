<template>
    <div class="signup">
      <h1>Create Account</h1>
      <form action="/signup" method="POST">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
      </div>
      <router-link to="/login">
        <button type="submit">Register </button>
      </router-link>
      <div class="regist-link">Already have an account?
       <router-link to="/login">Login now</router-link>
      </div>
      
      </form>
    </div>
  </template>
  
  <style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  .login{
    background-color: rgb(226, 165, 112);
    height: 100vh;
  }
  .login form{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: block;
    background: white;
    width: 410px;
    padding: 30px;
  }
  .login form .data{
    height: 45px;
    width: 100%;
    margin: 40px 0;
  }
  form .data label{
    font-size: 18px;
  }
  form .data input {
    height: 100%;
    widows: 100%;
    padding-left: 10px;
    font-size: 17px;
    border: 1px solid silver;
  }
  form .data input:focus{
    border-color: brown;
    border-bottom-width: 2px;
  }
  form button{
    margin: 30px 0;
    height: 45px;
    widows: 100%;
  }
  form button.btn {
    width: 100%;
    background: none;
    border: none;
    color: white;background: black;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;letter-spacing: 1px;
    cursor: pointer;
  }
  form .regist-link{
    text-align: center;
  }
  form .regist-link router-link{
  color: blue;
  text-decoration: none;
  }
  form .regist-link router-link:hover{
    text-decoration: underline;
  }
  </style>
  