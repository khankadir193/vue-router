<template>
  <div class="link-container">
    <router-link to="/">Home</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/profile">profile</router-link>
  </div>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}

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

.link-container{
  display: flex;
  justify-content: space-around;
}
</style>
