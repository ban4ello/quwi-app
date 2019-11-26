<template>
  <div class="topbar">
    <div class="logo">Q</div>
    <div class="title">
      <nuxt-link to="/projects" class="projects">projects</nuxt-link>
      <span class="logout" @click="logout">logout</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
     logout () {
      this.$auth.logout()
        .then(() => this.$router.push({ name: 'login' }));
    },
  },
  
};
</script>

<style scoped lang="scss">
  .topbar {
    display: grid;
    grid-template-columns: 40px 1fr;
    justify-items: end;
    align-items: center;
    background-color: #f9f9f9;
    min-height: 50px;
    width: 100%;
    padding: 10px;

    .logo {
      font-weight: bold;
      font-size: 30px;
    }

    .title {
      .logout, .projects {
        text-transform: uppercase;
        cursor: pointer;
        font-size: 14px;
        padding-right: 10px;
        text-decoration: none;
        color: inherit;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
</style>