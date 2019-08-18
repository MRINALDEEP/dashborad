<template>
<div>
  <v-container fluid grid-list-md>
    <v-layout class="mb-3" >
        <v-flex class="d-flex justify-start pt-3" > <span class="title font-weight-light grey--text">SERVERS MARKED FOR AUDIT</span></v-flex>
        
        <v-flex class="d-flex justify-end "> <v-btn tile outlined color="blue darken-2" dark @click="overlay = !overlay">ADD SERVER</v-btn></v-flex>
    </v-layout>
    <v-layout>
     <v-flex d-flex class="justify-center md-4"  v-for="server in servers" :key='server.hostname'>
         <ServerDetail :server=server />
      </v-flex>  
    </v-layout>      
    </v-container>
    </div>
</template>

<script>
import ServerDetail from '../components/ServerDetail'
import Search from '../components/Search'
export default {
components: {
    ServerDetail,
    Search
},
data: function() {
    return {
            overlay: false,
            dialog: false,
            hostname: '',
            application: null,
            applications: ['Credit Store','Trade Store','Trade Finance Store'],
            database: null,
            databases: ['MarkLogic','MongoDb'],
            environment: null,
            environments: ['PR','PR-DR','ET','ET-DR'],
            enable_for_audit: false,
            servers:[
            {
                'hostname':'Infvn102-2@nl.abnamro.com',
                'application':'Trade Store',
                'environment':'PR-DR',
                'database':'MarkLogic',
                'marked_for_audit': true
            },
            {
                'hostname':'Infvn202-2@nl.abnamro.com',
                'application':'Credit Store',
                'environment':'PR',
                'database':'MongoDb',
                'marked_for_audit': false
            },
                {
                'hostname':'Infvn105-2@nl.abnamro.com',
                'application':'Trade Store',
                'environment':'PR-DR',
                'database':'MarkLogic',
                'marked_for_audit': true
            },
            {
                'hostname':'Infvn202-5@nl.abnamro.com',
                'application':'Credit Store',
                'environment':'PR',
                'database':'MongoDb',
                'marked_for_audit': false
            },
            
            ]
        }
    },
    }
</script>
<style scoped>
.server.MongoDb{
    border-left: 4px solid #A5D6A7;
    padding: 0;
}
.server.MarkLogic{
    border-left: 4px solid #EF9A9A;
    padding: 0;
}
</style>