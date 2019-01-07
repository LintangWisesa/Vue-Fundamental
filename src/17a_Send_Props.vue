<template>
  <div>
    <h1>Props</h1>
    <p>Data from parent to child component</p>
    <child v-bind:pesan="message"/>
  </div>
</template>

<script>
import anak from './17b_Receive_Props.vue'

export default {
  components: {
    'child': anak
  },
  data(){
    return {
      message: 'Halo, this is from Parent File!' 
    }
  }
}
</script>

<style>
</style>
