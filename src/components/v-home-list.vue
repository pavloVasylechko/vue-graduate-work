<template>
  <div class="v-home-list">
    <v-home-list-element
    v-for="task in tasks"
    :key="task.id"
    :oneTask ='task'
    />
  </div>
</template>

<script>
import vHomeListElement from './v-home-list-element.vue'
export default {
  name:'v-home-list',
  data:()=>({
    tasks:[],
  }),
  components:{
    vHomeListElement,
  },
  async mounted(){
    this.tasks = await this.$store.dispatch('fetchTasks')
    console.log(this.tasks)
  },
}
</script>

<style scoped>
.v-home-list{
  width: 600px;
  margin: 0 auto;
  position: relative;
  height: calc(100% - 141px);
}

</style>
