<template>
  <div class="row mt-5">
    <div class="col-md-6 mx-auto">
      <div class="card shadow mb-5 bg-white rounded" style="width: 100%;">
        <div class="card-body">
          <form @submit.prevent="onsubmit()">
            <div class="text-center mb-2">
              <img src="../assets/logo.png" height="45">
            </div>
            <h4 class="text-center">{{ isRegistered === true ? 'LOGIN' : 'REGISTER' }} FORM</h4>
            <div class="form-group">
              <label for="email">Email address</label>
              <input v-model="user.email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="pass">Password</label>
              <input v-model="user.password" type="password" class="form-control" id="pass">
            </div>
            <div class="form-group">
              <button class="btn btn-default" @click.prevent="isRegistered = !isRegistered">{{ isRegistered === true ? 'I don\'t have an account yet?' : 'I have an account.' }}</button>
            </div>
            <button type="submit" :class="{'btn-primary' : isRegistered, 'btn-success' : !isRegistered}" class="btn">{{ isRegistered === true ? 'LOGIN' : 'REGISTER' }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return{
      isRegistered: true,
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    onsubmit() {
      this.$store.dispatch("auth", {
        ...this.user,
        isRegistered: this.isRegistered
      }).then(() => {
        this.$router.push("/");
      });
    }
  }
}
</script>

<style scoped>

</style>
