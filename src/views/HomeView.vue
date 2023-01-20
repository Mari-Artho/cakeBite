<script setup lang="ts">
//get data from mySql
import { ref } from 'vue';
const cafes = ref([]);

const getData = async () => {
  const response = await fetch('http://localhost:3001/cafe');
  const cafeData = await response.json();
  cafes.value = cafeData;
};
getData();
</script>

<template>
    <div class="home">
      <ul class="cafeList">
          <li v-for="(cafe, key) in cafes" >
            <a href="">
            <span>{{ cafe.cafeId }} {{ cafe.cafeName }}</span>
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