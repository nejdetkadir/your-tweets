<template>
  <div class="container mb-5">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from "@/components/shared/Header";
  export default {
    name: 'App',
    components: {
      Header,
    },
    created() {
      this.$store.dispatch("initToken");
    }
  }
</script>

<style>
</style>
