<template>
  <div class="contact">
    <div class="contact-image">
    <img src="https://i.postimg.cc/x1ybZRRp/contact-img.png" alt="Contact Image">
  </div>
  <div class="contact-form">
    <h1>Contact Us</h1>
    
    <form action="#" method="post">
      <!-- Your contact form fields here -->
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name"><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br>
      <label for="message">Message:</label><br>
      <textarea id="message" name="message"></textarea><br>
      <input type="submit" value="Submit">
    </form>
  </div>
</div>
</template>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  .contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
  }
  .contact h1 {
    text-align: center;
    width: 100%;
    color: black;
    font-family: sans-serif;
  }
  .contact-form {
    flex: 1;
    max-width: 400px;
    margin-right: 20px;
  }
  .contact-image {
    flex: 1;
    max-width: 400px;
  }
  .contact-image img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    .contact {
      flex-direction: column;
      align-items: center;
    }
    .contact-form, .contact-image {
      max-width: 100%;
      margin-right: 0;
    }
  }
</style>