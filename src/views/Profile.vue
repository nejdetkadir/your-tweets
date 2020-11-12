<template>
  <div class="row mt-5">
    <div class="col-md-10 mx-auto">
      <h3 class="text-center">Profile</h3>
      <div class="list-group">
        <Tweet v-for="i in this.$store.getters.getMyTweets" :key="i.id">
          <h6 slot="username" class="mb-1">
            {{ i.email }}
          </h6>
          <button @click.prevent="deleteTweet(i)" slot="delete-button" class="btn btn-sm btn-danger">
            delete
          </button>
          <p slot="text" class="mb-1">
            {{ i.content }}
          </p>
          <small slot="created_at" class="text-muted">
            {{ Date.now() }}
          </small>
        </Tweet>
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
    },
    methods: {
      deleteTweet(tweet) {
        this.$store.dispatch("deleteTweet", {
          ...tweet
        })
      }
    }
  }
</script>

<style scoped>

</style>
