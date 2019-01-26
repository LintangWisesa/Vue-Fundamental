<template>
  <div>
    <hr>
    <h1>Pesan dari Parent:</h1>
    <h3>{{ pesan }}</h3>
    <hr/>
    <h1>Daftar users dari Parent:</h1>
    <ul>
      <li v-for='x in nama'>
        <h3>{{ x }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    props: {
      pesan: {
        type: String
      },
      nama: {
        type: Array
      }
    }
}
</script>

<style>
</style>
