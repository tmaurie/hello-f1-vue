<template>

  <v-app>

    <!--    appBar & navDrawer-->
    <AppNavDrawer/>

    <!--main view / router-->
    <v-main>
        <router-view></router-view>
    </v-main>

    <!--    footer-->
    <v-footer color="transparent">
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Hello F1</strong>
        <span >- powered by <a href="https://ergast.com/mrd/">ergast.com/mrd/</a> </span>
      </v-col>
    </v-footer>

  </v-app>

</template>

<script>
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
