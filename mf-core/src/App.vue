<template>
  <div>
    <button @click="addCount">+</button>
    <RemoteTodo :count="count"></RemoteTodo>
  </div>
</template>
<script>
import {  defineAsyncComponent } from "vue";
const RemoteTodo = defineAsyncComponent(() => import("remote_app/Todo"));
export default {
  components: {
    RemoteTodo
  },
  data() {
    return {
      count:0,
      message: 'Hello world'
    }
  },
  methods:{ 
    addCount() {
      this.count++;
    }
  }
}
</script>

