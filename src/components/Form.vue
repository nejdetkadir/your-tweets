<template>
  <div class="row mt-5">
    <div class="col-md-10 mx-auto">
      <div class="card shadow mb-5 bg-white rounded" style="width: 100%;">
        <div class="card-body">
          <form @submit.prevent="onSaveTweet()">
            <div class="form-group">
              <textarea v-model="text" id="tweet-area" class="form-control" rows="4" placeholder="What's happening?"></textarea>
            </div>
            <button class="btn btn-sm btn-info float-right">Tweet</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Form",
    data() {
      return{
        text: null
      }
    },
    methods: {
      onSaveTweet() {
        this.$store.dispatch("saveTweet", {
          text: this.text
        });
        this.text = null
      }
    }
  }
</script>

<style scoped>
  #tweet-area{
    border: none !important;
    resize: none !important;
  }
  #tweet-area:focus{
    box-shadow: none !important;
  }
</style>
