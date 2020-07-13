<template>
  <div id="header">
    <v-app-bar color="white" absolute dense scroll-target="#scrolling-techniques">
      <v-spacer />
      <router-link to="/">
        <v-img
          class="mx-2"
          :src="require('@/assets/instagram_logo.png')"
          gradient
          max-width="100px"
          max-height="50px"
          contain
        ></v-img>
      </router-link>

      <div class="d-flex align-center" id="search">
        <v-card color="grey lighten-4" outlined width="300px" class="pa-1 ml-2">
          <v-layout>
            <v-flex class="align-center">
              <v-icon color="grey">mdi-magnify</v-icon>
              <span class="ml-2 grey--text">Search</span>
            </v-flex>
          </v-layout>
        </v-card>
      </div>

      <v-spacer></v-spacer>
      <div>
        <router-link to="/">
          <v-btn icon>
            <v-icon color="black">mdi-home-outline</v-icon>
          </v-btn>
        </router-link>
        <v-btn icon>
          <v-icon color="black">mdi-compass-outline</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon color="black">mdi-heart-outline</v-icon>
        </v-btn>

        <router-link
          class="name"
          style="text-decoration: none; color: inherit;"
          :to="'/profile/' + username"
        >
          <v-btn icon>
            <v-img
              contain
              width="28"
              height="28"
              class="rounded-card"
              aspect-ratio="1.7778"
              :src="userInfo.image"
            ></v-img>
          </v-btn>
        </router-link>
      </div>

      <v-spacer />
    </v-app-bar>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.rounded-card {
  border-radius: 150px;
  margin-left: 38%;
  margin-top: 8%;
}
#search {
  padding-left: 200px;
  height: 120px;
}
input {
  height: 20px;
}
#header {
  padding-bottom: 40px;
}

#logo {
  padding-left: 30px;
}
#icons {
  padding-right: 120px;
}
@media screen and (max-width: 600px) {
  #search {
    visibility: hidden;
    clear: both;
    float: left;
    margin: 10px auto 5px 20px;
    width: 28%;
    display: none;
  }
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["userInfo", "userPosts"]),
  methods: {
    ...mapActions(["getUserInfo", "getuserPosts", "getTaggedPosts", "getIgtv"])
  },
  data() {
    return {
      username: ""
    };
  },
  created() {
    this.getUserInfo().then(() => {
      
      this.username = this.userInfo.name.split(" ")[0];
      console.log(this.username)
      
    });
  },
  // userInfo.name.split(' ')[0]
  name: "Header"
};
</script>