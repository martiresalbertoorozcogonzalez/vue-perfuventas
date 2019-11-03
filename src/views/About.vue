<template>
  <div class="About">
    <Navbar></Navbar>
    <div class="container h-100 mt-5">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h1>Acerca de PerfuVentas</h1>
            <p>
              Somos una empresa con mas de 10 anios de experiencia
              en la venta de perfumeri de varias marcas originales
              dando como beneficio pagos a nuestros clientes que nos
              depositan su coinfianza.
            </p>
          </div>
          <div class="col-md-6 mt-2 mb-4">
            <img src="/img/botellas.png" class="img-fluid" width="300px" />
          </div>
        </div>
      </div>
    </div>
    <mini-cart></mini-cart>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    msg: String
  }
};
</script>
