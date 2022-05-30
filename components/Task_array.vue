<template>
  <div>
    <scroll-view class="col" v-for="task in this.sts" :key="task[2]" style="width:600px">
      <div class="card">
        <div class="card-body">
          <h5>Вопрос</h5>
          <textarea id="id1" :value = task[0] rows="10" cols="50"></textarea>
          <h5>Ответ</h5>
          <textarea id="id2" :value = task[1] rows="2" cols="50"></textarea>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>

import tasks from '../mocks/tasks'

export default {
  name: 'Task_array',
  created () {
    this.sts = tasks
  }
}
</script>

<style scoped>
.card-body{
  font-size: smaller;
}
</style>
