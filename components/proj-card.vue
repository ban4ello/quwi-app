<template>
  <div>
    <div class="project-card" @click="projPage">
      <avatar :src="proj.logo_url" :size="40" :username="proj.name" class="proj-card-logo"></avatar>
      <span class="proj-name">{{proj.name}}</span>
      <div class="proj-status">
        <span v-if="proj.is_active" class="isActive">Active</span>
        <span v-else>Inactive</span>
      </div>
      <div class="proj-time">
        <div class="proj-time-item">
          <div>time this week</div>
          <div class="numbers">{{timeToHMS(proj.spent_time_week)}}</div>
        </div>
        <div class="proj-time-item">
          <div>this month</div>
          <div class="numbers">{{timeToHMS(proj.spent_time_month)}}</div>
        </div>
        <div class="proj-time-item">
          <div>total</div>
          <div class="numbers">{{timeToHMS(proj.spent_time_all)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from 'vue-avatar';
import editProjCard from '../components/edit-proj-card.vue';

export default {
  components: {
    Avatar,
    editProjCard,
  },

  props: {
    proj: Object,
    index: Number,
  },

  methods: {
    projPage () {
      this.$router.push({ name: 'projects-id', params: { id: this.proj.id } });
    },

    addSumbol (num) {
      if (num.toString().length > 1) {
        return num.toString();
      } else {
        return 0 + num.toString();
      }
    },

    timeToHMS (time) {
      let hours = Math.floor((time % 3600) === time ? 0 : (time / 3600));
      let minutes = Math.floor(hours === 0 ? (time / 60) : (time % 3600) / 60);
      let seconds = (time % 3600) % 60;

      return `${this.addSumbol(hours)}:${this.addSumbol(minutes)}:${this.addSumbol(seconds)}`;
    }
  },
};
</script>

<style scoped lang="scss">
  .project-card {
    display: grid;
    grid-template-columns: 40px 1fr 1fr 1fr;
    text-align: center;
    align-items: center;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #dedede;
    padding: 18px 20px 20px 25px;
    cursor: pointer;
    font-size: .9em;
    height: 90px;
    margin-bottom: 10px;

    &:hover {
      background: #ececec;
    }
  }


  .drag-block {
    position: absolute;
    left: -40px;
    -ms-flex-line-pack: center;
    align-content: center;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    height: 90px;
    width: 40px;
  }

  .card-icon {
    color: #b4b4b4;
    cursor: move;

    &:before {
      content: "\E82F";
    }
  }

  .proj-card-logo {
    margin-right: 10px;
  }

  .proj-name {
    font-weight: bold;
  }

  .proj-time {
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
    white-space: nowrap;
    margin-top: 2px;
    margin-left: 32px;
    min-width: 162px;
    max-width: 162px;

    .proj-time-item {
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  }

  .numbers {
    text-align: right;
    font-weight: 700;
  }

  .isActive {
    color: green;
  }
</style>