<template>
  <div>
     <a v-bind:href="web">Klik di sini</a>
     <br/>
     <a :href="web">Di sini aja!</a>
     <br/>
     <div v-html="webTag"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      web: 'https://www.cgv.id',
      webTag: '<a href="https://www.cgv.id">Sini juga bisa...</a>'
    }
  }
}
</script>

<style>

</style>
