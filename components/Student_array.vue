<template>
  <div>
  <div class="col" v-for="stud in this.sts" :key="stud.index" style="width:600px">
    <div class="card">
      <div class="card-body">
        <h5>{{stud[2]}}</h5>
        <h3>{{stud[3]}}</h3>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import students from '../mocks/students'

export default {
  name: 'Student_array',
  created () {
    this.sts = students
  }
}
</script>

<style scoped>
.card-body{
  font-size: smaller;
}
</style>
