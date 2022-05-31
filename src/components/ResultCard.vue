<template>

  <v-card elevation="6" class="mt-8 pa-3" v-if="!loading" rounded="lg">
    <v-row justify="center">
      <h1>{{ title }}</h1>
    </v-row>

    <v-card-title style="justify-content: center">
      <v-chip-group>
        <v-chip color="primary"> {{ lastRace.raceName }}</v-chip>
        <v-chip outlined> {{ lastRace.Circuit.circuitName }}</v-chip>
      </v-chip-group>
    </v-card-title>

    <v-row justify="center">
      <v-card
          class="ma-2"
          width="300"
          elevation="1"
          rounded="lg"
          style="border: 2px solid #D2AF1AFF"
      >
        <v-list-item three-line>
          <v-list-item-avatar>
            <v-img
                :class="getColor(results[0].Constructor.name)"
                :src="getDriverImg(results[0].Driver.driverId)">
            </v-img>
          </v-list-item-avatar>
          <v-list-item-content>

            <v-list-item-title class=" mb-1">
              {{ results[0].Driver.givenName }} {{ results[0].Driver.familyName }} <v-chip :color="getColor(results[0].Constructor.name)" small>{{ results[0].Constructor.name }}</v-chip>
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-chip>
                <v-icon left>mdi-timer</v-icon>
                {{ results[0].Time.time }}
              </v-chip>
              <v-chip class="ml-2">
                <v-icon left>mdi-counter</v-icon>
                {{ results[0].points }}
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>


    <v-row justify="center">
      <v-card
          class="ma-2"
          width="300"
          elevation="1"
          rounded="lg"
          style="border: 2px solid #BDBDBBFF"
      >
        <v-list-item three-line>
          <v-list-item-avatar

          >
            <v-img
                :class="getColor(results[1].Constructor.name)"
                :src="getDriverImg(results[1].Driver.driverId)">
            </v-img>
          </v-list-item-avatar>
          <v-list-item-content>

            <v-list-item-title class=" mb-1">
              {{ results[1].Driver.givenName }} {{ results[1].Driver.familyName }} <v-chip :color="getColor(results[1].Constructor.name)" small>{{ results[1].Constructor.name }}</v-chip>
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-chip>
                <v-icon left>mdi-timer</v-icon>
                {{ results[1].Time.time }}
              </v-chip>
              <v-chip class="ml-2">
                <v-icon left>mdi-counter</v-icon>
                {{ results[1].points }}
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-card
          class="ma-2"
          width="300"
          elevation="1"
          rounded="lg"
          style="border: 2px solid #b6822f"
      >
        <v-list-item three-line>
          <v-list-item-avatar>
            <v-img
                :class="getColor(results[2].Constructor.name)"
                :src="getDriverImg(results[2].Driver.driverId)">
            </v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class=" mb-1">
              {{ results[2].Driver.givenName }} {{ results[2].Driver.familyName }} <v-chip :color="getColor(results[2].Constructor.name)" small>{{ results[2].Constructor.name }}</v-chip>
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-chip>
                <v-icon left>mdi-timer</v-icon>
                {{ results[2].Time.time }}
              </v-chip>
              <v-chip class="ml-2">
                <v-icon left>mdi-counter</v-icon>
                {{ results[2].points }}
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>

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
            v-for="(item,idx) in results.slice(3)"
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
            <v-chip :color="item.FastestLap !== undefined && item.FastestLap.rank === '1' ? 'purple' : ''">
              {{ item.Time.time }}
            </v-chip>
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
    results: {},
    title: null
  },
  methods: {


    getDriverImg(picture){
      try {
        return require('../assets/img/drivers/2022/' + picture + '.png')
      } catch (e) {
        return null
      }
    },
    getImgUrl(picture) {
      try {
        return require('../assets/img/tracks/' + picture + '.png')
      } catch (e) {
        return null
      }
    },
    getColor,

  }
}
</script>
