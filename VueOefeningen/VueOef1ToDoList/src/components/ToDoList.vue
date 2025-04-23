<script>
import ToDoItem from "@/components/ToDoItem.vue";
export default {
  name: "ToDoList",
  components: {
    ToDoItem
  },
  props: {
    todos: Array,
  }
}
</script>

<template>
  <ToDoItem v-for="(todo, index) in todos"
            :key="index"
            :todo="todo"
            :index="index"
            @delete-todo="$emit('delete-todo', index)"/>
</template>

<style scoped>

</style>