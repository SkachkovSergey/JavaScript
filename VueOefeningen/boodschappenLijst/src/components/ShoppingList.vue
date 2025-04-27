<script>
export default {
  name: "ShoppingList",
  data() {
    return {
      items: [
        {
          naam: 'Melk',
          prijs: 0.85
        }
      ],
      newItem: {
        name: '',
        price: 0
      }
    }
  },
  methods: {
    addItem() {
      this.items.push({
        naam: this.newItem.name,
        prijs: this.newItem.price
      });
      this.newItem = {name: '', price: 0};
    },
    removeItem(index) {
      this.items.splice(index, 1);
    }
  },
  props: {
    title: String,
  }
}
</script>

<template>
  <div>
    <h1>{{ this.title }}</h1>
    <div>
      <input type="text" v-model="newItem.name" placeholder="Item">
      <input type="number" v-model="newItem.price" placeholder="Price">
      <button @click="addItem">Toevoegen</button>
      <ul>
        <li v-for="(item, index) in this.items" :key="index">
          {{ item.naam }} - {{ item.prijs }}
          <button @click="removeItem(index)">Verwijderen</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>