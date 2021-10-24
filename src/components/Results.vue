<template>

  <v-container v-if="!loading" fill-height class="justify-center">

    <v-card v-if="race !== undefined">

      <v-card-title>
        <v-img max-width="90" :src="getImgUrl(race.Circuit.circuitId)"/>
        {{ race.Circuit.circuitName }}
      </v-card-title>

      <v-data-table
          :headers="headers"
          :items="result"
          :loading="loading"
          :disable-sort="true"
          loading-text="Loading... Please wait"
      >

      </v-data-table>

    </v-card>
    <v-card v-else>pas encore de résultats</v-card>

  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Results",
  data() {
    return {
      round: this.$route.params.id,
      loading: true,
      result: [],
      race: null,
      headers: [
        {text: 'Pos.', value: 'position', align: 'start', sortable: false},
        {text: 'Driver', value: 'Driver.familyName'},
        {text: 'Constructor', value: 'Constructor.name'},
        {text: 'Time', value: 'Time.time'},
        {text: 'Pts.', value: 'points'},
      ]
    }
  },
  mounted() {
    axios
        .get('https://ergast.com/api/f1/current/' + this.round + '/results.json')
        .then((response) => {
          this.loading = false
          this.race = response.data.MRData.RaceTable.Races[0]
          if (this.race !== undefined) {
            this.result = response.data.MRData.RaceTable.Races[0].Results
          }

        });
  },

  methods: {
    getImgUrl(picture) {
      // const images = require.context('../assets/img/', false, /\.png$/);
      // return images('./' + picture + ".png")
      return require('../assets/img/tracks/' + picture + '.png')
    }
  }
}
</script>

<style scoped>

</style>
