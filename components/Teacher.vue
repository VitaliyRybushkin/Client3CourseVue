<template>
  <section class="vh-100" style="background-color: #508bfc; height: auto">
    <div class="container py-5 h-auto" style="height: max-content">
      <div class="row d-flex justify-content-center align-items-center h-100" style="height: max-content">
        <div class="col col-lg-6 mb-4 mb-lg-0">
          <div class="card mb-3" style="border-radius: .5rem;">
            <div class="row g-0">
              <div class="col-md-4 gradient-custom text-center text-white"
                   style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                <img src="https://sun9-east.userapi.com/sun9-30/s/v1/if2/MyjDwxVKQl5Z8HejKCcr7Cj-oWoO3dVr9zVbNYhIHBPBTggd4m9IakmPHbHlVQzQX9wM4feJ1by0zu2DAU5HtYut.jpg?size=1080x1080&quality=95&type=album"
                     alt="Avatar" class="img-fluid my-5" style="width: 80px;border-radius: .5rem;" />
                <h5 class="name">Виталий Рыбушкин</h5>
                <p class="name">Учитель 11А Класса</p>
                <i class="far fa-edit mb-5"></i>
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h6>Ваш профиль</h6>
                  <hr class="mt-0 mb-4">
                  <h6>Контактные данные</h6>
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Почта</h6>
                      <p class="text-muted">info@example.com</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Телефон</h6>
                      <p class="text-muted">+ 7(123)-45-6789</p>
                    </div>
                  </div>

                  <div class="d-flex justify-content-start">
                    <a href="#!" @click ='getr'>Редактировать вариант<i ></i></a>
                  </div>
                  <h6></h6>
                  <hr class="mt-0 mb-4">
                  <div class="d-flex justify-content-start">
                    <a href="#!" @click = 'getl'>Показать список учеников<i ></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body" v-if="ch === 1">
            <Student_array/>
          </div>
          <div class="card-body" v-if="ch === 2">
            <Task_array/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line camelcase
import Student_array from './Student_array'
// eslint-disable-next-line camelcase
import Task_array from './Task_array'
export default {
  name: 'Teacher',
  components: {Task_array, Student_array},
  data: function () {
    return {
      ch: -1
    }
  },
  methods: {
    async getl () {
      if (this.ch !== 2) {
        this.ch *= -1
      } else {
        this.ch = -1
      }
    },
    async getr () {
      if (this.ch === -1) { this.ch = 2 } else {
        this.ch = -1
      }
    }
  }
}
</script>

<style scoped>
.name{
  color: #508bfc;
}
.container span {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;
}
</style>
