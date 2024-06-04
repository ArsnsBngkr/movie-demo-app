<template>
  <header class="top-bar">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <span>Home Page</span>
      </router-link>
      <router-link to="/login-user" class="top-bar-link">
        <span>Login</span>
      </router-link>
      <router-link to="/favourite-movies" class="top-bar-link">
        <span>Favourite Movies</span>
      </router-link>

    </nav>
    <div @click="toggleModal" class="modal-toggle" role="button">
        <span >Selected Movies Modal:</span>
      </div>
  </header>
  <CartModal modalTitle="My Favourite Movies"  :toggle="toggleModal" v-if="showModal"/>
  
  <router-view />


  <footer>
    website simple footer
  </footer>

</template>

<script>

import CartModal from "./components/cart-modal.vue";
export default {
  components: { CartModal },
  data () {
    return {
      showModal: false,
    }
  },
  methods:{
    toggleModal () {
      this.showModal= !this.showModal;
    },

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


header{
  display: flex;
  flex-direction: column;
  align-items: start;
}

footer{
  height: 80px;
  background-color :blue;
  color: azure;
  font-size: 20px;
  min-height: 50px;
  margin-top: auto;
}

.modal-toggle{
  border :1px solid black;
  display: inline;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 8px;
  text-decoration:underline;
  cursor:pointer;
}



</style>
