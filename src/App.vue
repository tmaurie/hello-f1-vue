<template>

  <v-app>

    <AppNavDrawer>

    </AppNavDrawer>


  </v-app>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppNavDrawer from "@/components/AppNavDrawer";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    AppNavDrawer
  }
}
</script>

<style>
#app {

  /*margin-top: 60px;*/
}
</style>
