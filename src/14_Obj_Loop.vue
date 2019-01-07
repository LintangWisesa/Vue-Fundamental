<template>
  <div>
    <h1>Object Looping</h1>

    <h3>Characters:</h3>
    <ul>
      <div v-for="aUser in users">
        <div v-for="(value, key) in aUser">
          <p>{{ key }} {{ value }}</p>
        </div>
      </div>
    </ul>

  </div>
</template>

<script>
export default {
  data(){
    return {
      users: [
        {name: 'Andi', age: 21},
        {name: 'Budi', age: 22},
        {name: 'Caca', age: 23},
      ]
    }
  }
}
</script>

<style>
</style>
