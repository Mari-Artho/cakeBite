<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from "vue-router"
import { RouterLink } from 'vue-router'

const route = useRoute();
const cafe = ref("");
const cakes = ref([]);

const getCafe = async () => {
  const response = await fetch('http://localhost:3001/cafe/'+ route.params.id);
  const cafeData = await response.json();
  cafe.value = cafeData[0];
};
getCafe();

const getCakes = async () => {
  const response = await fetch('http://localhost:3001/cakes/'+ route.params.id);
  const cakeData = await response.json();
  cakes.value = cakeData;
};
getCakes();
</script>

<template>
    <div class="cafe">
        <h3>
            <router-link v-bind:to="{name:'home'}">
            BACK 
            </router-link> > Cafe 
        </h3>
        
        <h1>{{ $route.params.id }}</h1>
        <p>Cafe: {{cafe.cafeName}}</p>
        <img :src="`${cafe.cafeImage}`"/>

        <ul v-for="cake in cakes">
            <li>{{cake.cakeName}}</li>
            <li>{{ cake.slicesLeft }} Slice left: </li>
            <li><img :src="`${cake.imageURL}`"/></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';
@media (min-width: 1024px) {
.cafe {
    min-height: 100vh;
    // background-color: whitesmoke;
    // border-radius: 50% 10% 10% 40%;
}
}
</style>