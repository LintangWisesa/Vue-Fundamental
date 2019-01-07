<template>
  <div>
    <h1>Nesting Component</h1>
    <ul v-for="user in users">
        <li>{{ user }}</li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
  data(){
    return {
      users: ['Tinky Winky', 'Dipsy', 'Lala', 'Po']
    }
  }
}
</script>

<style scoped>
h1 {
    color: lightcoral;
    background-color: none;
}
/* use attribute scoped on Parent and Nesting Component */
</style>
