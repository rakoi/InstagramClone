<template>
  <div class="home">
    <Header></Header>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <Stories class="stories"></Stories>
          </v-col>
          <v-col cols="12">
           <div>
            <FeedItem  v-for="newsFeedItem in newsFeed" :key="newsFeedItem.id" :myitem=newsFeedItem class="feeditem" />
           </div>
           </v-col>
           
        </v-row>
      </v-col>
      <v-col cols="4">
        <div class="suggestions">
          <v-row>
            <v-col cols="2">
              <v-img
                contain
                width="50"
                height="50"
                class="rounded-card"
                aspect-ratio="1.7778"
                src="https://rickandmortyapi.com/api/character/avatar/23.jpeg"
              ></v-img>
            </v-col>
            <v-col cols="6" sm="6">
              <v-row>
                <v-col cols="8">
                  <b>ricksanchez</b>
                  <br />
                  <small class="name">Rick Sanchez</small>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="8">
              <small>Suggestions for you</small>
            </v-col>
            <v-col cols="4">
              <b>
                <small>See All</small>
              </b>
            </v-col>
          </v-row>
          <Suggestions />
        </div>
      </v-col>
    </v-row>
  </div>
</template>


<style scoped>
.name {
  color: #8e8e8e;
}
.suggestions {
  padding-top: 80px;
}
.stories {
  padding-top: 30px;
}
.feedItem {
  padding-top: 30px;
}
.rounded-card {
  border-radius: 150px;
}
</style>
<script>
import Header from "../components/Layouts/Header";
import Stories from "../components/Stories";
import FeedItem from "../components/FeedItem";
import Suggestions from "../components/Suggestions";
import { mapActions, mapGetters } from "vuex";

export default {

  computed:mapGetters(["newsFeed"]),

  data(){
    return{
        newsFeedItems:{}
    }
  },
   created(){
    let page=1
    this.getNewsFeed(page).then(()=>{
      this.newsFeedItems=this.newsFeed;
         console.log(this.newsFeedItems)
    })
   
       
  },

  methods:{
      ...mapActions(['getNewsFeed'])
  },
 

  components: {
    Header,
    Stories,
    FeedItem,
    Suggestions
  },
  data() {
    return {};
  }
};
</script>