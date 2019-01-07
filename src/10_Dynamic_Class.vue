<template>
  <div>
    <h1 v-bind:class="{merah: true, blue: false}">Look at My Class!</h1>
    <hr>
    <button v-on:click="myclass = !myclass">Change Style</button>
    <div v-bind:class="{myclass: myclass}">
      <h1>Lintang</h1>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      myclass: false
    }
  }
}
</script>

<style>
  h1 {
    color: black;
    background: none
  }
  .myclass h1 {
    color: white;
    background: palevioletred
  }
</style>
