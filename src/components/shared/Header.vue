<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" tag="a" class="navbar-brand"><img src="../../assets/logo.png" height="40"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" class="nav-item" active-class="active" to="/">
          <a class="nav-link">Feed</a>
        </router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/profile">
          <a class="nav-link">Profile</a>
        </router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/new">
          <a class="nav-link">New</a>
        </router-link>
      </ul>
      <form v-if="this.$store.getters.isAuthenticated" class="form-inline my-2 my-lg-0">
        <button @click.prevent="logout()" class="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
      </form>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      logout() {
        this.$store.dispatch("logout");
      }
    }
  }
</script>

<style scoped>

</style>
