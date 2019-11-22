<template>
  <div class="edit-project-card">
    <div class="content">
      <div class="checkbox">
        <span>Active</span>
        <label class="switch"><input type="checkbox" /><div></div></label>
      </div>
      <div class="name">
        <div class="name-title">Name</div>
        <input v-model="projName" type="text" placeholder="Please input" class="margin-b">
        <div class="btn">
          <button @click="updateProj" class="margin-b">Ok</button>
        </div>
      </div>
      <div class="bottom-text checkbox">
        <label class="switch margin-r"><input type="checkbox" /><div></div></label>
        <p>Add me as watcher to tickets created by others</p>
      </div>
    </div>

    <div class="edit-proj-card-avatar">
      <avatar :src="proj.logo_url" :size="80" :username="proj.name"></avatar>
    </div>
  </div>
</template>
<script>
import Avatar from 'vue-avatar'
import { editProject } from '../store/api/index.js';

export default {
  components: {
    Avatar,
  },

  props: {
    proj: Object,
  },

  data() {
    return {
      projName: '',
    }
  },

  computed: {
    token () {
      return this.$store.token;
    },
  },

  methods: {
    updateProj () {
      editProject({
        token: this.token,
        id: this.proj.id,
        newName: this.projName,
      });
    }
  },

  created() {
    this.projName = this.proj.name;
  },
};
</script>

<style scoped lang="scss">
  .edit-project-card {
    display: grid;
    grid-template-columns: 1fr 100px;
    border: 1px solid #dedede;
    padding: 20px;
    width: 600px;
    height: 220px;
    margin: 20px auto;

    .content {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      align-items: center;

      .bottom-text {
        display: flex;
        align-items: center;

        .margin-r {
          margin-right: 10px;
        }
      }

      .checkbox {
        height: 40px;

        .switch {
          display: inline-block;
          font-size: 20px;
          height: 1em;
          width: 2em;
          background: #0b8f14;
          border-radius: 1em;

          div {
            height: 1em;
            width: 1em;
            border-radius: 1em;
            background: #FFF;
            box-shadow: 0 0.1em 0.3em rgba(0,0,0,0.3);
            -webkit-transition: all 300ms;
            -moz-transition: all 300ms;
            transition: all 300ms;
          }

          input {
            position: absolute;
            opacity: 0;
          }
        }

        .switch input:checked + div {
          -webkit-transform: translate3d(100%, 0, 0);
          -moz-transform: translate3d(100%, 0, 0);
          transform: translate3d(100%, 0, 0);
        }
      }

      .name {
        display: grid;
        grid-template-columns: 100px 1fr 100px;
        align-content: center;

        .name-title {
          display: grid;
          align-content: center;
        }

        input {
          display: block;
          width: 100%;
          height: 36px;
          font-size: 14px;
          align-items: center;
          padding: 10px;
        }

        .btn {
          display: grid;
          align-content: center;
          margin-left: 5px;

          button {
            border-radius: 5px;
            width: 40px;
            height: 36px;
            background-color: #2c4064;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>