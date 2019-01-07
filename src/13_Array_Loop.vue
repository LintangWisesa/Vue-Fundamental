<template>
  <div>
    <h1>Array Looping</h1>

    <h3>Characters:</h3>
    <ul>
      <li v-for="x in characters">
        {{ x }}
      </li>
    </ul>

    <h3>Users:</h3>
    <ul>
      <div v-for="(value, index) in users">
        {{ index }}. {{ value.name }} ({{ value.age}}) 
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      characters: ['Nobita', 'Doraemon', 'Shizuka', 'Giant', 'Suneo'],
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
