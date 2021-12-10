<template>
  <div>
    <v-navigation-drawer
        app
        v-model="drawer"
        temporary
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
            active-class="primary--text "
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
        color="primary"
        dark
        shrink-on-scroll
        prominent
        fade-img-on-scroll
        :src="require('@/assets/img/f1-banner2.jpg')"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Hello-F1</v-toolbar-title>
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
