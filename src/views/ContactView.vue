<template>
  <div class="contact">
    <div class="contact-image">
      <img src="https://i.postimg.cc/zGbQ5jWW/contactus.jpg" alt="Contact Image">
    </div><br>
    <div class="contact-form">
      <h1>Contact Us</h1>
      
      <form action="https://formspree.io/f/xayrbrrv" method="POST">
        <p>Have questions? We'd love to hear from you!</p>
        <label for="name"></label><br>
        <input type="text" id="name" name="name" placeholder="Name" required><br>
        <label for="email"></label><br>
        <input type="email" id="email" name="email" placeholder="Email" required><br>
        <label for="message"></label><br>
        <textarea id="message" name="message" placeholder="What's on your mind?" required></textarea><br>
        <input type="submit" value="Submit">
      </form><br>
      <div class="social-icons">
      <a href="#" class="icon" id="whatsapp-icon"><i class="fa-brands fa-square-whatsapp"></i></a>
      <a href="#" class="icon" id="instagram-icon"><i class="fa-brands fa-square-instagram"></i></a>
      <a href="#" class="icon" id="facebook-icon"><i class="fa-brands fa-square-facebook"></i></a>
    </div>
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
    margin-left: 0%;
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
    max-width: 450px;
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

  /* Additional Styles for Placeholder */
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  input[type="submit"] {
    width: 100%;
    background-color: #000000;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background-color: #dc689a;
  }
  
  /* Social Icons */
  .social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  margin: 0 10px; /* Adjust as needed */
  text-decoration: none;
  color: #333; /* Change color as needed */
  font-size: 24px; /* Adjust size as needed */
}

.icon:hover {
  color: #666; /* Change hover color as needed */
}

/* Styles for specific icons */
#whatsapp-icon {
  color: #25D366; /* Change color as needed */
}

#instagram-icon {
  color: #C13584; /* Change color as needed */
}

#facebook-icon {
  color: #3B5998; /* Change color as needed */
}

  
</style>
