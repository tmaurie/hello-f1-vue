<template>

  <v-container>

    <h4 style="font-size: 2rem" class="text-center">Constructors's standings</h4>

    <v-row no-gutters v-if="!loading" justify="center">


      <v-card
          v-for="(constructor, idx) in constructors"
          :key="idx"
          class="mx-6 my-3 "
          max-width="374"
          outlined
          rounded="lg"
          elevation="3"

      >

        <v-img class="" :class="getColor(constructor.Constructor.name)"
               :src='getImgUrl(constructor.Constructor.constructorId)'
               :lazy-src='getImgUrl(constructor.Constructor.constructorId)'></v-img>
        <v-divider></v-divider>
        <v-card-title>
          {{ constructor.Constructor.name }}
          <v-chip-group>
            <v-chip style="background-color: rgba(210,175,26,0.83)" v-if="constructor.position==='1'">
              <v-icon>mdi-podium-gold</v-icon> &nbsp; {{ constructor.position }}
            </v-chip>
            <v-chip style="background-color: rgba(189,189,187,0.74)" v-else-if="constructor.position==='2'">
              <v-icon>mdi-podium-silver</v-icon> &nbsp; {{ constructor.position }}
            </v-chip>
            <v-chip style="background-color: #b6822f" v-else-if="constructor.position==='3'">
              <v-icon>mdi-podium-bronze</v-icon> &nbsp; {{ constructor.position }}
            </v-chip>
            <v-chip v-else>
              <v-icon>mdi-podium</v-icon> &nbsp; {{ constructor.position }}
            </v-chip>
            <v-chip>
              <v-icon>mdi-counter</v-icon> &nbsp; {{ constructor.points }} points
            </v-chip>
            <v-chip>
              <v-icon>mdi-trophy</v-icon> &nbsp; {{ constructor.wins }} wins
            </v-chip>
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
import {getColor} from "@/plugins/services";

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
        .get('current/constructorStandings.json',{
          baseURL : process.env.VUE_APP_BASE_URL
        })
        .then((response) => {
          this.loading = false
          this.constructors = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        });
  },
  methods: {
    getImgUrl(picture) {
      return require('../assets/img/cars/' + picture + '.png')
    },
    getColor,
  }
}
</script>

<style scoped>

</style>
