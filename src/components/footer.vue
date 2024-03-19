<template>
  <div class="footer">
    <div class="footer-column">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h5>Contact Details</h5>
      <p>314 Imam Haron Road</p>
      <p>City, Country</p>
      <p>Email: info@modestelegance.com</p>
      <p>Phone: +1234567890</p>
    </div>
    <div class="footer-column">
      <h3>Follow Us</h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerComp',
};
</script>

<style>
.footer {
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  padding: 20px;
}

.footer-column {
  display: inline-block;
  margin: 0 80px; /* Adjust margin between columns */
}

.footer-column h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 5px;
}

.footer-column ul li a {
  color: #000000;
  text-decoration: none;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}
</style>
