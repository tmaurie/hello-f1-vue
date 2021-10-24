<template>


  <v-container>

    <v-row no-gutters v-if="loaded" >
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
    <v-row no-gutters v-else>
      <v-skeleton-loader
          v-for="i in 20"
          :key="i"
          class="mx-auto my-6 rounded-xl"
          width="374"
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
        .get('https://ergast.com/api/f1/current/driverStandings.json')
        .then(response => (this.info = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings))
        .finally(() => (this.loaded = true))


  },
}

</script>

<style scoped>

</style>
