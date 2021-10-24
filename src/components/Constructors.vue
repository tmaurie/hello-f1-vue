<template>

  <v-container>
    <v-row no-gutters v-if="!loading" justify="space-around" >


      <v-card
          v-for="(constructor, idx) in constructors"
          :key="idx"
          class="mx-6 my-3 "
          max-width="374"
          outlined
          elevation="3"
          rounded="xl"

      >
        <v-img class="ma-4" :src='getImgUrl(constructor.Constructor.constructorId)' :lazy-src='getImgUrl(constructor.Constructor.constructorId)' ></v-img>
        <v-divider></v-divider>
       <v-card-title  :class="getColor(constructor.Constructor.name)">
         {{constructor.Constructor.name}}
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
      loading : true,
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
    getColor(ecurie){
      if(ecurie === 'Red Bull'){return 'indigo darken-2 '}
      if(ecurie === 'Mercedes'){return 'teal accent-3 black--text'}
      if(ecurie === 'Ferrari'){return 'red'}
      if(ecurie === 'McLaren'){return 'orange lighten-3'}
      if(ecurie === 'AlphaTauri'){return 'light-blue darken-4'}
      if(ecurie === 'Alfa Romeo'){return 'red  lighten-1'}
      if(ecurie === 'Haas F1 Team'){return 'blue-grey lighten-1'}
      if(ecurie === 'Alpine F1 Team'){return 'blue accent-4'}
      if(ecurie === 'Williams'){return 'light-blue lighten-2'}
      if(ecurie === 'Aston Martin'){return 'teal lighten-1'}
    }
  }
}
</script>

<style scoped>

</style>
