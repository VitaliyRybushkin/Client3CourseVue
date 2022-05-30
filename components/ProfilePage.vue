<template>
  <section class="min-vh-100" style="background-color: #508bfc;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-md-9 col-lg-7 col-xl-5">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-4">
              <div class="d-flex text-black">
                <div class="flex-grow-1 ms-3">
                  <h5 class="mb-1" id="fullname">{{user[0]}}</h5>
                  <p class="mb-2 pb-1"  id= "info" style="color: #2b2a2a">{{user[1]}}</p>
                  <div class="d-flex pt-1">
                    <button type="button" @click="back()" class="btn btn-outline-primary me-1 flex-grow-1">Назад</button>
                    <button type="button" @click="forward()" class="btn btn-primary flex-grow-1">Решать</button>
                  </div>
                </div>
              </div>
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
  data () {
    let user = ['1', '2']
    return {
      user
    }
  },
  created () {
    const ids = this.$route.params.id
    const student = students[ids]
    console.log('++++++++')
    console.log(student[2])

    this.user[0] = student[2]
    this.user[1] = student[3]
  },
  methods: {
    async back () {
      await this.$router.push({name: 'login'})
    },
    async forward () {
      await this.$router.push({name: 'variant'})
    }
  },

  name: 'ProfilePage'
}
</script>

<style scoped>

</style>
