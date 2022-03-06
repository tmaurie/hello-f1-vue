<template>
  <div>
    <v-navigation-drawer
        app
        floating
        class="rounded-lg"
        :class='{ "my-4": $vuetify.breakpoint.mdAndUp, "my-2": $vuetify.breakpoint.smAndDown, "mx-4": $vuetify.breakpoint.mdAndUp && drawer, "mx-2": $vuetify.breakpoint.smAndDown && drawer }'
        overlay-opacity=".75"
        v-model="drawer"
        :width='$vuetify.breakpoint.smAndDown ? 310 : 360'
        :height='`calc(100vh - ${$vuetify.breakpoint.smAndDown ? "16" : "32"}px)`'
        temporary
        color="primary"
        dark
    >

      <v-list
          nav
      >

        <v-list-item-group
            v-model="group"
            active-class="primary"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.route"
          >


            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item to="/news">
            <v-list-item-icon>
              <v-icon>mdi-newspaper</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Latest news</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-list>
      <v-list-item-group active-class="primary">

      </v-list-item-group>

      <template v-slot:append>
        <div class="pa-2 ">
          <v-btn block light href="https://github.com/tmaurie/hello-f1-vue" target="_blank">
            <v-icon>mdi-github</v-icon>
            Github
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
        app
        elevate-on-scroll
    >

      <v-app-bar-nav-icon aria-label="Nav button" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title id="title--f1">hello f1</v-toolbar-title>

      <div v-if="$vuetify.breakpoint.lgAndUp">

          <v-btn to="/" class="ml-4" text rounded color="primary">
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn
              v-for="(item, i) in items"
              :key="i"
              :to="item.route"
              class="ml-4"
              text

          >
            <v-icon left>{{item.icon}}</v-icon>
            {{ item.text }}
          </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn aria-label="Theme button" icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">

        <v-icon>
          {{ $vuetify.theme.dark ? "mdi-white-balance-sunny" : "mdi-brightness-3" }}
        </v-icon>

      </v-btn>

    </v-app-bar>


  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    selectedItem: 0,
    items: [
      {text: 'Drivers Standings', icon: 'mdi-racing-helmet', route: '/driverStandings'},
      {text: 'Constructor Standings', icon: 'mdi-car-sports', route: '/constructorStandings'},
      {text: 'Calendar', icon: 'mdi-calendar', route: '/calendar'},
      {text: 'Seasons', icon: 'mdi-calendar-multiple', route: '/seasons'},
    ],
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
<style>
#title--f1 {
  /*font-family: "Grenze", sans-serif;*/
  font-size: 2.5rem;
  font-weight: bold;
  color: #FF385C;
}
</style>
