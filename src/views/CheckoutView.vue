<template>
    <div>
      <div class="container mt-5">
        <main class="main2">
          <table class="main2">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in products" :key="index">
                <td>{{ index + 1 }}</td>
                <td><img :src="item.prodURL" alt="item.prodName" style="max-width: 50px;"></td>
                <td>{{ item.prodName }}</td>
                <td>R{{ item.amount }}</td>
                <td>
                  <input type="number" class="quantity-input" placeholder="Qty" min="1" v-model.number="item.quantity">
                </td>
                <td>
                  <button @click="addToCart(item, item.quantity)">Add to Cart</button>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
        <div id="totalAmount">Total Amount: R{{ totalAmount }}</div><br>
        <div>
          <button id="payButton" @click="handlePayment">Buy Now</button>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  
  export default {
    name: "CheckoutView",
  }
  </script>
  
  <style scoped>
  .main2 {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  main.main2, .main2 th, .main2 td {
    background-color: #f9f9f9;
    color: #ffffff;
  }
  
  .main2 th, .main2 td {
    border: 1px solid #eaeaea;
    padding: 12px;
    text-align: left;
  }
  
  .main2 th {
    background-color: #c76c6c;
    color: #fff;
    font-size: 1.05em;
  }
  
  .main2 tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  /* Hover effect for rows */
  .main2 tr:hover {
    background-color: #ddd;
  }
  
  #payButton {
    background-color: #fff;
    border: 2px solid #000;
    transition: all 0.3s;
    border-radius: 0%;
    width: 300px;
    display: block;;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
    margin: 20px auto; 
    transition: background-color 0.2s, transform 0.2s;
  }
  
  #payButton:hover {
    background-color: #000; 
    color: #fff;
    transform: scale(1.05);
  }
  
  .quantity-input {
    width: 80px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    text-align: center;
  }
  
  #totalAmount {
    background: #c76c6c;
    color: #fff;
    text-align: center;
    font-weight: bold;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }
  
  @media only screen and (max-width: 600px) {
    .main2 th, .main2 td {
      padding: 10px;
    }
    #payButton {
      width: 100%; 
    }
  }
  </style>