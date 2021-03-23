<template>
  <div>
    <b-button size="sm" :class="iconType[0]" @click="wrapAction()">
      <NuxtLink :to="'/mcreditviviendas'">
        <b-icon :icon="iconType[1]" class="cw"></b-icon>
      </NuxtLink>
    </b-button>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    idList: Number,
    iconType: Array,
    actionType: String,
  },
  methods: {
    wrapAction() {

      switch (this.actionType) {
        case "add":
          window.localStorage.setItem("_edita_factura", this.idList);
          this.toWhere = "/mcraddviviendas/";
          break;

        case "edit":
          window.localStorage.setItem("_edita_factura", this.idList);
          this.toWhere = "/mcreditviviendas/";
          break;

        case "delete":
          window.localStorage.removeItem("_edita_factura");
          this.onDelete();
          break;

        default:
          break;
      }
    },
    async onDelete() {

      let url = "http://localhost:3001/factura/" + this.idList;
      console.log("URL: " + url);
      //console.log(window.localStorage.getItem("_edita_factura"));

      try {

        await this.$axios.delete( url );
        console.log("Factura Eliminada");
        //this.$router.push("/mcrviviendas");
      } catch (error) {
        console.log( "Error conectandose a la API" + error + "\n " + error.request + "\n " + error.message );
      }

    },
  },
});

//<NuxtLink :to=" '/mcreditviviendas/?idFactura=' + idList " > <b-icon icon="pen" class="cw"></b-icon> </NuxtLink>

/*

methods: {
    wrapAction() {
      switch (actionType) {
        case "add":
          window.localStorage.setItem("_edita_factura", this.idList);
          this.toWhere = "/mcraddviviendas/";
          break;

        case "edit":
          window.localStorage.setItem("_edita_factura", this.idList);
          this.toWhere = "/mcreditviviendas/";
          break;

        case "delete":
          window.localStorage.removeItem("_edita_factura");
          onDelete();
          break;

        default:
          break;
      }
    },
    async onDelete(event) {
      event.preventDefault();

      let url = "http://localhost:3001/factura/" + this.idList;
      console.log("URL: " + url);
      //console.log(window.localStorage.getItem("_edita_factura"));

      try {
        await this.$axios.delete( url, this.idList);
        console.log("Factura Eliminada");
        //this.$router.push("/mcrviviendas");
        $forceUpdate();
      } catch (error) {
        console.log("Error conectandose a la API" + error);
      }
    },
  },


*/
</script>