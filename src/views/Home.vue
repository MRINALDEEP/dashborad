<template>
  <div>
  <Carosuel/>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm6 md3>
        <Servers/>
      </v-flex>
      <v-flex  xs12 sm6 md3>
       
            <Audits/>
         
         
        
      </v-flex>
      <v-flex xs12 sm6 md3 child-flex>
        <Reports/>
      </v-flex>
      <v-flex  xs12 sm6 md3>
        <Activities/>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>

import Activities from '../components/Activities'
import Servers from '../components/Servers'
import Audits from '../components/Audits'
import Reports from '../components/Reports'
import Carosuel from '../components/Carosuel'


export default {
  components: {
    Activities,
    Servers,
    Audits,
    Reports,
    Carosuel,

  },
  data: () => ({
     colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    }),
};
</script>
