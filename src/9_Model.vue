// 2 ways data binding

<template>
  <div>
    <h1>Input Keyboard</h1>
    <input v-model="input" type="text" placeholder="Ketik nama Anda..."/>
    <h1>{{ input }}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      input: ''
    }
  }
}
</script>

<style>
</style>
