 <template>
<v-container>
  <div class="text-center mb-4">
     <span class="title font-weight-light grey--text">SEARCH & ADD SERVERS FOR AUDIT</span>
    
  </div>
  <v-layout>
    <v-flex md-5>
      <v-btn class="mt-3" tile color="#1565C0" dark>ADD TO AUDIT</v-btn>
    </v-flex>
    <v-flex md-5>
        <v-text-field
        v-model="search"
        append-icon="mdi-database-search"
        label="Search"
        single-line
        hide-details
        class="pb-3"
      ></v-text-field>
    </v-flex>
  
      </v-layout>
  

  
    <v-flex md-10>
      <template>
  
</template>
      <template>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          :single-select="singleSelect"
          item-key="name"
          show-select
          class="elevation-1 font-weight-bold"
          :search="search"

         
        >
        </v-data-table>
      </template>
  
    </v-flex>
  </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        singleSelect: false,
        search: '',
        selected: [],
        headers: [
          {
            text: 'HOSTNAME',
            align: 'left',
            value: 'name',
          },
          { text: 'IP ADDRESS', value: 'calories' },
          { text: 'APPLICATION', value: 'fat' },
          { text: 'ENVIRONMENT', value: 'carbs' },
          { text: 'DATABASE', value: 'protein' },
          
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  methods: {
    logData(){
      console.log(this.selected);
    }
  },
  }
</script>
