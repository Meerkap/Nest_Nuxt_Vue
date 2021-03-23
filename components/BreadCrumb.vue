<template>
  <div>
    <b-breadcrumb
      :items="breadcrumbitems"
      class="breadcrumbitems"
    >
    </b-breadcrumb>

  </div>
</template>

<script>
export default {
  props: {
    breadcrumbitems: Array,
  },
};
</script>

<style>
.breadcrumbitems {
  font-size: 0.8em;
}
</style>
