<template>
  <div class="home">
    <Navbar></Navbar>

    <perfumeria-inicio></perfumeria-inicio>

    <products-list></products-list>

    <LearnMoreAboutus></LearnMoreAboutus>

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
