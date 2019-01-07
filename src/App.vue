<template>
  <div>
    <h1>Parent Component</h1>
    <h1>Halo {{ name }}!</h1>
    <hr>
    <Users/>
  </div>
</template>

<script>
import Users from './16c_Nesting_CSS_scoped.vue'

export default {
  components: {
    'Users': Users
    // Users
  },
  data(){
    return {
      name: 'Andy'
    }
  }
}
</script>

<style scoped>
h1 {
  color: lightcyan;
  background-color: blue
}
</style>
