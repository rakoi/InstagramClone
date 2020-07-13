<template>
  <v-card class="mx-auto" outlined max-width="620" max-height="850" width="620" height="800">
    <v-card-title>
      <v-row>
        <v-col cols="10">
          <v-row>
            <v-img
             
              width="50"
              max-width="50"
              max-height="50"
              height="50"
              class="rounded-card"
              :src="myitem.image"
            ></v-img>
           <router-link  class="name" style="text-decoration: none; color: inherit;"  :to="'/profile/' + myitem.name.split(' ')[0]">{{ myitem.name }}</router-link>
          </v-row>
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider></v-divider>

    <v-card-text>
      <v-img
        max-width="620"
        max-height="450"
        :src="myitem.image"
      ></v-img>
      <div class="below">
        <v-col class="icons">
          <v-row>
            <v-col cols="11">
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
            <v-col cols="1">
              <v-btn icon>
                <v-icon class="float-right" color="black">mdi-bookmark-outline</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <b>{{myitem.id}} Views</b>
              <br />
            </v-col>
            <v-col></v-col>
          </v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="10">
                <v-container fluid>
                  <v-text-field label="Add a comment ..."></v-text-field>
                </v-container>
              </v-col>
              <v-col cols="1">
                <v-btn text small disabled color="primary">Post</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-col>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.rounded-card {
  border-radius:50px;
}



.name {
  padding: 8px;
  color:black;
  font-size:15px;
}

</style>

<script>
export default {
  props:['myitem'],
};
</script>