<script>
export default {
  name: "Header",
  data() {
    return {

    }
  },
  props: {
    counter: Number
  }
}
</script>

<template>
  <h1>You have {{ counter }} todos</h1>
</template>

<style scoped>

</style>