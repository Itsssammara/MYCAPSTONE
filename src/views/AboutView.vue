
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