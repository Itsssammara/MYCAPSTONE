<template>
  <div class="about-container">
    <div class="header">
      <h1 class="animate__animated fadeInLeft">About Us</h1>
    </div>
    <div class="image-container">
      <img class="animate__animated fadeInRight" src="https://i.postimg.cc/mr1vy2L9/model1.png" alt="Modest Elegance Hijabs">
    </div>
    <div class="content">
      
        <p>Welcome to Modest Elegance, dear sister. We extend our heartfelt gratitude for choosing us as your destination for acquiring hijabs. At Modest Elegance, we take immense pride in offering you a wide array of affordable, high-quality hijabs here in South Africa. Our mission transcends merely providing clothing; we aspire to empower women like yourself to embrace modesty while exuding elegance and<br><br> confidence in every step. With meticulous attention to detail, we handpick each hijab, ensuring not only its elegance and style but also its durability, crafted from the finest materials for enduring beauty and comfort. Whether you're preparing for a special event or seeking everyday essentials, Modest Elegance guarantees to have the perfect hijab to complement your style and personality. Embark on a journey with us today, and discover the seamless fusion of modesty and elegance. We warmly invite you to explore our collection and experience the unparalleled satisfaction of finding your perfect hijab.</p>

    </div>

    <!-- Promotion Section for Sister Company -->
    <div class="promotion-container">
      <h2>Discover Our Sister Company - Haanim's Closet</h2>
      <p>Discover the latest trends in abayas from our sister company, Haanim's Closet. Browse through our exclusive collection of stylish and elegant abayas designed to elevate your modest fashion.</p>
      <div class="image-grid">
        <div class="image">
          <img src="https://i.ibb.co/Pr5pxD3/chiffon-6.jpg" alt="Abayas">
        </div>
        <div class="image">
          <img src="https://i.ibb.co/Q6hsWbm/satin.jpg" alt="Abayas">
        </div>
        <div class="image">
          <img src="https://i.ibb.co/QX1fNp4/satin-6.jpg" alt="Abayas">
        </div>
        <div class="image">
          <img src="https://i.ibb.co/fXhchNb/jilbab-1.jpg'" alt="Abayas">
        </div>
      </div><br><br>
      <p>Visit Haanim's Closet to explore more.</p>
      <div class="social-icons">
      <a href="https://api.whatsapp.com/send/?phone=0714332419&text&type=phone_number&app_absent=0" class="icon" id="whatsapp-icon"><i class="fa-brands fa-square-whatsapp"></i></a>
      <a href="https://www.instagram.com/pietersen_haanim?igsh=MWpsZ3ljZ2lrZmZyOA==" class="icon" id="instagram-icon"><i class="fa-brands fa-square-instagram"></i></a>
      <a href="https://www.facebook.com/profile.php?id=100089705331205" class="icon" id="facebook-icon"><i class="fa-brands fa-square-facebook"></i></a>
    </div>
    </div>
  </div>
</template>

<style>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  color: #333;
  font-family: 'Crimson Text', serif;
}

.header h1 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #d45555;
}

.image-container img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.content {
  margin-top: 30px;
  font-size: 18px;
  line-height: 1.6;
}

.sister-company {
  margin-top: 50px;
}

.sister-company h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.image-grid img {
  width: 100%;
  border-radius: 8px;
}
.promotion-container {
  margin-top: 50px;
}

.promotion-container h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.promotion-container p {
  font-size: 16px;
  line-height: 1.6;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.image {
  border-radius: 8px;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: auto;
}
@media (max-width: 768px) {
  .about-container {
    padding: 10px;
  }
  
  .header h1 {
    font-size: 28px;
  }
  
  .content {
    font-size: 16px;
  }
}
.animate__animated {
    animation-duration: 2s;
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.fadeInRight {
    animation-name: fadeInRight;
}
.animate__animated {
    animation-duration: 2.5s;
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.fadeInLeft {
    animation-name: fadeInLeft;
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
