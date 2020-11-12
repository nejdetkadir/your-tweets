<template>
  <div class="row mt-5">
    <div class="col-md-10 mx-auto">
      <h3 class="text-center">Feed</h3>
      <div class="alert alert-info" v-if="this.$store.getters.getAllTweets.length ===  0">
        There are not tweets here yet :(
      </div>
      <div v-show="this.$store.getters.getAllTweets.length > 0" class="list-group">
        <Tweet v-for="i in this.$store.getters.getAllTweets" :key="i.id" :class="{'active' : i.email === activeUserEmail}">
          <h6 slot="username" class="mb-1">
            {{ i.email }}
          </h6>
          <button v-if="activeUserEmail === i.email" slot="delete-button" @click.prevent="deleteTweet(i)" class="btn btn-sm btn-danger">
            delete
          </button>
          <p slot="text" class="mb-1">
            {{ i.content }}
          </p>
          <small slot="created_at" class="text-white">
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
    data() {
      return{
        activeUserEmail: this.$store.getters.getUserEmail
      }
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
