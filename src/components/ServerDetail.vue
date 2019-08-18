
<template>
  <v-card
    outlined 
    class="card-border"
    max-width="344"
  
     
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-subtitle class="overline blue--text"><v-icon color="blue darken-1" class="mr-2">mdi-dns</v-icon>{{server.hostname}}</v-list-item-subtitle>
        <v-divider></v-divider>
        <div class="overline mb-1 blue--text" ><v-icon color="blue darken-1" class="mr-2">mdi-application</v-icon>{{server.application}}</div>
        
        
        <v-list-item-subtitle class="overline blue--text"><v-icon color="blue darken-1" class="mr-2">mdi-ip-network</v-icon>10.20.30.48</v-list-item-subtitle>
        
        <v-list-item-subtitle class="overline blue--text"><v-icon color="blue darken-1" class="mr-2">mdi-database-settings</v-icon>{{server.environment}}</v-list-item-subtitle>
      
         <div class="text-center caption">
          <v-btn text icon color="red lighten-3"><v-icon>mdi-delete-circle-outline</v-icon><span class="font-weight-light">Delete</span></v-btn>

          </v-btn>
        </div>
        
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="50"
        color="grey"
        
      ><img src="@/assets/marklogic-symbol-blue.jpg" alt="">
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>

export default {
props: ['server'],
data: function() {
    return {

    }
},
}
</script>
<style scoped>

</style>