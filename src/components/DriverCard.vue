<template>

  <v-card
      class="mx-auto my-4 "
      width="500"
      rounded="xl"
  >
    <div class="d-flex">

      <v-avatar
          v-if="$vuetify.breakpoint.smAndUp"
          class="rounded-l-xl rounded-0"
          width="206"
          height="206"
      >
        <v-img

            :class="getColor(ecurie)"
            :src="getImgUrl(driverId)"></v-img>
      </v-avatar>
      <div class="flex flex-shrink-1">

        <v-card-title
            class="text-h5"
        >{{ fname }} {{ lname }}
        </v-card-title>

        <v-card-text>{{ ecurie }}</v-card-text>

        <v-divider></v-divider>

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
              <v-icon>mdi-counter</v-icon> &nbsp; {{ points }} points
            </v-chip>
          </v-chip-group>

        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 3,
  }),
  props: ['fname', 'lname', 'nationality', 'ecurie', 'driverId', 'wins', 'position', 'points'],

  methods: {
    reserve() {
      this.loading = true


      // setTimeout(() => (this.loading = false), 2000)
    },
    getImgUrl(picture) {
      return require('../assets/img/drivers/' + picture + '.png')
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

  },
}
</script>
<style scoped>


</style>
