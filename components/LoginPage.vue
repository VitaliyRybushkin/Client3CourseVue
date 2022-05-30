<template>
  <section class="min-vh-100" style="background-color: #508bfc;">
    <div class="container py-5 h-100" >
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 2rem;">
            <div class="card-body p-5 text-center" >

              <h3 class="mb-5">Выучи русский язык</h3>
              <h3 class="mb-5">Войти в систему</h3>
              <div class="form-outline mb-4">
                <p></p>
                <p style="font-size:x-large">Логин</p>
                <p></p>
                <input type="email" id="login" class="form-control form-control-lg" />

              </div>

              <div class="form-outline mb-4">
                <p></p>
                <p style="font-size: x-large">Пароль</p>
                <p></p>
                <input type="password" id="pass" class="form-control form-control-lg" />

              </div>

              <button class="btn btn-primary btn-lg btn-block" @click="gen()" type="submit">Войти</button>

              <hr class="my-4">

              <button class="btn btn-primary btn-lg btn-block" @click="reg" type="register">Зарегестрироваться</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import students from '../mocks/students'

export default {
  created () {
    this.sts = students
  },
  data () {
    return {}
  },
  methods: {
    async gen () {
      var studlog = document.getElementById('login').value
      var studpass = document.getElementById('pass').value
      if (studlog === 'admin' & studpass === 'teach123') {
        await this.$router.push({name: 'teacher'})
      } else {
        console.log(studlog + ' ' + studpass)
        console.log(this.sts)
        var k = 0
        var xe = 0
        for (let i = 0; i < this.sts.length; i++) {
          let student = this.sts[i]
          console.log(student[0] + ' ' + student[1])
          if (student[0] === studlog) {
            if (student[1] === studpass) {
              k = 1
              xe = i
            }
          }
        }
        if (k === 1) {
          await this.$router.push({name: 'profile', params: {id: xe}})
        } else {
          alert('Не правильно введены login/password')
        }
      }
    },
    async reg () {
      await this.$router.push({name: 'registration'})
    }
  },
  name: 'LoginPage',
  components: {

  }/* ,
  computed: {
    students () {
      return students
    }
  } */
}
</script>
