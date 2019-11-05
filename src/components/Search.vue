<template>
  <form class="form-inline ml-5 my-2 my-lg-0">
    <input
      class="form-control mr-sm-2"
      v-model="search"
      type="search"
      placeholder="Nombre o marca?"
      aria-label="Search"
    />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
  </form>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      products: [],
      search: ""
    };
  },
  methods: {
    firestore() {
      return {
        products: db.collection("products")
      };
    }
  },
  computed: {
    filteredProduct: function() {
      return this.products.filter(product => {
        return product.name.match(this.search);
      });
    }
  }
};
</script>

