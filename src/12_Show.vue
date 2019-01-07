<template>
  <div>
    <h1>Conditional</h1>
    
    <button v-on:click="ganjilGenap">Click Here</button>
    <p>{{ angka }}</p>
    
    <!-- <p v-if="genap">Angka {{angka}} adalah GENAP!</p>
    <p v-else-if="ganjil">Angka {{angka}} adalah GANJIL!</p> -->
    <p v-show="genap">Angka {{angka}} adalah GENAP!</p>
    <p v-show="ganjil">Angka {{angka}} adalah GANJIL!</p>

    <!-- v-show set display class: none! -->

  </div>
</template>

<script>
export default {
  data(){
    return {
      angka: 0,
      genap: true,
      ganjil: false
    }
  },
  methods: {
    ganjilGenap(){
      this.angka++
      if(this.angka % 2 == 0){
        this.genap = true
        this.ganjil = false 
      } else {
        this.genap = false
        this.ganjil = true
      }
    }
  }
}
</script>

<style>
</style>
