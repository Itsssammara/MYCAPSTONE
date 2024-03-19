<template>
  <div class="about-container">
    <div class="header">
      <h1>About Us</h1>
    </div>
    <div class="image-container">
      <img src="https://i.postimg.cc/mr1vy2L9/model1.png" alt="Modest Elegance Hijabs">
    </div>
    <div class="content">
      <p>
        "Modest Elegance is your destination for affordable, high-quality hijabs in South Africa. Our mission is to empower women to embrace modesty without compromising on style. We carefully curate our collection to ensure that each piece is not only elegant and stylish but also made with the finest materials for lasting wear. Whether you're dressing up for a special occasion or looking for everyday essentials, Modest Elegance has the perfect hijab for you. Shop our collection today and experience the perfect blend of modesty and elegance."
      </p>
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
          <img src="https://i.ibb.co/44kbdC1/chiffon-1.jpg" alt="Abayas">
        </div>
        <div class="image">
          <img src="https://i.ibb.co/fXhchNb/jilbab-1.jpg'" alt="Abayas">
        </div>
      </div><br><br>
      <p>Visit <a href="https://abaya-boutique.com" target="_blank">Abaya Boutique</a> to explore more.</p>
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
</style>
