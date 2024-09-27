<template>
   <v-app id="inspire">
      <v-navigation-drawer
      v-model="drawer"
      app
      >
         <v-list dense>
            <v-subheader>COMPONENTS</v-subheader>
               <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.to"
               >
                  <v-list-item-icon>
                     <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                     <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
         </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
         <v-btn @click="drawer = !drawer" icon>
            <v-icon>{{drawer == false ? open : close }}</v-icon>
         </v-btn>
         <v-toolbar-title>Vue 2 - Laravel 8 SPA App</v-toolbar-title>
      </v-app-bar>

      <v-main class="ma-2">
         <router-view></router-view>
      </v-main>
   </v-app>
</template>

<script>
export default {
   data: () => ({ 
      drawer: false,
      open: 'mdi-menu',
      close: 'mdi-menu-open',
      items:[
         {text:'Home', icon:'mdi-home', to:'home'},
         {text:'About', icon:'mdi-information-variant', to:'about'}
      ]
   })
}
</script>

<style>
   .v-application p {
      margin: 0 !important;
   }
</style>