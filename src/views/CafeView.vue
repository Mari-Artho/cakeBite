<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, RouterLink} from "vue-router"

type cafe = { cafeId: number, cafeName: string, cafeImage: string, cafeAddress: string, openhourWeekday: string, openhourWeekend: string };
type cake = { cakeId: number, cakeName: string, slicesLeft: number, imageURL: string };


const route = useRoute();
const cafe = ref<cafe>({cafeId: 0, cafeName: "", cafeImage: "", cafeAddress: "", openhourWeekday: "", openhourWeekend:""});
const cakes = ref<cake[]>([]);

const backend = 'https://cakebite-production.up.railway.app';
const host = (process.env.NODE_ENV == "production") ? backend : "http://localhost:3001";

//Get a cafe data
const getCafe = async () => {
  const response = await fetch(`${host}/cafe/${route.params.id}`);
  const cafeData = await response.json();
  cafe.value = cafeData[0];
};
getCafe();

//Get a cake data
const getCakes = async () => {
  const response = await fetch(`${host}/cakes/${route.params.id}`);
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
                <li><img :src="`${cake.imageURL}`" class="cakeImg"/></li>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';
.cafe {
    min-height: 100vh;
    color: $text-grey;
}

.homeRouter {
    color: $main-pink;
    font-family: $sub-font;
}

.cafeImage {
    width: 400px;
    height: 300px;
}

.cafeImage {
    border-radius: 40% 70% 0% 70%/ 60%;
}

.cafeInfo {
    display: flex;
    justify-content: space-evenly;
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

.cakeImg {
    width: 300px;
    height: 250px;
}

.sliceLeft {
    font-size: 2rem;
    color: red;
}

.soldOut {
    color: red;
    font-size: 2rem;
}

//----------Mobile-------------------------
@media screen and ( max-width:480px) {
.cafeInfo {
    flex-direction: column;
}

.cafeImage {
    width: 18rem;
    height: 15rem;
}

.cake-details {
    grid-template-columns: 1fr;
    margin: auto;
    width: 280px;
    border-radius: 10px;
}

.cakeImg {
    width: 220px;
    height: 150px;
}
}

//----------Mobile(iPhone SE) Landscape-----------------
@media screen and (min-width:481px) and ( max-width:809px)  {
.cafeInfo {
    flex-direction: column;
}

.cake-details {
    grid-template-columns: 1fr 1fr;
    width: 550px;
    border-radius: 10px;
}

.cakeName {
    font-size: 1rem;
}

.cakeImg {
    width: 150px;
    height: 115px;
}
}

//----------Tablet & Mobile(iPhone11) Landscape------------------------------
@media screen and (min-width:810px)  and ( max-width:1080px)  {
.cakeImg {
    width: 300px;
    height: 200px;
}
}
</style>