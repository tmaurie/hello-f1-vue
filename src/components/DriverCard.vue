<template>

  <v-hover
      v-slot:default="{ hover }"

  >
    <v-card
        flat width="500"
        rounded="lg"
        :color="hover ? getColor(driver.Constructors[0].name): 'transparent'"
    >
      <v-container fluid class="pa-1 ">
        <v-row>
          <v-col cols="12">
            <v-card elevation="10" rounded="lg">
              <div class="d-flex flex-no-wrap justify-space-between">

                <div>
                  <v-card-title>
                      <h5>{{ driver.Driver.givenName }} {{ driver.Driver.familyName }}</h5>
                  </v-card-title>

                  <v-card-subtitle v-text="driver.Constructors[0].name"></v-card-subtitle>

                  <v-card-actions>
                    <v-chip-group>
                      <v-chip style="background-color: rgba(210,175,26,0.83)" v-if="driver.position==='1'">
                        <v-icon>mdi-podium-gold</v-icon> &nbsp; {{ driver.position }}
                      </v-chip>
                      <v-chip style="background-color: rgba(189,189,187,0.74)" v-else-if="driver.position==='2'">
                        <v-icon>mdi-podium-silver</v-icon> &nbsp; {{ driver.position }}
                      </v-chip>
                      <v-chip style="background-color: #b6822f" v-else-if="driver.position==='3'">
                        <v-icon>mdi-podium-bronze</v-icon> &nbsp; {{ driver.position }}
                      </v-chip>
                      <v-chip v-else>
                        <v-icon>mdi-podium</v-icon> &nbsp; {{ driver.position }}
                      </v-chip>
                      <v-chip>
                        <v-icon>mdi-trophy</v-icon> &nbsp; {{ driver.wins }} wins
                      </v-chip>
                      <v-chip>
                        <v-icon>mdi-counter</v-icon> &nbsp; {{ driver.points }} pts
                      </v-chip>
                    </v-chip-group>

                  </v-card-actions>
                </div>
                <v-avatar
                    class="ma-3"
                    :size="$vuetify.breakpoint.smAndUp ? 150 : 70"
                    rounded="lg"
                >
                  <v-img
                      :class="getColor(driver.Constructors[0].name)"
                      :src="getImgUrl(driver.Driver.driverId)"></v-img>
                </v-avatar>

              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-hover>
</template>

<script>
import {getColor} from "@/plugins/services";

export default {
  data: () => ({
    loading: false,
    selection: 3,
  }),
  props: {
    driver: {type: Object, default: undefined}
  },

  methods: {
    reserve() {
      this.loading = true
    },
    getImgUrl(picture) {
      return require('../assets/img/drivers/' + picture + '.png')
    },
    getColor,

  },
}
</script>
<style scoped>


</style>
