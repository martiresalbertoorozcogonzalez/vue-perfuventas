<template>
  <div class="Perfumesmujer">
    <Navbar></Navbar>
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h1>Perfumeria de Mujer</h1>
            <!-- <p>A continuacion te ofrecemos nuestros perfumes de mujer.</p> -->
          </div>
          <div class="col-md-6 mt-2 mb-4">
            <img src="/img/perfume.png" class="img-fluid" width="300px" />
          </div>
        </div>
      </div>
    </div>
    <products-list></products-list>
  </div>
</template>

<script>
export default {
  name: "Perfumesmujer",
  props: {
    msg: String
  }
};
</script>
