<template>
  <section class="min-vh-100" style="background-color: #508bfc;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-md-9 col-lg-7 col-xl-5">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-4">
              <div class="d-flex text-black">
                <div class="flex-grow-1 ms-3">
                  <h5 class="mb-1" id="fullname">К сожалению страница не найдена</h5>
                  <div class="d-flex pt-1">
                    <button type="button" @click="back()" class="btn btn-outline-primary me-1 flex-grow-1">На главную</button>
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
export default {
  name: 'NotFound',
  methods: {
    async back () {
      await this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped>

</style>
