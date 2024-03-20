<template>
  <div class="spinner-container" :class="{ 'hidden': loaded }">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'spinner',
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    // Once the component is mounted, set loaded to true after a certain delay
    setTimeout(() => {
      this.loaded = true;
    }, 2000); // Adjust the delay as needed, here it's set to 2000 milliseconds (2 seconds)
  }
};
</script>

<style>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Ensures the spinner container takes the full height of its parent */
}

.spinner-border {
  width: 3rem;
  height: 3rem;
  border-width: 0.25em;
  border-color: #007bff transparent #007bff transparent;
  animation: spin 1s linear infinite; /* Adjust animation speed as needed */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Add a class to hide the spinner */
.hidden {
  display: none;
}
</style>
