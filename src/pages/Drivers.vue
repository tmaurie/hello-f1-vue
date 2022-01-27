<template>


  <v-container>

    <v-banner>
      <span class="text-h4 text-center">Driver's standings</span>
    </v-banner>

    <v-row no-gutters v-if="loaded" justify="center">
      <DriverCard
          v-for="(driver, idx) in info"
          :key="idx"
          class="driver"
          :class="driver.Constructors[0].constructorId"
          :fname="driver.Driver.givenName"
          :lname="driver.Driver.familyName"
          :nationality="driver.Driver.nationality"
          :ecurie="driver.Constructors[0].name"
          :driver-id="driver.Driver.driverId"
          :wins="driver.wins"
          :position="driver.position"
          :points="driver.points"
      >

      </DriverCard>
    </v-row>
    <v-row no-gutters justify="center" v-else>
      <v-skeleton-loader
          v-for="i in 20"
          :key="i"
          class="pa-1"
          width="500"
          type="card">
      </v-skeleton-loader>
    </v-row>
  </v-container>


</template>

<script>
import axios from "axios";
import DriverCard from "@/components/DriverCard";

export default {
  name: "Home",
  components: {DriverCard},
  data() {
    return {
      loaded: false,
      info: null
    }
  },
  mounted() {
    axios
        .get('current/driverStandings.json', {
          baseURL : process.env.VUE_APP_BASE_URL
        })
        .then(response => (this.info = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings))
        .finally(() => (this.loaded = true))


  },
}

</script>

<style scoped>

</style>
