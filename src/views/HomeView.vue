<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

//get a data from mySql
type cafe = { cafeId: number, 
              cafeName: string, 
              cafeImage: string 
            };

const cafes = ref<cafe[]>([]);

//ref: https://vuejs.org/guide/best-practices/production-deployment.html
const backend = 'https://cakebite-production.up.railway.app';
const host = (process.env.NODE_ENV == "production") ? backend : "http://localhost:3001";

const getCafes = async () => {
  const response = await fetch(`${host}/cafes`,{
    method: 'get',
    headers: {
        'Content-Type': 'application/json'
    },
  });

  const cafeData = await response.json();
  cafes.value = cafeData;
};
getCafes();
</script>

<template>
    <section class="home">
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
    </section>
</template>
  
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';

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

//----------Mobile-------------------------
@media screen and ( max-width: 600px) {
.home {
  text-align: center;
}

.cafeList {
  display: flex;
  flex-direction: column;
  padding-left: 0;
}
}

//----------Mobile Landscape-----------------
@media screen and (min-width: 601px) and ( max-width:809px) {
 .cafeList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: .5rem;
 }

 img {
  width: 250px;
  height: 150px;
}
}

//----------Tablet:761px-810px   ------------------------------
@media screen and (min-width:810px) and ( max-width:1080px)  {
.home {
  min-height: 85vh;
}
.message {
  text-align: center;
}
.cafeList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: .5rem;
}
}

//----------Tablet Landscape------------------------------
@media screen and (min-width: 1080px)  {
  .cafeList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: .5rem;
}

.home {
  color: $text-grey;
}
}

</style>