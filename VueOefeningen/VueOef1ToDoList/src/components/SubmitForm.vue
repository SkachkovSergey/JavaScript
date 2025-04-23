<script>
export default {
  name: "SubmitForm",
  data() {
    return {
      newTodo: '',
      error: false,
    }
  },
  methods: {
    handleSubmit() {
      if (this.newTodo.trim() === '') {
        this.error = true;
        return;
      }

      this.$emit('add-todo', this.newTodo);
      this.newTodo = '';
      this.error = false;
    }
  }
}
</script>

<template>
  <div>
    <input type="text" v-model="newTodo" placeholder="Enter Your Todo" class="input-text" :class="{ 'error': error }">
    <input type="submit" content="Submit" @click.prevent="handleSubmit" class="input-submit">
    <p v-if="error" class="error-message">Please enter a task!</p>
  </div>
</template>

<style scoped>
.input-text {
  width: 10rem;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  margin-right: 10px;
}
.input-submit {
  width: 4.5rem;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: #ffffff;
}
.input-submit:hover {
  background-color: #0056b3;
}
.input-text:focus {
  outline: none;
  border: 1px solid #007bff;
  box-shadow: 0 0 5px #007bff;
}
.error {
  border: 2px solid red;
  box-shadow: 0 0 5px red;
  background-color: red;
}
.error-message {
  color: white;
  margin: 5px 0;
}
</style>