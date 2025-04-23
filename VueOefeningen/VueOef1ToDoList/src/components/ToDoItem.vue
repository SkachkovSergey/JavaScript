<script>
export default {
  name: "ToDoItem",
  props: ['todo', 'index'],
  methods: {
    deleteTodo(){
      this.$emit('delete-todo', this.index);
    }
  }
}
</script>

<template>
  <div class="todo-item">
    <h1>
      <strong>{{ todo }}</strong>
      <span @click="deleteTodo">X</span>
    </h1>
  </div>
</template>

<style scoped>
.todo-item {
  margin: 10px 0;
}
span{
  margin-left: 10rem;
  cursor: pointer;
}
h1{
  display: flex;
  justify-content: start;
}
</style>