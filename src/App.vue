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
  </header>


  <router-view />

</template>

<script>

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
