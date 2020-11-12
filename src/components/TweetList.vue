<template>
  <div class="row mt-5">
    <div class="col-md-10 mx-auto">
      <div class="list-group">
        <Tweet v-for="i in 10" :key="i"></Tweet>
      </div>
    </div>
  </div>
</template>

<script>
  import Tweet from "@/components/Tweet";

  export default {
    name: "TweetList",
    components: {
      Tweet
    }
  }
</script>

<style scoped>

</style>
