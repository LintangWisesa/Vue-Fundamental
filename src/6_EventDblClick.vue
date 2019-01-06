<template>
  <div>
     <h1>{{ angka }}</h1>
     <button v-on:click="tambah">+ Tambah</button>
     &nbsp;
     <button v-on:click="kurang">- Kurang</button>
     <br/><br/>
     <button v-on:dblclick="reset">Double click untuk Reset!</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      angka: 0
    }
  },
  methods: {
    tambah(){
      this.angka++
    },
    kurang(){
      this.angka--
    },
    reset(){
      this.angka = 0
    }
  }
}
</script>

<style>
</style>
