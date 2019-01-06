<template>
  <div v-on:mousemove="posisi">
    <h1>Posisi Kursor</h1>
    <h1>X: {{ x }} | Y: {{ y }}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    posisi(e){
      this.x = e.clientX
      this.y = e.clientY
    }
  }
}
</script>

<style>
</style>
