<template>
  <header class="top-bar">
    <nav class="top-bar-nav">
      <ul class="menu">
        <li>
          <router-link to="/" class="top-bar-link">
            <span>Home Page</span>
          </router-link>
        </li>
        <li>
          <router-link to="/login-user" class="top-bar-link">
            <span>Login</span>
          </router-link>
        </li>
        <li>
          <router-link to="/favourite-movies" class="top-bar-link">
            <span>Favourite Movies</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div @click="toggleModal" class="modal-toggle" role="button">
      <span>Selected Movies Modal:{{ this.moviesListData.length }}</span>
    </div>
  </header>
  <CartModal modalTitle="My Favourite Movies" :toggle="toggleModal" v-if="showModal">
    <SelectedMoviesInfo :moviesListData="moviesListData" :removeMovie="removeFromCart" />
  </CartModal>
  <router-view :addToCart="addToCart" :moviesListData="moviesListData" :removeFromCart="removeFromCart" />
  <footer>
    website simple footer
  </footer>
</template>

<script>

import CartModal from "./components/cart-modal.vue";
import SelectedMoviesInfo from "./components/selected-movies-info.vue";

export default {
  components: { CartModal, SelectedMoviesInfo },
  data() {
    return {
      showModal: false,
      moviesListData: [],
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    addToCart(movieId, movieTitle, movieYear) {
      const doesAlreadyExist = this.moviesListData.find((item) => item.id === movieId);
      if (!doesAlreadyExist) {
        this.moviesListData = [...this.moviesListData, { id: movieId, title: movieTitle, year: movieYear }]
      }
      console.log(this.moviesListData)
    },
    removeFromCart(movieId) {
      this.moviesListData = this.moviesListData.filter(item => {
        return item.id !== movieId
      }
      );
      console.log(this.moviesListData)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
}


header {
  display: flex;
  flex-direction: column;
  align-items: start;
}


.top-bar-nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.top-bar-nav li {
  float: left;
}

.top-bar-nav li a {
  display: block;
  font-size: 18px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.top-bar-nav li a:hover {
  background-color: #111;
}

footer {
  height: 80px;
  background-color: blue;
  color: azure;
  font-size: 20px;
  min-height: 50px;
  margin-top: auto;
}

.modal-toggle {
  display: inline;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 8px;
  text-decoration: underline;
  cursor: pointer;
}
</style>