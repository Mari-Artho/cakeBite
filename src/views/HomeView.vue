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
      <ul >
        <li v-for="cafe in cafes">
          <span> cafe id is: {{ cafe.cafeId }}</span>
          <span> cafe name is: {{ cafe.cafeName }}</span>
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
}
</style>