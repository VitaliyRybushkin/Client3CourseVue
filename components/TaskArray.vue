<template>
  <div>
  <h5>Это я</h5>
    <div class="col" v-for="task in tasks" :key="task.index" style="width:600px">
      <div class="card">
        <div class="card-body">
          {{task.info}}
          <input id=task.index class="input-group" />
          <div v-if="task.answer===answ">
            <p>Правильно</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TaskArray',
  mounted () {
  },
  methods: {
    async check () {

    }
  },
  data () {
    return {
      tasks: [{
        info: 'Укажите все цифры, на месте которых пишется НН.\n' +
          '\n' +
          'Цифры укажите в порядке возрастания.\n' +
          '\n' +
          ' \n' +
          '\n' +
          '\n' +
          'За око(1)ым стеклом жила своей утре(2)ей жизнью обыкнове(3)ая городская асфальтирова(4)ая улица, по которой мчались переполне(5)ые маршрутные такси и гружё(6)ые самосвалы.',
        answer: '10'
      },
      {
        info: 'В одном из выделенных ниже слов допущена ошибка в образовании формы слова. Исправьте ошибку и запишите слово правильно.' +
        '\n' +
        'в ДВЕ тысячи пятнадцатом году' +
          '\n' +
          'ПРИОБРЕТШИЙ опыт' +
          '\n' +
          'множество ПЛАТЬЕВ' +
          '\n' +
          'офицерских ПОГОН' +
          '\n' +
          'СТЕРЕГЁТ дом'
      }]
    }
  }

}
</script>

<style scoped>
.card-body{
  margin-bottom: 23px;
  margin-top: 23px;
  text-align: left;
}
</style>
