<template>
  <div class="products" id="products">
    <div class="container">
      <form class="form-inline my-2 my-lg-0">
        <h2 class="p-5">Que perfume de mujer buscas?</h2>
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Nombre o marca?"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="product in products">
          <div class="card product-item">
            <carousel :perPage="1">
              <slide v-for="(image, index) in product.images">
                <img :src="image" class="card-img-top" alt="..." />
              </slide>
            </carousel>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ product.name }}</h5>
                <h5 class="card-priceS">{{ product.price | currency }}</h5>
              </div>

              <add-to-cart
                :image="product.image"
                :p-id="product.id"
                :price="product.price"
                :name="product.name"
              ></add-to-cart>
            </div>
          </div>
        </div>
      </div>
    </div>

    <mini-cart></mini-cart>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "Listarperfumesmujer",
  props: {
    msg: String
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    getImage(images) {
      return images[0];
    }
  },
  firestore() {
    return {
      products: db.collection("products").where("category", "==", "mujer")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  background: #f2f2f2;
  padding-bottom: 3rem;
}

img {
  margin-top: 15px;
  width: 150px;
}
</style>