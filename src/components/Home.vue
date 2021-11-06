<template>

  <v-container
      id="mycontainer"

  >


    <v-card v-if="!nextRaceLoading">
      <v-row justify="space-around">

        <vac :end-time="new Date(nextRaceTimeDate).getTime() ">
          <template
              v-slot:process="{ timeObj }">

            <v-chip-group>
              <v-chip :x-large="$vuetify.breakpoint.smAndUp">{{ `${timeObj.d}` }} days</v-chip>
              <v-chip :x-large="$vuetify.breakpoint.smAndUp">{{ `${timeObj.h}` }} hours</v-chip>
              <v-chip :x-large="$vuetify.breakpoint.smAndUp">{{ `${timeObj.m}` }} minutes</v-chip>
              <v-chip :x-large="$vuetify.breakpoint.smAndUp" color="primary">{{ `${timeObj.s}` }} seconds</v-chip>
            </v-chip-group>

          </template>
          <template
              v-slot:finish>
            <span>Done!</span>
          </template>
        </vac>
      </v-row>
    </v-card>
    <br>
    <v-card v-if="!loading">

      <v-card-title>
        <v-img max-width="90" :src="getImgUrl(lastRace.Circuit.circuitId)"/>
        {{ lastRace.Circuit.circuitName }}
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
      loading: true,
      nextRaceLoading: true,
      lastRace: [],
      nextRace: null,
      nextRaceTime: '',
      nextRaceTimeDate: '',
      results: [],
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
        .get('https://ergast.com/api/f1/current/last/results.json')
        .then((response) => {
          this.loading = false
          this.lastRace = response.data.MRData.RaceTable.Races[0]
          this.results = response.data.MRData.RaceTable.Races[0].Results
        });

    axios
        .get('https://ergast.com/api/f1/current/next.json')
        .then((response) => {
          this.nextRaceLoading = false
          this.nextRace = response.data.MRData.RaceTable.Races
          this.nextRaceTimeDate = this.nextRaceTime.concat(
              this.nextRace[0].date, 'T', this.nextRace[0].time
          );

        });


  },
  methods: {
    getImgUrl(picture) {
      return require('../assets/img/tracks/' + picture + '.png')
    },

  }

}


</script>

<style scoped>
#mycontainer {
  max-width: 1024px;
}
</style>
