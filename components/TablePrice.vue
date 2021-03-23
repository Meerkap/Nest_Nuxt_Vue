<template>
  <div>
    
    <b-table-simple responsive striped>
      <b-thead>
        <b-tr>
          <b-th v-for="field in fields" :key="field.random" v-text="field"></b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="item in items" :key="item.random">
          <b-td v-text="item.identificador"></b-td>
          <b-td v-text="item.empresa"></b-td>
          <b-td v-text="item.precio"></b-td>
          <b-td class="d-flex">
            
            <ActionButton :idList="item.idfactura" :actionType=" 'edit' "  :iconType="['bg-info', 'pen']" />
            
            <ActionButton :idList="item.idfactura" :actionType=" 'delete' " :iconType="['bg-danger', 'cart-dash']" />
            
          </b-td>

        </b-tr>
      </b-tbody>
      
    </b-table-simple>

    <p v-if="$fetchState.pending">Cargando Tabla...</p>
    <p v-else-if="$fetchState.error">No se han podido cargar los datos :(</p>
    <button @click="$fetch" class="float-right btn btn-warning">Recargar</button>

  </div>
</template>




<script>
export default {
  props: {
    tableitems: Array,
  },

  data() {
    return {
      fields: ["Identificador", "Empresa", "Precio", " "],
      items: [],
    };
  },

  async fetch() {
    let data;
    data = await fetch("http://localhost:3001/factura").then((res) =>
      res.json()
    );

    this.items = data.data;

    //console.log(data);
    /*data.data.forEach((element) => {
      this.idList.push(element.idfactura);
    });
    console.log("ID LIST: " + this.idList);*/
  },

  /*test() {
    if ( typeof window !== "undefined" && window.localStorage.getItem("_edita_factura")) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("_edita_factura", "1");
        if (window.location == window.parent.location) {
          window.localStorage.removeItem("_edita_factura");
        }
      }
    }
  },*/
};

//this.$router.push('/mcreditviviendas/' + 1)
// <nuxt-link to="/user/:id">User</nuxt-link>
//<nuxt-link to="/orderOnline">Order Online</nuxt-link>

/*data() {
    return {
      fields: ["identificador", "empresa", "precio", "_"],
      items: [
        { identificador: "001-2021", empresa: "Dickerson", precio: "100 €" },
        { identificador: 21, empresa: "Larsen", precio: "Shaw" },
        { identificador: 89, empresa: "Geneva", precio: "Wilson" },
        { identificador: 38, empresa: "Jami", precio: "Carney" },
      ],
    };
  },*/

//<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
</script>