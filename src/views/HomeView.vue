<template>
  <div class="container">
    <div class="title">
      <h1 class="animate__animated fadeInRight">Elevating Modesty, <br>Embracing Elegance...</h1>
      <router-link to="/products">
      <button class="big-button">Shop Now</button>
    </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    navigation,
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 95vh; /* Adjust as needed */
  background-image: url('https://i.postimg.cc/J4KV8F7g/hoosenhijab3women.png');
  background-size: cover;
  background-position: center;
  width: 100%; /* Full width of the viewport */
  height: 100vh; /* Full height of the viewport */
  display: flex;
  justify-content: center;
  align-items: center;
}
h1{
  margin-bottom: 50px;
}
.container .title h1 {
  color: white;
  font-size: 4rem;
  font-family: 'Pacifico';font-size: 50px;
  text-align: center; /* Center text horizontally */
  /* -webkit-text-stroke: 1px rgb(51, 18, 18); Border outline */
}

.container button {
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  cursor: pointer;
  transition: box-shadow 0.5s ease;
}
.container button:hover {
  box-shadow: 0 0 10px white; /* Glow effect on hover */
}
.animate__animated {
    animation-duration: 1.5s;
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


@media (max-width: 390px) {
  .container .title h1 {
      font-size: 2.3rem;
      padding: 0.25rem;
    }
  }
</style>