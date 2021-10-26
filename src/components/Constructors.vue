<template>

  <v-container>
    <v-banner>
      <span class="text-h4 text-center">Constructors standings</span>
    </v-banner>
    <v-row no-gutters v-if="!loading" justify="space-around">


      <v-card
          v-for="(constructor, idx) in constructors"
          :key="idx"
          class="mx-6 my-3 "
          max-width="374"
          outlined
          elevation="3"
          rounded="xl"

      >

        <v-img class="" :class="getColor(constructor.Constructor.name)"
               :src='getImgUrl(constructor.Constructor.constructorId)'
               :lazy-src='getImgUrl(constructor.Constructor.constructorId)'></v-img>
        <v-divider></v-divider>
        <v-card-title >
          {{ constructor.Constructor.name }}
          <v-chip-group>
            <v-chip><v-icon>mdi-podium</v-icon> &nbsp; {{ constructor.position }} </v-chip>
            <v-chip><v-icon>mdi-counter</v-icon> &nbsp; {{ constructor.points }} points</v-chip>


            <v-chip><v-icon>mdi-trophy</v-icon> &nbsp; {{ constructor.wins }} wins</v-chip>
          </v-chip-group>



        </v-card-title>

      </v-card>
    </v-row>
    <v-row v-else>
      <v-skeleton-loader
          v-for="i in 10"
          :key="i"
          class="rounded-xl mx-auto my-6"
          width="374"
          type="card">
      </v-skeleton-loader>
    </v-row>

  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Constructors",
  data() {
    return {
      loading: true,
      constructors: []
    }
  },

  mounted() {
    axios
        .get('https://ergast.com/api/f1/current/constructorStandings.json')
        .then((response) => {
          this.loading = false
          this.constructors = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        });
  },
  methods: {
    getImgUrl(picture) {
      return require('../assets/img/cars/' + picture + '.png')
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

</style>
