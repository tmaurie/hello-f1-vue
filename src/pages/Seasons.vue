<template>
  <v-container>
    <v-banner>
      <span class="text-h4 text-center">Seasons</span>
    </v-banner>

    <v-col
        class="d-flex"
        cols="4"
    >
      <v-select
          v-model="model"
          label="Select a season"
          outlined
          :items="seasons"
          item-text="season"
          item-value="season"
          @input="getSeason"
      ></v-select>

    </v-col>
    <v-container v-if="model">
      <v-chip-group>
        <v-chip  v-if="drivers[0] && drivers[0].points > 0">
          <v-icon>mdi-trophy</v-icon> World driver champion : {{drivers[0].Driver.givenName}} {{drivers[0].Driver.familyName}}

        </v-chip>
        <v-chip v-if="constructors[0] && constructors[0].points > 0">
          <v-icon>mdi-trophy-award</v-icon> World constructor champion : {{constructors[0].Constructor.name}}
        </v-chip>
      </v-chip-group>

      <v-row  no-gutters justify="start">

        <v-hover
            v-for="(race, idx) in season"
            :key="idx"
            v-slot:default="{ hover }"

        >
          <v-card
              flat width="300"
              :color="hover  ?  'primary' : 'transparent'"
          >
            <v-container fluid class="pa-1 ">
              <v-row>
                <v-col cols="12">

                  <v-card
                      elevation="10"
                  >
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">

                          {{ new Date(race.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        }) }}
                        </div>
                        <v-list-item-title class="text-h5 mb-1">
                          {{ race.raceName.replace('Grand Prix', 'GP') }}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{ race.Circuit.circuitName }}</v-list-item-subtitle>
                      </v-list-item-content>


                    </v-list-item>

                    <v-card-actions>
                      <v-btn
                          outlined
                          rounded
                          text
                          color="primary"
                      >
                        Round {{ race.round }}
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-hover>

      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Seasons",
  data() {
    return {
      seasons: [],
      season: Object,
      drivers: [],
      constructors: [],
      model: null,
    }
  },
  mounted() {
    this.getSeasons()
  },
  methods: {
    getSeasons() {
      axios.get('/seasons.json', {
        baseURL: process.env.VUE_APP_BASE_URL,
        params: {
          limit: 100
        }
      }).then((response) => {
        this.seasons = response.data.MRData.SeasonTable.Seasons
      })
    },
    getSeason(year) {
      axios.get(`${year}.json`, {
        baseURL: process.env.VUE_APP_BASE_URL
      }).then((response) => {
        this.season = response.data.MRData.RaceTable.Races
      })
      axios.get(`${year}/constructorStandings.json`, {
        baseURL: process.env.VUE_APP_BASE_URL
      }).then((response) => {
        this.constructors = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      })
      axios.get(`${year}/driverStandings.json`, {
        baseURL: process.env.VUE_APP_BASE_URL
      }).then((response) => {
        this.drivers = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      })
    }
  }
}
</script>

<style scoped>

</style>
