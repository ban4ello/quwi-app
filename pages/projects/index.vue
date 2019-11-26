<template>
  <div class="home-page">
    <div class="topbar">
      <div class="logo">Q</div>
      <div class="title">
        <a  href="/projects" class="projects">projects</a>
        <span class="logout" @click="logout">logout</span>
      </div>
    </div>
    <div class="project-card-container">
      <proj-card v-for="proj in projectsList" :proj="proj" :key="proj.id"  :class="{ 'isInActive': !proj.is_active }"></proj-card>
    </div>
  </div>
</template>
<script>
import { getListOfProject, logOutApi } from '~/store/api/index.js';
import projCard from '~/components/proj-card.vue';
import Avatar from 'vue-avatar';

export default {
  components: {
    Avatar,
    projCard,
  },
  middleware: 'auth',

  data () {
    return {
      projectsList: [],
    };
  },

  computed: {
    token () {
      return this.$store.state.token;
    }
  },

  methods: {
    logout () {
      this.$auth.logout()
        .then(() => this.$router.push({ name: 'login' }));
    },
  },

  created() {
    getListOfProject(this.$axios)
      .then((list) => {
        this.projectsList = list;
        this.$store.commit('updateState', { key: 'projectsList', value: list })
      });
  },

};
</script>
<style lang="scss">
  .home-page {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #f1f1f1;
    

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
  }

  .project-card-container {
    -webkit-box-align: center;
    align-items: center;
    margin: 10px auto;
    width: 600px;
    -ms-flex-align: center;
    position: relative;
  }

  .isActive {
    color: green;
  }

  .isInActive {
    color: grey;
    opacity: 0.8;
  }
</style>