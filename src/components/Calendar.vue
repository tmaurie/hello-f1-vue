<template>

  <v-container>
    <v-row no-gutters justify="space-around">


      <v-card
          v-for="(race, idx) in races"
          :key="idx"
          class="mx-6 my-3"
          max-width="374"
          outlined
          elevation="3"
          rounded="xl"
          :to="'results/' + race.round" append
      >
        <v-list-item three-line>
          <v-img
            max-width="90"
            class="mr-3"
            :src="getImgUrl(race.Circuit.circuitId)"
        ></v-img>
          <v-list-item-content>
            <div class="text-overline mb-4">
              {{race.date }}
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ race.raceName }}
            </v-list-item-title>
            <v-list-item-subtitle>{{race.Circuit.circuitName}}</v-list-item-subtitle>
          </v-list-item-content>


        </v-list-item>

        <v-card-actions>
          <v-btn
              outlined
              rounded
              text
              disabled
          >
            Round {{race.round}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Calendar",
  data() {
    return {
      races: null
    }
  },


  mounted() {
    axios
        .get('https://ergast.com/api/f1/current/races.json')
        .then((response) => {
          this.loading = false
          this.races = response.data.MRData.RaceTable.Races
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
