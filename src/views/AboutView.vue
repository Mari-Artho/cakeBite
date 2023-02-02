<script  lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}

function joinBtn(){
    alert("Thank you! We will get back to you soon! ")
}
</script>

<template>
  <section class="about">
    <h1>Our story</h1>
    <div class="ourStory">
      <article>
        One day, Maria, the founder of the CakeBite went to her favorite cake shop in Stockholm.
        She wanted to eat strawberry shortcake there. Unfortunately, the cake was sold out.
        <br/>
        The next time, this time the matcha milk crepe was sold out. At the time, She thought, "I wish I could check the inventory before going to the cake shop.
        Wouldn't it be nice if people could do that?"
        This was the moment CakeBite was born.
        <blockquote>
          <i> Where there is a will, there is a way.  <br/>Abraham Lincoln </i>
        </blockquote>
      </article>
      
      <article>
        <img src="../../public/images/maria.jpg" alt="Maria's image" class="ourStory-img" />
      </article>
    </div>

    <h1>User's voice</h1>
    <carousel :items-to-show="1.5">
      <slide v-for="slide in 8" :key="slide">
        <div class="carousel__item">Hello{{ slide }} Hejhej</div>
      </slide>

      <template #addons="{ slidesCount }">
        <navigation />
        <pagination />
      </template>
    </carousel>

    <h1>How to use the CafeBite</h1>

    <h1>Our business</h1>


    <button class="joinBtn" v-on:click="joinBtn()">Click here to join us!</button>
  </section>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';
@media (min-width: 1024px) {
.about {
  min-height: 100vh;
  color: $text-grey;
}

h1 {
  font-size: 2rem;
  font-family: $sub-font;
}

article {
  font-size: 1.4rem;
  text-align: left;
  padding:  1rem;
}

blockquote::before {
  content: '\201C';
  font-size: 1.5rem;
  top: 1.5rem;
  left: 0;
}

blockquote::after {
  content: '\201D';
  font-size: 1.5rem;
}

.ourStory {
  display: flex;
}

.ourStory-img {
  width: 30rem;
  height: 22rem;
  border-radius: 1rem;
  margin-top: 2rem;
}

.carousel__item {
  height:400px;
  width: 500px;
  background: pink;
}

.joinBtn {
background-color: $main-pink;
color: white;
width: 20rem;
height: 4rem;
font-size: 2rem;
font-family: $main-font;
margin: 2rem;
border-radius: 1rem;
cursor: pointer;
&:hover{
  //background-color: rgb(246, 71, 100);
  background: linear-gradient($main-pink, white);
  color: white;
}
}
}
</style>
