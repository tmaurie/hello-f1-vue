<template>

  <v-container id="mycontainer" v-if="!loading" :fill-height="race === undefined" class="justify-center">

    <ResultCard v-if="race !== undefined" :title="`Round #${race.round} `" :last-race="race" :loading="loading"
                :results="result"/>
    <h1 v-else>No results yet</h1>

  </v-container>
</template>

<script>
import axios from "axios";
import ResultCard from "@/components/ResultCard";

export default {
  name: "Results",
  components: {ResultCard},
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
        .get('https://api.jolpi.ca/ergast/f1/current/' + this.round + '/results.json')
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
#mycontainer {
  max-width: 1024px;
}

</style>
