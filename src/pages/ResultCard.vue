<template>
  <v-card class="mt-8" v-if="!loading">
    <v-row justify="center">
      <h1 id="">Last Race Results</h1>
    </v-row>

    <v-card-title>

      <v-img max-width="90" :src="getImgUrl(lastRace.Circuit.circuitId)"/>
      <h2> {{ lastRace.raceName }}</h2> &nbsp;| {{ lastRace.Circuit.circuitName }}


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
            <v-chip :color="item.FastestLap !== undefined && item.FastestLap.rank === '1' ? 'purple' : ''">{{ item.Time.time }}</v-chip>
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
import {getColor} from "@/plugins/services";

export default {
  name: 'ResultCard',
  props: {
    lastRace: {},
    loading: {},
    results: {}
  },
  methods :{

    getImgUrl(picture) {
      return require('../assets/img/tracks/' + picture + '.png') || ''
    },
    getColor
  }
}
</script>
