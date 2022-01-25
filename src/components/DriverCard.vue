<template>

  <v-hover
      v-slot:default="{ hover }"

  >
    <v-card
        flat width="500"
        :color="hover ? getColor(ecurie): 'transparent'"
    >
      <v-container fluid class="pa-1 ">
        <v-row>
          <v-col cols="12">
            <v-card elevation="10">
              <div class="d-flex flex-no-wrap justify-space-between">

                <div>
                  <v-card-title
                      class="text-h5"
                  >{{ fname }} {{ lname }}
                  </v-card-title>

                  <v-card-subtitle v-text="ecurie"></v-card-subtitle>

                  <v-card-actions >
                    <v-chip-group >
                      <v-chip style="background-color: #f6cf3e" v-if="position==='1'">
                        <v-icon>mdi-podium-gold</v-icon> &nbsp; {{ position }}
                      </v-chip>
                      <v-chip style="background-color: #bdbdbb" v-else-if="position==='2'">
                        <v-icon>mdi-podium-silver</v-icon> &nbsp; {{ position }}
                      </v-chip>
                      <v-chip style="background-color: #b6822f" v-else-if="position==='3'">
                        <v-icon>mdi-podium-bronze</v-icon> &nbsp; {{ position }}
                      </v-chip>
                      <v-chip v-else>
                        <v-icon>mdi-podium</v-icon> &nbsp; {{ position }}
                      </v-chip>
                      <v-chip>
                        <v-icon>mdi-trophy</v-icon> &nbsp; {{ wins }} wins
                      </v-chip>
                      <v-chip>
                        <v-icon>mdi-counter</v-icon> &nbsp; {{ points }} pts
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
                      :class="getColor(ecurie)"
                      :src="getImgUrl(driverId)"></v-img>
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
  props: ['fname', 'lname', 'nationality', 'ecurie', 'driverId', 'wins', 'position', 'points'],

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
