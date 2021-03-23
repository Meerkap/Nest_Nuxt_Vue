<template>
  <div>
    <p v-if="$fetchState.pending">Esperando respuesta...</p>
    <p v-else-if="$fetchState.error">- Error -</p>
    <div v-else>
      <p>
        Total de facturas pagadas
        <b> {{ count.data.totalPrecio }} {{ moneyType }} </b>
      </p>
      <!--<button @click="$fetch">Recargar</button>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    moneyType: String,
  },

  data() {
    return {
      count: 0,
    };
  },
  async fetch() {
    this.count = await fetch("http://localhost:3001/factura/all").then((res) =>
      res.json()
    );
  },
};
</script>