<template>
  <div class="home">
    <Navbar></Navbar>

    <Search></Search>

    <products-list></products-list>

    <login></login>

    <mini-cart></mini-cart>
  </div>
</template>

<script>
import Products from "@/views/Products.vue";
import Login from "@/components/Login.vue";
import Search from "@/components/Search.vue";

export default {
  name: "home",
  components: {
    Login,
    Products
  }
};
</script>
