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

    <div class="fcontent p-4">
      <BreadCrumb
        :breadcrumbitems="[
          {
            text: 'Todas las obras',
            href: '/',
          },
          {
            text: 'Facturas de obra la cuesta',
            href: '#',
            active: true,
          },
        ]"
      />

      <!-- Caja Estadisticas -->
      <div class="stadisticcontent py-5 pl-4">
        <h1>Estadísticas de facturas</h1>
        <CountFacturas :moneyType="'€'" />
      </div>

      <!-- Buscar Contenido -->
      <div class="searchcontent mt-4">
        <b-row class="mb-2">
          <b-col cols="4">
            <b-input-group size="sm">
              <b-input-group-prepend is-text>
                <b-icon icon="search" class="cw"></b-icon>
              </b-input-group-prepend>
              <b-form-input type="search" placeholder="Buscador"></b-form-input>
            </b-input-group>
          </b-col>

          <b-col cols="8">
            <ActionButton :idList="-100"  :actionType=" 'add' " :iconType="['bg-secondary', 'plus-square']"  class="mx-2 float-right"/>
          </b-col>
        </b-row>

        <!-- Tabla de Precios -->
        <TablePrice />
      </div>
    </div>

    <!-- Parte Baja -->
    <div class="divm container-fluid">
      <div>
        <Logo />
        <h1 class="title">MCR Viviendas</h1>
        <h2>ADMIN</h2>
        <div class="links">
          <NuxtLink to="/"> To Root </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- Scripts -->
<script lang="ts">
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
export default Vue.extend({});

/*
<b-button size="md" class="px-2 float-right">
  <span class="px-1">+</span>
</b-button>
*/
</script>

<!-- Styles -->
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
