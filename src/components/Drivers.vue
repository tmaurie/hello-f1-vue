<template>

  <v-container>
    <v-row no-gutters>
    <DriverCard
        v-for="driver in info"
        :key="driver"
        class="driver"
        :prenom="driver.givenName"
        :nom="driver.familyName"
    >

    </DriverCard>
    </v-row>
  </v-container>

</template>

<script>
import axios from "axios";
import DriverCard from "@/components/DriverCard";

export default {
  name: "Home",
  components: {DriverCard},
  data () {
    return {
      info: null
    }
  },
  mounted() {
    axios
        .get('http://ergast.com/api/f1/current/drivers.json')
        .then(response => (this.info = response.data.MRData.DriverTable.Drivers))

  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
}

</script>

<style scoped>

</style>
