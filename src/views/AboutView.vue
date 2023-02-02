<script  setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const photoGallery = ref([
                  {photo:"../../public/images/maria.jpg"},
                  {photo:"../../public/images/cafe-madam.jpg"},
                  {photo:"../../public/images/eclair.jpg"},
                  {photo:"../../public/images/logo.png"},
                  {photo:"../../public/images/orange-tart.jpg"},
                  {photo:"../../public/images/mrs.cake.jpg"},
                  ])

function joinBtn(){
    alert("Thank you! We will get back to you soon! ")
}
</script>

<template>
  <section class="about">
    <!-- Our story -->
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

    <!-- User's voice -->
    <h1>User's voice</h1>

    <Carousel :itemsToShow="2" :wrapAround="true" :transition="500">
      <Slide v-for="slide in photoGallery" :key="slide">
        <div class="sliderPhoto">
          <img v-bind:src="slide.photo" class="carousel-item-img" />
          <p>Hello Mari</p>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination  />
      </template>
    </Carousel>
  
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

.carousel-item-img {
  width: 100%;
  height: auto;
  border-radius: 10%;
}

.carousel__pagination-button {
  list-style:circle;
  color: red;
}

.sliderPhoto {
  background:$third-pink;
  margin: 2rem;
  padding: 2rem;
  border-radius: 10%;
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
  background: linear-gradient($main-pink, white);
  color: white;
}
}
}
</style>
