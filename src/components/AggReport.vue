<template>
  <v-card
    max-width="344"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"><img src="@/assets/marklogic-symbol-blue.jpg" alt=""></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">REPORT</v-list-item-title>
        <v-list-item-subtitle>BY RAVI BANKA</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-container class="chart-color">
      <v-layout>
        <v-flex>
           <Chart></Chart>
        </v-flex>
      </v-layout>
    </v-container>
 
  

    <v-card-text>

             <v-row justify="space-around">
                    <span class="font-weight-black">
                    <v-icon small color="#006A94">mdi-calendar-clock</v-icon>
                    12/12/2019 12:20:30</span>
                    <span class="font-weight-black"><v-icon small color="#006A94">mdi-server</v-icon> No Of Server: 9</span>
            </v-row>

    </v-card-text>

    <v-card-actions>
      <v-btn
        tile outlined
        color="#446795"
      >
        Details
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn tile outlined
        color="#b43757"
      >
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  import Chart from '../components/Chart'
  export default {
    components: {
      Chart,
  },
    data () {
      return {}
    },
  }
</script>
<style scoped>
.chart-color {
    background-color: #bebebb !important;
}
</style>