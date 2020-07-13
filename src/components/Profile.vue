<template>
  <div id="profile">
    <Header />
    <div class="userInfo">
      <v-container>
        <v-card elevation="0" height="250" max-height="320">
          <v-row>
            <v-col cols="4" sm="4">
              <v-img
                contain
                width="150"
                height="150"
                class="rounded-card"
                aspect-ratio="1.7778"
                :src="userInfo.image"
              ></v-img>
            </v-col>
            <div class="user_details">
              <v-col sm="8" cols="12">
                <span class="name">{{userInfo.name}}</span>
                <v-btn small class="info block followbtn">Follow</v-btn>
                <v-icon color="black">mdi-dots-vertical</v-icon>
              </v-col>
              <v-row>
                <v-col sm="12" cols="12">
                  <span>
                    <b>2221</b> Posts
                  </span>
                  <span class="userinfo">
                    <b>2221</b> Followers
                  </span>
                  <span class="userinfo">
                    <b>0</b> Following
                  </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  sm="12"
                  cols="12"
                >This is rick sanhez c113 from earth who loves inter dimensional cable</v-col>
              </v-row>
            </div>
          </v-row>
        </v-card>
        <hr />
      </v-container>
    </div>
    <div class="userPosts">
      <v-row>
        <v-col></v-col>
        <v-col>
          <v-tabs>
            <v-tab @click="getMyPosts()">
              <v-icon color="grey">mdi-grid</v-icon>POSTS
            </v-tab>
            <v-tab @click="getLiveVideos()">
              <v-icon color="grey">mdi-television</v-icon>IGTV
            </v-tab>
            <v-tab @click="getTaggedPhotos()">
              <v-icon color="grey">mdi-account-box</v-icon>TAGGED
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="posts">
            <v-row v-if="!this.userPosts">
              <v-col></v-col>
              <v-col>
                <v-icon color="grey">mdi-account-circle-outline</v-icon>No Photos
              </v-col>
              <v-col></v-col>
            </v-row>
            <v-row>
              <v-col cols="3" xm="12" sm="3" v-for="userPost in userPosts" :key="userPost.id">
                <v-card height="300px" @click="showDetails(userPost)">
                  <v-img
                    :src="userPost.image"
                    height="300px"
                    width="250px"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-dialog v-model="showModal" max-width="900px" height="700">
        <template v-slot:activator="{ on, attrs }">
         
        </template>
        <v-card height="700" style="position: relative">
          <v-card-text>
            <v-row>
              <v-col cols="7">
                <v-img :src="modalImgUrl" height="550" width="450"></v-img>
              </v-col>
              <v-col cols="5">
                <v-avatar color="indigo" size="49">
                  <v-img :src="userInfo.image"></v-img>
                </v-avatar>
                <b class="name">Rick sanchez</b>

                <v-btn text small color="primary">Follow</v-btn>
                <br />
                <v-col>
                  <hr />
                </v-col>
                <div class="content">
                <v-col>
                
               
                </v-col>
                 </div>
                <div class="below">
                  <v-col class="icons">
                    <v-row>
                      <v-col cols="9">
                        <v-btn icon>
                          <v-icon color="black">mdi-heart-outline</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon color="black">mdi-message-outline</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon color="black">mdi-send</v-icon>
                        </v-btn>
                      </v-col>
                      <v-col cols="3">
                        <v-btn icon>
                          <v-icon class="float-right" color="black">mdi-bookmark-outline</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col>
                    <b>199 Likes</b>
                    <br />
                    <small>May 21 9191</small>
                    <hr />
                  </v-col>
                  <v-row>
                    <v-col cols="9">
                      <v-container fluid>
                        <v-text-field  label="Add a comment ..." ></v-text-field>
                      </v-container>
                    </v-col>
                    <v-col cols="2">
                      <v-btn text small disabled color="primary">Post</v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<style scoped>

a {
  text-decoration: none;
  color: red;
  }  

.name{
  padding-left: 20px;
}
v-textarea {
  color: red;
}
.content {
  min-height: 50%;
}
.below {
margin-top: -50px;
}
.posts {
  margin-left: 10%;
  padding-right: 10%;
}
.userinfo {
  padding-left: 10px;
}
.rounded-card {
  border-radius: 150px;
  margin-left: 38%;
  margin-top: 8%;
}
.user_details {
  margin-top: 2%;
}
.followbtn {
  margin-left: 40px;
}
img {
  height: 100vh;
}
</style>
<script>
import Header from "../components/Layouts/Header";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["userInfo", "userPosts"]),
  components: {
    Header
  },
  created() {
    let username=this.$route.params.username
    this.getUserInfo(username);
    this.getuserPosts(username);
  },
  data() {
    return {
      posts: 120,
      showModal: false,
      modalImgUrl: ""
    };
  },
  methods: {
    ...mapActions(["getUserInfo", "getuserPosts", "getTaggedPosts", "getIgtv"]),
    showDetails(post) {
      this.modalImgUrl = post.image;
      this.showModal = true;
    },
    getLiveVideos() {
      this.getIgtv();
    },
    getTaggedPhotos() {
      this.getTaggedPosts(this.$route.params.username);
    },
    getMyPosts() {
      this.getuserPosts(this.$route.params.username);
    }
  }
};
</script>