<template>
  <v-img class="v-img--blurred" id="hero" :aspect-ratio="10"
         :src="require('@/assets/img/f1-bg-3.jpg')"
         gradient="to top, rgba(var(--bg-color),1) 15%, rgba(var(--bg-color),.7) 100%">
    <v-container
        id="mycontainer"

    >


      <v-card class="mt-2" v-if="!nextRaceLoading">

        <v-row justify="space-around">
          <v-card-title class="d-flex flex-column">
            <h3>
              Next Race: {{ nextRace[0].raceName }}
            </h3>

            <p>
              {{ nextRace[0].Circuit.circuitName }} |
              {{ new Date(nextRace[0].date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}}
              <span class="font-italic text-muted">({{ nextRace[0].time.slice(0, -4) }} UTC)</span>
            </p>


          </v-card-title>
          <vac :end-time="new Date(nextRaceTimeDate).getTime() ">
            <template
                v-slot:process="{ timeObj }">

              <v-chip-group>
                <v-chip :x-large="$vuetify.breakpoint.smAndUp"><span
                    v-text="timeObj.d > 1 ? timeObj.d + ' days' : timeObj.d +' day' "/></v-chip>
                <v-chip :x-large="$vuetify.breakpoint.smAndUp">{{ `${timeObj.h}` }} hours</v-chip>
                <v-chip :x-large="$vuetify.breakpoint.smAndUp">{{ `${timeObj.m}` }} minutes</v-chip>
                <v-chip :x-large="$vuetify.breakpoint.smAndUp" color="primary">{{ `${timeObj.s}` }} seconds</v-chip>
              </v-chip-group>

            </template>
            <template
                v-slot:finish>
              <span>Race in progress</span>
            </template>
          </vac>
        </v-row>
      </v-card>
      <ResultCard :last-race="lastRace" :loading="loading" :results="results"/>
    </v-container>
  </v-img>

</template>

<script>
import axios from "axios";
import ResultCard from "@/pages/ResultCard";

export default {
  name: "Home",
  components: {ResultCard},
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
        {text: 'Pts.', value: 'points'},
      ]
    }
  },


  mounted() {
    this.getLastResults()
    this.getNextRace()
    this.getStatus()


  },
  methods: {
    getStatus() {
      return "Time.time"
    },
    getLastResults() {
      axios
          .get('current/last/results.json', {
            baseURL: process.env.VUE_APP_BASE_URL
          })
          .then((response) => {
            this.loading = false
            this.lastRace = response.data.MRData.RaceTable.Races[0]
            this.results = response.data.MRData.RaceTable.Races[0].Results
          });
    },
    getNextRace() {
      axios
          .get('current/next.json', {
            baseURL: process.env.VUE_APP_BASE_URL
          })
          .then((response) => {
            this.nextRaceLoading = false
            this.nextRace = response.data.MRData.RaceTable.Races
            this.nextRaceTimeDate = this.nextRaceTime.concat(
                this.nextRace[0].date, 'T', this.nextRace[0].time
            );

          });
    },
  }

}


</script>

<style scoped>
#mycontainer {
  max-width: 1024px;
}

#customTitle {
  letter-spacing: 10px;
}
</style>
