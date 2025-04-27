<script>
import Header from "@/components/Header.vue";
import ToDoList from "@/components/ToDoList.vue";
import SubmitForm from "@/components/SubmitForm.vue";
export default {
  name: "OefeningenView",
  components: {
    Header,
    ToDoList,
    SubmitForm,
  },
  data() {
    return {
      counter: 0,
      todos: [], //array for todos
    }
  },
  methods: {
    addTodo(newTodo){
      this.todos.push(newTodo);
      this.counter++;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.counter--;
    }
  }
}
</script>

<template>
  <main>
    <Header :counter="counter"/>
    <ToDoList :todos="todos" @delete-todo="deleteTodo"/>
    <SubmitForm @add-todo="addTodo"/>
  </main>
</template>

<style scoped>

</style>