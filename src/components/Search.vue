<template>
  <div class="container h-100">
    <div class="intro h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <h4>Bienvenido que perfume buscas?</h4>
          <form class="form-inline ml-5 my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              v-on:keyup.enter="searchData"
              type="search"
              placeholder="Nombre o marca?"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </div>
        <div class="col-md-6 mt-2 mb-4">
          <img src="/img/svg/graphic.svg" class="img-fluid" width="400px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

