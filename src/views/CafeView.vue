<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, RouterLink} from "vue-router"

const route = useRoute();
const cafe = ref("");
const cakes = ref([]);

//Get a cafe data
const getCafe = async () => {
  const response = await fetch('http://localhost:3001/cafe/'+ route.params.id);
  const cafeData = await response.json();
  cafe.value = cafeData[0];
};
getCafe();

//Get a cake data
const getCakes = async () => {
  const response = await fetch('http://localhost:3001/cakes/'+ route.params.id);
  const cakeData = await response.json();
  cakes.value = cakeData;
};
getCakes();

</script>

<template>
    <section class="cafe">
        <h3>
            <router-link v-bind:to="{name:'home'}" class="homeRouter">
              Home 
            </router-link>  > {{ $route.params.id }}.  {{cafe.cafeName}}
        </h3>
        
        <!-- <h1 class="cafeName">{{ $route.params.id }}.  {{cafe.cafeName}}</h1> -->

        <div class="cafeInfo">
            <div class="cafeInfo-left">
                <img :src="`${cafe.cafeImage}`" alt="cafe image" class="cafeImage"/>
            </div>
            <div class="cafeInfo-right">
                <h1 class="cafeName"> {{cafe.cafeName}}</h1>
                <p>{{ cafe.cafeAddress }}</p>
                <p>{{ cafe.openhourWeekday }}</p>
                <p>{{ cafe.openhourWeekend}}</p>
            </div>
        </div>

        <div class="cake-details">
            <ul v-for="cake in cakes" >
                <li class="cakeName">{{cake.cakeName}}</li>
                <li v-show="cake.slicesLeft >= 1 ">
                    <span class="sliceLeft" >{{ cake.slicesLeft }} </span>
                     Slices left</li>
                <li class="soldOut" v-show="cake.slicesLeft < 1 ">SOLD OUT</li>
                <li><img :src="`${cake.imageURL}`"/></li>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';
@media (min-width: 1024px) {
.cafe {
    min-height: 100vh;
    color: $text-grey;
}

.homeRouter {
    color: $main-pink;
    font-family: $sub-font;
}

img{
    width: 400px;
    height: 300px;
    }

.cafeImage {
    border-radius: 40% 70% 0% 70%/ 60%;
    //border-radius: 60%/ 60%;
}

.cafeInfo {
    display: flex;
    justify-content: space-evenly;
    //background-color:white;
}

.cafeInfo-left{
    //background-color: blue;
}

.cafeInfo-right{
    font-size: 1.2rem;
    margin-top: 1rem;
    padding: 1rem;
}

.cake-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem;
}

ul {
    list-style: none;
    li {
    background-color: white;
}
}

.cafeName {
    font-family: $sub-font;
}

.cakeName {
    font-size: 1.5rem;
    font-family: $sub-font;
}

.sliceLeft {
    font-size: 2rem;
    color: red;
}

.soldOut {
    color: red;
    font-size: 2rem;
}

}
</style>