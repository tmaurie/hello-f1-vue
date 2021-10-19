<template>
  <v-card
      :loading="loading"
      class="mx-auto my-12"
      width="374"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>


      <v-img
          max-width="206" width="206"
          height="206"
          :lazy-src="getImgUrl(driverId)"
          :src="getImgUrl(driverId)"
      >

        <template v-slot:placeholder>
          <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
          >
            <v-progress-circular
                indeterminate
                color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>



    <v-card-title>{{fname}} {{lname}}</v-card-title>

    <v-card-text>


      <div class="text-subtitle-1">
        {{ecurie}}
      </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>

      <v-chip-group>
        <v-chip style="background-color: #f6cf3e" v-if="position==='1'">
          <v-icon >mdi-podium-gold</v-icon>  &nbsp;  {{position}}
        </v-chip>
        <v-chip style="background-color: #bdbdbb" v-else-if="position==='2'">
          <v-icon >mdi-podium-silver</v-icon>  &nbsp;  {{position}}
        </v-chip>
        <v-chip style="background-color: #b6822f" v-else-if="position==='3'">
          <v-icon >mdi-podium-bronze</v-icon>  &nbsp;  {{position}}
        </v-chip>
        <v-chip  v-else>
          <v-icon >mdi-podium</v-icon>  &nbsp;  {{position}}
        </v-chip>
        <v-chip>
          <v-icon>mdi-trophy</v-icon>  &nbsp;  {{wins}} wins
        </v-chip>
        <v-chip>
          <v-icon>mdi-counter</v-icon> &nbsp; {{points}} points
        </v-chip>

      </v-chip-group>

    </v-card-title>




  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 3,
  }),
  props : ['fname', 'lname', 'nationality','ecurie', 'driverId','wins','position', 'points'],

  methods: {
    reserve () {
      this.loading = true

      // setTimeout(() => (this.loading = false), 2000)
    },
    getImgUrl(picture) {
      // const images = require.context('../assets/img/', false, /\.png$/);
      // return images('./' + picture + ".png")
      return  require('../assets/img/drivers/'+picture+'.png')
    },
    imageUrlAlt(event) {
      event.target.src = require('../assets/img/logo.png')
    }
  },
}
</script>
<style scoped>

</style>
