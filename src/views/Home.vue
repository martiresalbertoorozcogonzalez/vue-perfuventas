<template>
  <div class="home">
    <Navbar></Navbar>

    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h2>Bienvenido a PerfuVentas</h2>
          </div>
          <div class="col-md-6 mt-2 mb-4">
            <img src="/img/svg/graphic.svg" class="img-fluid" width="400px" />
          </div>
        </div>
      </div>
    </div>

    <products-list></products-list>

    <login></login>

    <mini-cart></mini-cart>
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
