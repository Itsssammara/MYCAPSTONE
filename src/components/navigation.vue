<template>
  <div>
    <div class="sidebar" :style="{ width: sidebarWidth + 'px', zIndex: 100 }">
      <button class="close-btn" @click="closeNav">&times;</button><br><br>
      <router-link to="/" class="sidebar-link">Home</router-link>
      <router-link to="/about" class="sidebar-link">About</router-link>
      <router-link to="/products" class="sidebar-link">Products</router-link>
      <router-link to="/checkout" class="sidebar-link">Checkout</router-link>
      <router-link to="/admin" class="sidebar-link">Admin</router-link>
      <router-link to="/login" class="sidebar-link" v-if="!loggedInUser">Login</router-link>
      <router-link to="/signup" class="sidebar-link" v-if="!loggedInUser">Sign Up</router-link>
      <router-link to="/contact" class="sidebar-link">Contact</router-link>
    
    </div>
    <div class="content" :style="{ marginLeft: contentMargin + 'px' }">
      <div class="navbar fixed-navbar" style="z-index: 50;">
        <div class="logo-container">
            <button class="open-btn" @click="openNav">&#9776;</button>
            <img src="https://i.postimg.cc/kGLpVP38/thelogo.png" alt="Logo" class="logo-img">
        </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isOpen: false, // Initially sidebar is closed
      sidebarWidth: 0,
      contentMargin: 0
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.openNav();
      } else {
        this.closeNav();
      }
    },
    openNav() {
      this.sidebarWidth = 250; 
      this.contentMargin = 20; 
    },
    closeNav() {
      this.sidebarWidth = 0;
      this.contentMargin = 0;
    }
  },
  computed:{
    loggedInUser() {
      // Fetch user data from cookies
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const userCookie = cookies.find(cookie => cookie.startsWith('LegitUser='));
      
      // If user cookie exists, parse and return user data
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie.split('=')[1]);
          if (userData && userData.result) {
            return userData.result; // Return user data with firstName and lastName
          } else {
            console.error('Invalid user data format:', userData);
            return null;
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
          return null;
        }
      } else {
        return null; // Return null if user cookie doesn't exist
      }
    },
    isAdmin(){
      return this.loggedInUser && this.loggedInUser.userRole === 'admin'
    }
  }
};
</script>

  <style>
.fixed-navbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000; 
}

.content {
  padding-top: 60px; 
}
  .navbar {
  display: flex;
  justify-content: flex-start; 
  align-items: center; 
  }
.open-btn{
    color: #000000;
    /* margin-left: 100hw; */
}

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  .sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #5a1e1e;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
  .sidebar a {
    padding: 10px 15px;
    text-decoration: none;
    font-size: 25px;
    color: #A04848;
    display: block;
    transition: 0.3s;
  }
  .sidebar a:hover {
    color: #f9dfdf;
  }
  .sidebar .close-btn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  .content {
    transition: margin-left 0.5s;
    padding: 5px;
  }
  .open-btn {
    font-size: 20px;
    cursor: pointer;
    border: none;
    background: none;
  }
  .open-btn:hover {
    color: #000000;
  }
  .sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #E4B8B8;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
  .sidebar .close-btn {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 36px;
    margin-left: 50px;
    color: rgb(255, 255, 255);
    background: none;
    border: none;
    cursor: pointer;
  }
  .sidebar .close-btn:hover {
    color: #ccc;
  }
  .navbar {
    background-color: #ffffff; 
    padding: 0.5rem 0.1rem; 
  }
  .navbar-brand {
    margin-right: auto; 
  }
  .nav-link {
    color: #D4D4D4; 
    text-decoration: none;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border-radius: 0.25rem; 
    transition: background-color 0.3s; 
  }
  .nav-link:hover {
    background-color: transparent; 
  }
  .router-link-exact-active {
    background-color: #EAEFF8; 
  }
  .router-link-exact-active:hover {
    background-color: #FFFFFF;
  }
  .router-link-exact-active .nav-link {
    color: #c3b6b6; 
  }
  .logo-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: auto; 
  width: 100%; 
  margin-top: 10px; 
}

.logo-img {
  height: 40px;
  width: auto; 
  margin-right: 90px;
  margin-left: 30px; 
}

  
  @media (max-width: 991.98px) {
    .navbar {
      padding: 0.2rem 0.1rem; /* Reduce padding for smaller screens */
    }
    .nav-link {
      padding: 0.2rem 0.1rem; /* Reduce padding for the links */
    }
    .logo-img {
      margin-top: 2px;
      height: 30px;
      width: 170px;
    }
  }
  /* Very small devices (<= 390px) */
  @media (max-width: 390px) {
    .nav-link {
      font-size: 0.8rem;
      padding: 0.25rem;
    }
  }
  /* media query for medium and small devices (<992px) */
@media (max-width: 991.98px) {
  .content {
    padding-top: 50px; 
  }
}
  .sidebar {
  height: 100%;
  width: 250px; 
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e9afaf; 
  overflow-x: hidden;
  padding-top: 20px;
}

.sidebar-link {
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  color: #bcb1b1; 
}

.sidebar-link:hover {
  background-color: #ffd1d1;
}
/* .logo-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: auto; 
  width: 100%;
  margin-top: 10px; 
} */

.open-btn {
  position: fixed;
  top: 0;
  left: 10px;
  z-index: 1001; 
  font-size: 25px;
  cursor: pointer;
  border: none;
  background: none;
}

/* Adjust navbar for medium and small devices (<992px) */
@media (max-width: 991.98px) {
  .logo-img {
    margin-top: 2px;
    height: 30px;
    width: 170px;
  }
}

  </style>