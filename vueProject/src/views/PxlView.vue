<script>
export default {
  name: "PxlView",
  data() {
    return {
      name: "PXL Hoogeschool Hasselt",
      address: "Elfde Liniestraat 24",
      index: 3500,
      plaats: "Hasselt",
      opleidengen: [
          "Digitale vormgeving",
          "Internet en things",
          "Programmeren",
          "Electronica ICT",
          "Network beheerder"
      ],
      image: "PXL.jpg"
    }
  }
}
</script>

<template>
  <div>
    <img :src="'src/assets/' + this.image" alt="image">
    <h1>{{ name }}</h1>
    <h2>{{ address }}</h2>
    <h2>{{ index }} - {{ plaats }}</h2>
    <hr>
    <h1>Opleidingen</h1>
    <ul>
      <li v-for="opleiding in this.opleidengen">{{ opleiding }}</li>
    </ul>
  </div>

</template>

<style scoped>
img{
  width: 350px;
}
</style>