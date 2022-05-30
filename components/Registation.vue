<template>
  <section class="min-vh-100" style="background-color: #508bfc;">
    <div class="container py-5 h-100" >
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 2rem;">
            <div class="card-body p-5 text-center" >

              <h3 class="mb-5">Выучи русский язык</h3>
              <h3 class="mb-5">Регистрация</h3>
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
                <input type="password" id="pass1" class="form-control form-control-lg" />

              </div>

              <div class="form-outline mb-4">
                <p></p>
                <p style="font-size: x-large">Повторите пароль</p>
                <p></p>
                <input type="password" id="pass2" class="form-control form-control-lg" />

              </div>

              <button class="btn btn-primary btn-lg btn-block" @click="tryreg" type="register">Зарегестрироваться</button>
              <hr class="my-4">
              <button class="btn btn-primary btn-lg btn-block"  @click="getback" type="submit">На страницу авторизации</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Registation',
  methods: {
    async tryreg () {
      let pas1 = document.getElementById('pass1').value
      let pas2 = document.getElementById('pass2').value
      if (pas1 === pas2) {
        alert('Нет подключения к REST серверу')
        await this.$router.push({name: 'login'})
      } else {
        alert('Введённые пароли не совпадают')
      }
    },
    async getback () {
      await this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped>

</style>
