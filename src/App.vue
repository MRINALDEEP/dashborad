<template>
  <v-app>
    <template>

      <div>

        <v-toolbar fixed dark class="blue darken-3" >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>
            <span class='font-weight-regular'>NAAS</span>
            <span class='mx-2 caption font-weight-light'>NOSQL AS A SERVICE</span>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items >
            <v-btn text>Link 1</v-btn>
          <v-divider
        inset
        vertical
      ></v-divider>
            <v-btn text>Link 2</v-btn>
<v-divider
        inset
        vertical
      ></v-divider>
            <v-btn text>Link 3</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </div>
    </template>
    <template>
  <v-sheet
    
    class="overflow-hidden"
  >
    <div style="min-height: 600px;background-color: #E0E0E0;">

      <vue-page-transition name="fade-in-right">
      <router-view></router-view>
      </vue-page-transition>

    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="link in links" :key=link.text route :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>
</v-app>
</template>


<script>


export default {
  name: 'App',
  components: {
   
  },
  data: () => ({
    drawer: false,
 
      links: [
                {
                icon:'mdi-view-dashboard',
                text: 'DASHBOARD',
                route: '/'
                },
                {
                icon:'mdi-laptop',
                text: 'SERVERS',
                route: '/server'
                },
                {
                icon:'mdi-clipboard-text',
                text: 'AUDIT',
                route: '/audits'
                },
                {
                icon:'mdi-file-document-box-multiple',
                text: 'REPORT',
                route: '/searchServer'
                },
                ],
  }),
};
</script>
<style>
.v-data-table th{
      font-size: 15px !important;
color: #727a7c !important;
}
.v-data-table td {
    font-size: 14px !important;
    color:#9c9b98 !important;
}
</style>