<template>
  <div class="container mb-5">
    <Header></Header>
    <Form></Form>
    <TweetList></TweetList>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Form from "@/components/Form";
  import TweetList from "@/components/TweetList";

  export default {
    name: 'App',
    components: {
      Header,
      Form,
      TweetList
    }
  }
</script>

<style>

</style>
