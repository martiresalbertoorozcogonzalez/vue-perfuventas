<template>
  <div class="Perfumeshombre">
    <Navbar></Navbar>
    <div class="container h-100 mt-4">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h1>Perfumeria de Hombre</h1>
            <!-- <p>A continuacion te ofrecemos nuestros perfumes de mujer.</p> -->
          </div>
          <div class="col-md-6 mt-2 mb-4">
            <img src="/img/perfumehombre.png" class="img-fluid" width="250px" />
          </div>
        </div>
      </div>
    </div>
    <perfumehombre></perfumehombre>
  </div>
</template>

<script>
export default {
  name: "Perfumeshombre",
  props: {
    msg: String
  }
};
</script>
