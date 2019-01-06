<template>
  <div>
    <button v-on:click="get">Klik</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    get(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((x)=>{
        console.log(x.data)
      })
    }
  }
}
</script>

<style>
</style>
