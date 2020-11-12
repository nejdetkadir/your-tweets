<template>
  <div class="row mt-5">
    <div class="col-md-10 mx-auto">
      <h3 class="text-center">Feed</h3>
      <div class="list-group">
        <Tweet v-for="i in this.$store.getters.getAllTweets" :key="i.id"></Tweet>
      </div>
    </div>
  </div>
</template>

<script>
  import Tweet from "@/components/Tweet";

  export default {
    name: "Feed",
    components: {
      Tweet
    }
  }
</script>

<style scoped>

</style>
