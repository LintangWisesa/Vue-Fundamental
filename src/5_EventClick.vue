<template>
  <div>
     <h1>{{ angka }}</h1>
     <button v-on:click="angka++">+ Tambah</button>
     &nbsp;
     <button v-on:click="angka--">- Kurang</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      angka: 0
    }
  }
}
</script>

<style>
</style>
