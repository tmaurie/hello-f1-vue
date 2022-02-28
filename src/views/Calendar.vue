<template>

  <v-container>
    <v-banner>
      <span class="text-h4 text-center">Calendar</span>
    </v-banner>
    <v-subheader>Click on a race to see results</v-subheader>


    <v-timeline
        dense
        v-if="$vuetify.breakpoint.xsOnly">
      <v-timeline-item
          v-for="(race, idx) in races"
          :key="idx"
          fill-dot
          small


      >
        <v-card
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
                {{ race.date }}
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
                disabled
            >
              Round {{ race.round }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>

    </v-timeline>

    <v-row no-gutters justify="center"  v-else>


      <v-hover
          v-for="(race, idx) in races"
          :key="idx"
          v-slot:default="{ hover }"

      >
        <v-card
            flat width="400" :to="'results/' + race.round" append
            :color="hover  ?  'primary' : 'transparent'"
        >
          <v-container  fluid class="pa-1 ">
            <v-row >
              <v-col cols="12">

                <v-card
                    elevation="10"
                >
                  <v-list-item three-line>
                    <v-img
                        max-width="90"
                        class="mr-3"
                        :src="getImgUrl(race.Circuit.circuitId)"
                    ></v-img>
                    <v-list-item-content>
                      <div class="text-overline mb-4">
                        {{ race.date }}
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
        .get('current/races.json', {
          baseURL : process.env.VUE_APP_BASE_URL
        })
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
