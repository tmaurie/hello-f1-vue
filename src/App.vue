<template>

  <v-app>

    <AppNavDrawer/>


    <v-main
    >


      <v-container fluid>

        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer>
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Hello F1</strong>
      </v-col>
    </v-footer>

  </v-app>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import AppNavDrawer from "@/components/AppNavDrawer";

import AppNavDrawer from "@/components/AppNavDrawer";

export default {
  name: 'App',
  components: {
    AppNavDrawer
  },


}
</script>
<style>
@import './assets/styles/styles.css';
</style>
