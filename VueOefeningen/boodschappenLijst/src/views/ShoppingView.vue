<script>

import ShoppingList from "@/components/ShoppingList.vue";

export default {
  name: "ShoppingView",
  components: {
    ShoppingList
  },
  data() {
    return {
      title: 'BoodschappenLijst',
    }
  }
}
</script>

<template>
  <ShoppingList :title/>
</template>

<style scoped>

</style>