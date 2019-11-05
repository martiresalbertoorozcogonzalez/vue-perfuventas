<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">PerfuVentas</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link">Acerca de</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Perfumeria</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/perfumesmujer">Perfumes de Mujer</router-link>
              <router-link class="dropdown-item" to="/perfumeshombre">Perfumes de Hombre</router-link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Ofertas</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <a
            class="btn btn-primary btn-outline-success btn-sm border-0 mx-2 my-2 my-sm-0"
            data-toggle="modal"
            data-target="#login"
            type="submit"
          >Iniciar secion</a>

          <a
            class="btn btn-outline-success border-0 mx-2 my-2 my-sm-0"
            data-toggle="modal"
            data-target="#miniCart"
          >
            <i class="fas fa-cart-plus"></i>
          </a>
        </form>
      </div>
    </nav>

    <Login></Login>
  </div>
</template>

<script>
import Login from "./Login.vue";
export default {
  name: "Navbar",
  components: { Login }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
