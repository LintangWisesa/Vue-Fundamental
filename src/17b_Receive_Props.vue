<template>
  <div>
    <hr>
    <h1>Pesan dari Parent:</h1>
    <h3>{{ pesan }}</h3>
  </div>
</template>

<script>
export default {
    props: ['pesan']
}
</script>

<style>
</style>
