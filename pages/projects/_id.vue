<template>
  <div class="edit-proj-page">
    <div class="topbar">
      <button @click="back">BACK</button>
    </div>
    <edit-proj-card :proj="project" class="edit-block"></edit-proj-card>
  </div>
</template>
<script>
import editProjCard from '~/components/edit-proj-card.vue';

export default {
  middleware: 'auth',

  components: {
    editProjCard,
  },

  computed: {
    project () {
      return this.$store.state.projectsList.find((el) => {
        return el.id === this.$route.params.id;
      });
    },
  },

  methods: {
    back () {
      this.$router.go(-1)
    },
  },
};
</script>
<style scoped lang="scss">
  .edit-proj-page {
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
</style>