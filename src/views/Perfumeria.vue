<template>
  <div class="Perfumeria">
    <Navbar></Navbar>
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Perfumeria</h3>
             <p>
             	Hola estas en nuestra perfumeria aqui encontraras perfumes de Hombre y de mujer en precentaciones de 100ml , 50ml , 30ml, y dependiendo de la temporada tambien ofrecemos Sets o estuches de varias piezas. 
              Pase adelante
             	
             </p>
          </div>
          <div class="col-md-6 mt-5">
            <img src="/img/svg/perfumeria.svg" class="img-fluid">
          </div>	
        </div>	
      </div>    	
    </div>

     <products-list></products-list>

 </div>
</template>

<script>
import Products from "@/views/Products.vue";

export default {
  name: "Perfumeria",
  props: {
     msg: String
  }
};
</script>
