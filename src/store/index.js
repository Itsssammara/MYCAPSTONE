import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
import router from "@/router";
import AuthenticateUser from "../service/AuthenticateUser.js";

const { cookies } = useCookies();

const baseURL = "https://mycapstone-1.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: [],
    product: null,
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, data) {
      state.products = data;
    },
    setProduct(state, value) {
      state.product = value;
    },
    addProductToCart(state, product) {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1, // Initial quantity is 1
      });
    },
    incrementCartItemQuantity(state, index) {
      // Increase the quantity of the product in the cart
      state.cart[index].quantity++;
    },
  },
  
  actions: {
    async register(context, payload) {
      try {
        let { message,token } = await axios.post(`${baseURL}users/register`, payload).data;
        console.log(message);
        context.dispatch("fetchUsers");
        sweet({
          title: "Registration",
          text: message,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${baseURL}users`)).data;
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving users.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, packet) {
      try {
        let { result } = (await axios.get(`${baseURL}users/${packet.id}`)).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateUser(context, {id, packet}) {
      try {
        let { msg } = await axios.patch(`${baseURL}users/update/${id}`,packet);
        if (msg) {
          context.dispatch("setUsers");
          sweet({
            title: "Update user",
            text: msg,
            icon: "success",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when updating a user.",
          icon: "success",
          timer: 2000,
        });
      }
    },
    async deleteUser({ commit, dispatch }, packet) {
      try {
        await axios.delete(`${baseURL}users/delete/${packet.id}`);
        commit("setUsers");
        dispatch("fetchUsers");
        sweet({
          title: "Delete user",
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a user.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async login(context, payload) {
      try {
        const response = await axios.post('https://mycapstone-1.onrender.com/users/login', payload);
        const { msg, token, result } = response.data;

        if (token) {
          context.commit('setUser', result);
          applyToken(token);

          document.cookie = `LegitUser=${JSON.stringify({ msg, token, result })}; path=/`;

          sweet({
            title: msg,
            text: `Welcome back, ${result.firstName} ${result.lastName}`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          });

          router.push({ name: 'home' });
          setTimeout(() => {
            window.location.reload();
          }, 1750);
        } else {
          sweet({
            title: 'Info',
            text: msg,
            icon: 'info',
            timer: 2000,
          });
        }
      } catch (error) {
        console.error('Error during login:', error);
        sweet({
          title: 'Error',
          text: 'Failed to login. Please try again later.',
          icon: 'error',
          timer: 2000,
        });
      }
    },
    
    async deleteProduct({ commit, dispatch }, packet) {
      try {
        await axios.delete(`${baseURL}products/delete/${packet.id}`);
        commit("setProducts");
        dispatch("getProducts");
        sweet({
          title: "Product Deleted ",
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a product.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async addProduct(context, packet) {
      try {
        let { message } = await axios.post(`${baseURL}products/addProduct`, packet);
        console.log(message);
        context.dispatch("fetchProducts");
        sweet({
          title: "Registration",
          text: message,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProducts(context) {
      try {
        let { results } = (await axios.get(`${baseURL}products`)).data;
        console.log(results);
        if (results) {
          context.commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving products.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProduct(context, packet) {
      try {
        let { result } = (await axios.get(`${baseURL}products/${packet?.id}`))
          .data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          sweet({
            title: "Retrieving a single product",
            text: "Product was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A product was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateProduct(context, {id, packet}) {
      try {
        let { message } = await axios.patch(`${baseURL}products/update/${id}`, packet);
        console.log(message);
        context.dispatch("setProduct");
        sweet({
          title: "Update Successfully",
          text: message,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
      async addToCart({ commit, state }, product) {
        try {
          // Check if the product already exists in the cart
          const existingProductIndex = state.cart.findIndex(item => item.id === product.id);
    
          if (existingProductIndex !== -1) {
            // If the product exists, increase its quantity
            commit('incrementCartItemQuantity', existingProductIndex);
          } else {
            // If the product does not exist, add it to the cart
            commit('addProductToCart', product);
          }
    
          // Show an alert to notify the user
          sweet({
            title: 'Cart',
            text: 'Item added to cart successfully',
            icon: 'success',
            timer: 2000,
          });
        } catch (error) {
          // If an error occurs, show an error message
          sweet({
            title: 'Error',
            text: 'Failed to add item to cart. Please try again later.',
            icon: 'error',
            timer: 2000,
          });
          console.error('Error adding item to cart:', error);
        }
      },
    },
  modules: {},
  });
