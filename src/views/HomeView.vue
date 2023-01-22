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
      <ul class="cafeList">
          <li v-for="(cafe, key) in cafes" >
            <a href="">
            <span>{{ cafe.cafeName }}</span>
            <img :src="`${cafe.cafeImage}`"/>
            </a>
          </li>
        
      </ul>
    </div>
</template>
  
<style scoped lang="scss">
@media (min-width: 1024px) {
.home {
    min-height: 100vh;
    background-color: whitesmoke;
    border-radius: 50% 10% 10% 40%;
}

.cafeList {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 300px;
}
}
</style>