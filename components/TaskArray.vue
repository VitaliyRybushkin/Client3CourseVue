<template>
  <div>
    <div class="col" v-for="task in this.sts" :key="task[2]" style="width:600px">
      <div class="card">
        <div class="card-body">
          <h2 style="font-size: smaller">Задание {{task[2]+1}}</h2>
          {{task[0]}}
          <input :id=task[2] class="input-group" hint="Ваш ответ"/>
        </div>
      </div>
    </div>
    <h5></h5>
    <button class="btn btn-primary btn-lg btn-block" type="submit" @click="check">Завершить</button>
  </div>
</template>

<script>
import tasks from '../mocks/tasks'

export default {
  created () {
    this.sts = tasks
  },
  name: 'TaskArray',
  mounted () {
  },
  methods: {
    async check () {
      var k = 0
      var tmap = []
      for (let i = 0; i < this.sts.length; i++) {
        let task = this.sts[i]
        let ans = task[1]
        let el = document.getElementById(i).value
        el = el.toLowerCase().trim()
        document.getElementById(i).value = el
        if (ans === el) {
          k++
        } else {
          tmap.push(task[2] + 1)
        }
      }
      console.log(tmap)
      console.log('TMAP!!!!!!!!!!!!!!!!!!!!!!')
      if (k === this.sts.length) {
        alert('Молодец всё правильно')
        this.$router.push({name: 'login'})
      } else {
        alert('Есть ошибки в следующих номерах: ' + (tmap))
      }
    }
  },
  data: function () {
    return {stat: 'Неверно'}
  }
}
</script>

<style scoped>
.card-body{
  margin-bottom: 23px;
  margin-top: 23px;
  text-align: left;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.card{
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}
</style>
