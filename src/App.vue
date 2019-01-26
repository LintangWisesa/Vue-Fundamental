<template>
  <div>
    <h1>Props</h1>
    <p>Data from parent to child component</p>
    <child v-bind:pesan="message" v-bind:nama='users'/>
  </div>
</template>

<script>
import anak from './17b_Child_Receive_Props.vue'

export default {
  components: {
    'child': anak
  },
  data(){
    return {
      message: 'Halo, this is from Parent File!',
      users: ['Andi', 'Budi', 'Caca'] 
    }
  }
}
</script>

<style>
</style>
