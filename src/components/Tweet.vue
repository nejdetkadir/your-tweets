<template>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <slot name="username"></slot>
      <small><slot name="delete-button"></slot></small>
    </div>
    <slot name="text"></slot>
    <slot name="created_at"></slot>

  </a>
</template>

<script>
  export default {
    name: "Tweet"
  }
</script>

<style scoped>

</style>
