<template>
  <div class="edit-proj-page">
    <topbar></topbar>
    <edit-proj-card :proj="project" class="edit-block"></edit-proj-card>
  </div>
</template>
<script>
import editProjCard from '~/components/edit-proj-card.vue';
import topbar from '~/components/topbar.vue';

export default {
  middleware: 'auth',

  components: {
    editProjCard,
    topbar,
  },

  computed: {
    project () {
      return this.$store.state.projectsList.find((el) => {
        return el.id === this.$route.params.id;
      });
    },
  },
};
</script>