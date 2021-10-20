<template>

  <v-container
      id="mycontainer"
  >


      <v-card>
        <v-card-title>
          <v-img  max-width="90"  :src="require('@/assets/img/logo.png')"/>{{lastRace.Circuit.circuitName}}
        </v-card-title>

    <v-data-table
        :headers="headers"
        :items="results"
        :loading="loading"
        :disable-sort="true"
        loading-text="Loading... Please wait"
    >

    </v-data-table>

    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      loading : true,
      lastRace: null,
      results : [],
      headers: [
        {text: 'Pos.', value: 'position', align: 'start', sortable: false},
        {text: 'Driver', value: 'Driver.familyName'},
        {text: 'Constructor', value: 'Constructor.name'},
        {text: 'Time', value: 'Time.time' },
        {text: 'Pts.', value: 'points'},
      ]
    }
  },

  mounted() {

    axios
        .get('https://ergast.com/api/f1/current/last/results.json')
        .then((response) => {
          this.loading = false
          this.lastRace = response.data.MRData.RaceTable.Races[0]
          this.results = response.data.MRData.RaceTable.Races[0].Results
        });
    // axios
    //     .get('https://ergast.com/api/f1/current/last/results.json')
    //     .then(response => (this.lastRace = response.data.MRData.RaceTable.Races[0]))
    //     .finally(() => (this.loaded = true))


  },

}


</script>

<style scoped>
#mycontainer {
  max-width: 1024px;
}
</style>
