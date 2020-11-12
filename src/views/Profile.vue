<template>
  <div class="row mt-5">
    <div class="col-md-10 mx-auto">
      <h3 class="text-center">Profile</h3>
      <div class="list-group">
        <Tweet v-for="i in 3" :key="i"></Tweet>
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
