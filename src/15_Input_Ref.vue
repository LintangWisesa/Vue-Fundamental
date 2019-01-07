<template>
  <div>
    <h1>Input Refs</h1>

    <input type="text" placeholder="Input your name" ref="inputname"/>
    <button v-on:click="getname">Get Name!</button>
    <h1>{{ name }}</h1>

  </div>
</template>

<script>
export default {
  data(){
    return {
      name: ''
    }
  },
  methods: {
    getname(){
      this.name = this.$refs.inputname.value
    }
  }
}
</script>

<style>
</style>
