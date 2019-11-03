<template>
  <div class="home">
    <Navbar></Navbar>

    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Bienvenido pase adelante</h3>
            <p>
              Hola bienvenido a PerfuVentas aqui encontraras perfumes de Hombre y de mujer en precentaciones de 100ml , 50ml , 30ml , segun de la temporada tambien ofrecemos Sets o
              estuches de varias piezas.
            </p>
          </div>
          <div class="col-md-6 mt-2 mb-4">
            <img src="/img/svg/graphic.svg" class="img-fluid" width="450px" />
          </div>
        </div>
      </div>
    </div>

    <products-list></products-list>

    <login></login>

    <mini-cart></mini-cart>
    <div>
      Icons made by
      <a
        href="https://www.flaticon.es/autores/vectors-market"
        title="Vectors Market"
      >Vectors Market</a> from
      <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script>
import Products from "@/views/Products.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Login,
    Products
  }
};
</script>
