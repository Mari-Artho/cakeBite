<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

//get data from mySql
const cafes = ref([]);

const getCafe = async () => {
  const response = await fetch('http://localhost:3001/cafes');
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
            <router-link :to="{name:'cafe', params: {text: 'Hello from HomeView', id: cafe.cafeId}}">
              <span>{{ cafe.cafeName }}</span>
              <span><img :src="`${cafe.cafeImage}`"/></span>
            </router-link>
          </li> 
      </ul>

      <button>Click here to join us!</button>
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
  width: 250px;
  height: 200px;
}

button {
  background-color: #CC4777;
  width: 30rem;
  height: 4rem;
  font-size: 2rem;
  font-family: $main-font;
  cursor: pointer;
  &:hover{
    background-color: $main-pink;
    color: white;
  }
}
</style>