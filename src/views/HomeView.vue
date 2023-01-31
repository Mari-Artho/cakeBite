<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

//get data from mySql
const cafes = ref([]);

const getCafes = async () => {
  const response = await fetch('http://localhost:3001/cafes');
  const cafeData = await response.json();
  cafes.value = cafeData;
};
getCafes();
</script>

<template>
    <div class="home">
      <h2 class="message">Click on your favorite cafe</h2>
      <ul class="cafeList">
          <li v-for="cafe in cafes" >
            <router-link :to="{
                          name:'cafe', 
                          params: {id: cafe.cafeId,
                                   name: cafe.cafeName}
                          }">
              <span class="cafeName">{{ cafe.cafeName }}</span>
              <span><img :src="`${cafe.cafeImage}`"/></span>
            </router-link>
          </li> 
      </ul>
    </div>
</template>
  
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';
@media (min-width: 1024px) {
.home {
  min-height: 100vh;
  color: $text-grey;
}

.message {
  font-family: $main-font;
  margin: 3rem 0 3rem 0;
}

.cafeName {
  color: $text-grey;
}

.cafeList {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 300px;
  font-family: $sub-font;
}
}

a {
  color: black;
  text-decoration: none;
  font-size: 1.5rem
}

.cafe-detail {
  display: flex;
  flex-direction: column;
  background-color: white;
  margin:5px;
}

img {
  width: 300px;
  height: 200px;
}
</style>