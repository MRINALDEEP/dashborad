<template>
  <v-container>
 
          <div class="text-center mb-4">
        
     <span class="title font-weight-regular grey--text">GENERATED REPORTS</span>
     <v-divider></v-divider>
    
    </div>

  <v-layout>
        <AggReport/> 
     
         </v-layout>
  </v-container>
</template>\
<script>
  import AggReport from '../components/AggReport'
  export default {
    components: {
      AggReport,
  },
    data () {
      return {}
    },
  }
</script>