<template>
  <section class="min-vh-100" style="background-color: #508bfc;height: max-content;">
    <div class="container py-5 h-100 w-200">
      <div class="row d-flex justify-content-center align-items-center h-100 w-200">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 2rem;">
            <div class="card-body p-5 text-center">

              <h3 class="mb-5">Вариант</h3>
              <div class="card-body">
                <TaskArray/>
              </div>
              <button class="btn btn-primary btn-lg btn-block" type="submit">Завершить</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TaskArray from './TaskArray'
export default {
  name: 'Varriant',
  components: {
    TaskArray
  }
}
</script>

<style scoped>

</style>
