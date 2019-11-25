<template lang="html">
  <div class="app-login">
    <div class="login-form">
      <div class="margin-b login-title">LOGIN</div>
      <input v-model="email" type="text" placeholder="Email" class="margin-b">
      <input v-model="password" type="text" placeholder="Password" class="margin-b">
      <button @click="send" class="margin-b">Login</button>
      <p v-if="showErrorMess" style="color: red;">Invalid authorization</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      showErrorMess: false,
    };
  },

  methods: {
    send () {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password,
        }
      })
      .then(() => {
        this.showErrorMess = false;
        this.$router.push({ name: 'projects' })
      })
      .catch((err) => {
        this.showErrorMess = true;
        console.warn('Invalid authorization', err);
      });
    }
  },
};
</script>
<style scoped lang="scss">
.app-login {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 300px;
  height: 220px;
  background-color: #f1f1f1;
  padding: 30px;
  text-align: left;
  margin: 0 auto;

  .login-title {
    font-weight: bold;
  }

  input {
    display: block;
    width: 100%;
    font-size: 16px;
    padding: 5px;
  }

  button {
    border-radius: 5px;
    width: 80px;
    height: 30px;
    background-color: #2c4064;
    color: #fff;
  }

  .margin-b {
    margin-bottom: 10px;
  } 
}
</style>
