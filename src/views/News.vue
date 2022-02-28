<template>
  <v-container fluid>

    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card height="800" class="overflow-auto">
          <Timeline id="f1" sourceType="profile" :options="options"/>
        </v-card>
      </v-col>


    </v-row>

  </v-container>

</template>

<script>
import { Timeline } from 'vue-tweet-embed'

export default {
  components : {Timeline},
  name: "News",
  data (){
    return{
      options :{
        theme: 'dark',
        tweetLimit : '8'
      }
    }
  }
}
</script>

<style scoped>

</style>
