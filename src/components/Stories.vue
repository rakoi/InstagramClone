<template>
  <div class="stories">
    <v-card outlined max-width="620" >
      <v-row>
        <v-col>
          <v-img
            contain
            width="90"
            height="90"
            class="rounded-card"
            aspect-ratio="1.7778"
            src="https://rickandmortyapi.com/api/character/avatar/21.jpeg"
          ></v-img>
          <small class="storiesName">Morty</small>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<style scoped>
.storiesName{
    margin-left:40px;
    
}
.stories{
  padding-left:20px;
}
.rounded-card {
  border-radius: 150px;
  margin-left:10px;
  margin-top:10px;
}
</style>
<script>
export default {};
</script>