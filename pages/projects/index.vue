<template>
  <div class="home-page">
    <div class="topbar">
      <button @click="logout">logout</button>
    </div>
    <div class="project-card-container">
      <proj-card v-for="proj in projectsList" :proj="proj" :key="proj.id"  :class="{ 'isInActive': !proj.is_active }"></proj-card>
    </div>
  </div>
</template>
<script>
import { getListOfProject, logOutApi } from '~/store/api/index.js';
import projCard from '~/components/proj-card.vue';
import Avatar from 'vue-avatar'

export default {
  components: {
    Avatar,
    projCard,
  },

  data () {
    return {
      projectsList: [],
    };
  },

  computed: {
    token () {
      return this.$store.token;
    }
  },

  methods: {
    logout () {
      logOutApi({ token: this.token });
      this.$router.push({ name: 'login' });
    },
  },
  
  mounted() {
    getListOfProject(this.token)
      .then((list) => {
        this.projectsList = list;
        console.log(list);
        this.$store.projectsList = list;
      });
  },

};
</script>
<style lang="scss">
  .home-page {
    margin: 15px auto 50px;
    width: 600px;
    position: relative;

    .topbar {
      min-height: 50px;
      width: 100%;
      background-color: #c1c8d2;
      padding: 10px;

      button {
        border-radius: 5px;
        height: 36px;
        background-color: #eee;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  .project-card-container {
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 6px;
    width: 100%;
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