<template>
  <div>
    <h1>Parent Component</h1>
    <h1>Halo {{ name }}!</h1>
    <hr>
    <Users/>
  </div>
</template>

<script>
import Users from './16b_Nesting_Component.vue'

export default {
  components: {
    Users
  },
  data(){
    return {
      name: 'Andy'
    }
  }
}
</script>

<style>
</style>
