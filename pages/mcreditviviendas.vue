<template>
  <div class="main-content">
    <!-- Nav -->
    <div class="w-100 main-nav cw bg-primary p-2 d-flex align-items-center">
      <b-icon
        class="ml-2"
        animation="cylon"
        icon="justify"
        font-scale="1"
      ></b-icon>
      <span class="ml-2 align-self-center">MCR viviendas</span>
    </div>

     <!-- BreadCrumb -->
    <div class="fcontent p-4">
      <BreadCrumb
        :breadcrumbitems="[
          {
            text: 'Todas las obras',
            href: '/',
          },
          {
            text: 'Facturas',
            href: '/',
          },
          {
            text: 'Editar Facturas',
            href: '/',
            active: true,
          },
        ]"
      />
    </div>

     <!-- Form -->
    <div class="p-4">
      <Formulario />
    </div>

  </div>
  
</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({

  

});

</script>

<style>
.divm {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.stadisticcontent {
  background-color: #e9ecef;
}

.black {
  background-color: black;
}
.cw {
  color: white;
}

.main-nav {
  font-size: 1.2em;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
