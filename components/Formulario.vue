<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-col sm="3">
          <label>Identificador de factura</label>
        </b-col>

        <b-col>
          <b-form-input
            id="input-1"
            type="text"
            placeholder="Identificador"
            v-model="factura.identificador"
            required
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="3">
          <label>Empresa</label>
        </b-col>

        <b-col>
          <b-form-input
            id="input-2"
            type="text"
            placeholder="Empresa"
            v-model="factura.empresa"
            required
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="3">
          <label>Precio</label>
        </b-col>

        <b-col>
          <b-form-input
            id="input-3"
            type="text"
            placeholder="Precio"
            v-model="factura.precio"
            required
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <label>Notas</label>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-textarea
            id="textarea"
            placeholder="Añade una nota"
            rows="4"
            max-rows="6"
            v-model="factura.notas"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <b-button type="submit" variant="primary">Guardar</b-button>
      <b-button type="reset" variant="secondary">Cancelar</b-button>

      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ factura }}</pre>
      </b-card>
    </b-form>
  </div>
</template>

<script>

export default {
  props: {
    datos: Array,
  },

  data() {
    return {
      factura: {
        idfactura: "9",
        identificador: "",
        empresa: "",
        precio: "",
        notas: "",
      },
    };
  },

  async fetch() {

    //const id = this.$route.query.idFactura;
    const id = window.localStorage.getItem("_edita_factura");
    let data;

    data = await fetch("http://localhost:3001/factura/" + id ).then((res) =>
      res.json()
    );

    data.precio = data.precio.toString();
    console.log("ID Factura " + data.idfactura );
    this.factura = data;

  },

  methods: {
    async onSubmit(event) {
      
      event.preventDefault();

      let url = "http://localhost:3001/factura/" + window.localStorage.getItem("_edita_factura") ;
      console.log("URL: " + url);
      console.log( window.localStorage.getItem("_edita_factura") );

      try {

        await this.$axios.put(url, this.factura );
        console.log("Datos actualizados");
         this.$router.push("/mcrviviendas");

      } catch (error) {
        console.log( "Error conectandose a la API" + error + "\n " + error.request + "\n " + error.message );
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.factura.identificador = "";
      this.factura.empresa = "";
      this.factura.precio = "0";
      this.factura.notas = "";
      this.$router.push("/mcrviviendas");
      //this.$router.push({name: '/', params: {foo: 1}})
    },
  },
  
};
</script>

<style>
.row {
  margin-bottom: 10px;
}
</style>
