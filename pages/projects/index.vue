<template>
  <div class="home-page">
    <topbar></topbar>
    <div class="project-card-container">
      <proj-card v-for="proj in projectsList" :proj="proj" :key="proj.id"  :class="{ 'isInActive': !proj.is_active }"></proj-card>
    </div>
  </div>
</template>
<script>
import { getListOfProject, logOutApi } from '~/store/api/index.js';
import projCard from '~/components/proj-card.vue';
import topbar from '~/components/topbar.vue';
import Avatar from 'vue-avatar';

export default {
  components: {
    Avatar,
    projCard,
    topbar,
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