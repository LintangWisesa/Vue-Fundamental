<template>
  <div>
    <h1>{{ sambutan() }}</h1>
    <h1>{{ salam() }}</h1>
    <h1>Halo {{ nama }} ({{ usia }})</h1>   
  </div>
</template>

<script>
export default {
  data(){
    return {
      nama: 'Andi',
      usia: 23,
      waktu: 'malam'
    }
  },
  methods: {
    sambutan(){
      return 'Selamat datang!'
    },
    salam(){
      return `Selamat ${this.waktu}, ${this.nama}`
    }
  }
}
</script>

<style>

</style>
