<template>
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
          <td v-if="$vuetify.breakpoint.xsOnly">{{ item.Driver.code }}</td>
          <td v-else>{{ item.Driver.familyName }}</td>
          <td>
            <v-chip
                :color="getColor(item.Constructor.name)"
                dark
            >
              {{ item.Constructor.name }}
            </v-chip>
          </td>
          <td v-if="item.Time">
            <v-chip :color="item.FastestLap.rank === '1' ? 'purple' : ''">{{ item.Time.time }}</v-chip>
          </td>
          <td v-else>{{ item.status }}</td>
          <td>{{ item.points }}</td>
        </tr>

        </tbody>
      </template>

    </v-simple-table>

  </v-card>
</template>
<script>
export default {
  name: 'ResultCard',
  props: {
    lastRace: {},
    loading: {},
    results: {}
  },
  methods :{

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
