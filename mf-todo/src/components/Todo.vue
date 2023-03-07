<template>
  <div>Todo {{count}}</div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    message: {
      type: String,
      default () {
        return 'Hello World'
      }
    },
    count:{
      type: Number,
      default: 0
    }
  }
}
</script>

<style>

</style>