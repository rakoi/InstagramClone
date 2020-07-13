<template>
    <div>
          <v-row v-for="Suggestion in Suggestions" :key="Suggestion.id">
            <v-col cols="2">
              <v-img
                contain
                width="40"
                height="40"
                class="rounded-card"
                aspect-ratio="1.7778"
                :src="Suggestion.image"
              ></v-img>
            </v-col>
            <v-col cols="6" sm="6">
              <v-row>
                <v-col cols="8">
                    <router-link   style="text-decoration: none; color: inherit;"  :to="'/profile/' + Suggestion.name">
                      <b>{{Suggestion.name}}</b>
                    
                    </router-link>
                 
                </v-col>
                <v-col cols="4">
                     
                </v-col>
              </v-row>
            </v-col>
          </v-row>
    </div>    
</template>
<style scoped>
.rounded-card {
  border-radius: 150px;
}
</style>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {

  computed:mapGetters(['Suggestions']),
  methods:{
    ...mapActions(['getSuggestions'])
  },
  data(){
    return{

    }
  },
  created(){
    this.getSuggestions();
  }
    
}
</script>