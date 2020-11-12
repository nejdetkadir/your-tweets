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
      console.log(this.$store.getters.getTitle);
    }
  }
</script>

<style>
</style>
