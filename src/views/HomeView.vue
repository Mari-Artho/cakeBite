<script setup lang="ts">
import { ref } from 'vue';

//get data from mySql
const cafes = ref([]);

const getCafe = async () => {
  const response = await fetch('http://localhost:3001/cafe');
  const cafeData = await response.json();
  cafes.value = cafeData;
};
getCafe();
</script>

<template>
    <div class="home">
      <h2 class="greetings">Click on your favorite cafe</h2>
      <ul class="cafeList">
          <li v-for="(cafe, key) in cafes" >
            <a href="" class="cafe-detail">
            <span>{{ cafe.cafeName }}</span>
            <span><img :src="`${cafe.cafeImage}`"/></span>
            </a>
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
    // background-color: whitesmoke;
    // border-radius: 50% 10% 10% 40%;
}

.greetings {
color: $main-pink;
font-family: $main-font;
}

.cafeList {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 300px;
}
}

.cafe-detail {
  display: flex;
  flex-direction: column;
  background-color: white;
  margin:5px;
}

img {
  width: 250px;
  height: 200px;
}
</style>