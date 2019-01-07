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

/*
1. Register nesting component globally: 
    - Import component to main.js: 
        import Users from './16b_Nesting_Component.vue'

    - Create a global component:
        Vue.component('users', Users)

    - Call the component as html tag on any component easily
        <template>
          <div>
            <users/>
          </div>
        </template>

2. Register locally: 
    - Import component to parent component:
        import Users from './16b_Nesting_Component.vue'
    
    - On parent component, create a component props:
        export default {
            components: {
                Users
            },

    - Call the nesting component on parent
        <template>
            <div>
                <h1>Parent Component</h1>
                <h1>Halo {{ name }}!</h1>
                <hr>
                <Users/>
            </div>
        </template>

*/

</script>

<style>
</style>