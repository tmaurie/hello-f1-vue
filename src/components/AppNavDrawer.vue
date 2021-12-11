<template>
  <div>
    <v-navigation-drawer
        app
        v-model="drawer"
        temporary
        width="auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Hello-F1
          </v-list-item-title>
          <v-list-item-subtitle>
            Menu
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list
          nav
      >

        <v-list-item-group
            v-model="group"
            active-class="primary--text"
        >

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

        </v-list-item-group>

      </v-list>
      <v-divider></v-divider>
      <v-list-item to="/news">
        <v-list-item-icon>
          <v-icon>mdi-newspaper</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Latest news</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block href="https://github.com/tmaurie/hello-f1-vue" target="_blank">
            <v-icon>mdi-github</v-icon>
            Github
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
        app
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title id="title--f1">Hello F1</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">

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
#title--f1{
  font-family: "Grenze", sans-serif;
  font-size: 2.5rem;
}
</style>
