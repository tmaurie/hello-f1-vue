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
              {{ nextRace[0].date }}
              <span class="font-italic text-muted">({{ nextRaceUTCtime }} UTC)</span>
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
      <v-card class="mt-8" v-if="!loading">
        <v-row justify="center">
          <h1 id="">Last Race Results</h1>
        </v-row>

        <v-card-title>

          <v-img max-width="90" :src="getImgUrl(lastRace.Circuit.circuitId)"/>
          <h3> {{ lastRace.raceName }}</h3> &nbsp;| {{ lastRace.Circuit.circuitName }}


        </v-card-title>

        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">Pos.</th>
              <th class="text-left">Driver</th>
              <th class="text-left">Constructor</th>
              <th class="text-left">Time</th>
              <th class="text-left">Pts.</th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="(item,idx) in results"
                :key="idx"
            >
              <td>{{ item.position }}</td>
              <td v-if="$vuetify.breakpoint.xsOnly">{{ item.Driver.code  }}</td>
              <td v-else>{{ item.Driver.familyName  }}</td>
              <td>
                <v-chip
                    :color="getColor(item.Constructor.name)"
                    dark
                >
                  {{ item.Constructor.name }}
                </v-chip>
              </td>
              <td v-if="item.Time"><v-chip :color="item.FastestLap.rank === '1' ? 'purple' : ''">{{ item.Time.time }}</v-chip></td>
              <td v-else>{{ item.status }}</td>
              <td>{{ item.points }}</td>
            </tr>

            </tbody>
          </template>

        </v-simple-table>

      </v-card>
    </v-container>
  </v-img>

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
    getStatus(){
       return   "Time.time"
    },
    getLastResults() {
      axios
          .get('https://ergast.com/api/f1/current/last/results.json')
          .then((response) => {
            this.loading = false
            this.lastRace = response.data.MRData.RaceTable.Races[0]
            this.results = response.data.MRData.RaceTable.Races[0].Results
          });
    },
    getNextRace() {
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
    getImgUrl(picture) {
      return require('../assets/img/tracks/' + picture + '.png')
    },
    getColor(ecurie) {
      switch (ecurie) {
        case 'Red Bull' :
          return 'indigo darken-2'
        case 'Mercedes' :
          return 'teal accent-3'
        case 'Ferrari' :
          return 'red'
        case 'McLaren' :
          return 'orange lighten-3'
        case 'AlphaTauri' :
          return 'light-blue darken-4'
        case 'Alfa Romeo' :
          return 'red  lighten-1'
        case 'Haas F1 Team' :
          return 'blue-grey lighten-1'
        case 'Alpine F1 Team' :
          return 'indigo darken-2'
        case 'Williams' :
          return 'blue accent-4'
        case 'Aston Martin' :
          return 'teal lighten-1'
      }
    }

  }

}


</script>

<style scoped>
#mycontainer {
  max-width: 1024px;
}
#customTitle{
  letter-spacing: 10px;
}
</style>
