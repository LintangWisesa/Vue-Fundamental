<template>
  <div>
    <h1>Input Keyboard</h1>
    <input v-on:keyup="keyboard" type="text" placeholder="Ketik nama Anda..."/>
    <h1>{{ input }}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      input: ''
    }
  },
  methods: {
    keyboard(e){
      console.log(e)
      this.input += e.key
    }
  }
}
</script>

<style>
</style>
