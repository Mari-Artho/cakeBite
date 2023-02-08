<script  setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

//Join to us button.
function joinBtn(){
    alert("Thank you! We will get back to you soon! ")
}

//Slide show/Carousel
type galleryItem = { photo: string;
                     text: string;
                     stars: string;
                   }

const photoGallery = ref([
                  {photo:"/images/user1.jpg", 
                   text: "I'm busy working and taking care of my three children, so it's very helpful to have a CakeBite where I can check the inventory. I'm always checking it!",
                   stars:"⭐️⭐️⭐️⭐️⭐️"},
                  {photo:"/images/user2.jpg",
                   text: "I live in a suburb, so I'm happy to be able to check a cafe in advance. I hope there will be more shops. So 4 stars.", 
                   stars:"⭐️⭐️⭐️⭐️"},
                  {photo:"/images/user3.jpg",
                    text: "I'm a mother and raising a child in Japan. And once in a while, the only thing I look forward to is eating matcha cake from Sakura Cafe. I go and cry if it's sold out! That's why I'm grateful for CakeBite.", stars:"⭐️⭐️⭐️⭐️⭐️"},
                  {photo:"/images/user4.jpg",
                   text: "I Love CakeBite! Absolutely!", 
                   stars:"⭐️⭐️⭐️⭐️⭐️"},
                  {photo:"/images/user5.jpg",
                   text: "I'm a travel writer, so I'm always checking out trendy shops. That's why I want CakeBite to post shops around the world!", stars:"⭐️⭐️⭐️"},
                  {photo:"/images/user6.jpg",
                   text: "CakeBite? Damn good!", 
                   stars:"⭐️⭐️⭐️⭐️⭐️"},
                  {photo:"/images/user7.jpg",
                   text: "I'm vegan, so I always eat the same cake from the same cafe. That's why I love being able to check in advance on CakeBite.", 
                   stars:"⭐️⭐️⭐️⭐️⭐️"},
                  ])
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
          <i>Where there is a will, there is a way.<br/>Abraham Lincoln</i>
        </blockquote>
      </article>
      
      <article>
        <img src="/images/maria.jpg" alt="Maria's image" class="ourStory-img" />
      </article>
    </div>

    <!-- User's voice -->
    <h1 class="usersVoice">User's voice</h1>

    <Carousel :itemsToShow="1.9" :wrapAround="true" :transition="500" :mouseDrag="true">
      <Slide v-for="slide in photoGallery" :key:galleryItem="slide">
        <div class="sliderPhoto">
          <img v-bind:src="slide.photo" class="carousel-item-img" />
          <p class="usersComment">{{ slide.text}}</p>
          <p>{{ slide.stars }}</p>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  
    <h1>How to use the CakeBite</h1>
    <article class="howTo">
      If you were the owner, you may prepare the cake first thing in the morning. Log in from admin and register the number of cakes. That's all!
      If you bake a cake during the day, register the amount that increased.<br/>
      Also, since the store's cash register and our database are connected, the number of slices sold is automatically subtracted. Easy, isn't it?
    </article>

    <h1>Our service</h1>
    <article class="howTo">
      Our service is not limited to just stocking cakes.
      For example, if you have a take-out for lunch boxes, a bakery, or other restaurant, join us!<br/>
      Our services continue to expand. Look forward to SemlaBite, BulleBite, LussekatterBite!
    </article>

    <button class="joinBtn" v-on:click="joinBtn()">Click here to join us!</button>
  </section>
</template>

<style lang="scss"> // Unscoped to enable vue-paginate
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';

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
  width: 450px;
  height: 350px;
  border-radius: 1rem;
  margin-top: 2rem;
}

.sliderPhoto {
  background: $third-pink;
  margin: 1rem;
  margin-top: 0;
  padding: 1rem;
  border-radius: 10%;
  width: 400px;
}

.carousel-item-img {
  width: 100%;
  height: auto;
  border-radius: 10%;
}

.usersComment {
  font-size: 1.2rem;
}

// Arrows on the left and right of the carousel
.carousel__prev,
.carousel__next {
  background-color: $sub-pink;
  border-radius: 90%;
  width: 3rem;
  height: 3rem;
}

.usersVoice {
  margin: 0;
}

.howTo {
  width: 70%;
  margin: auto;
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

//----------Mobile-------------------------
@media screen and ( max-width:480px) {
.ourStory {
  display: flex;
  flex-direction: column;
}

.ourStory-img {
  width: 300px;
  height: 200px;
  border-radius: 1rem;
}

.sliderPhoto {
  border-radius: 1rem;
}

.joinBtn {
margin: auto;
margin-bottom: 1rem;
}
}

//----------Mobile(iPhone SE) Landscape-----------------
@media screen and (min-width:481px) and ( max-width:809px)  {
.ourStory{
  display: flex;
  flex-direction: column;
}

.ourStory-img {
  margin-left: 10%;
}
}

//----------Tablet & Mobile(iPhone11) Landscape------------------------------
@media screen and (min-width:810px) and ( max-width:1020px)   {
.ourStory{
  display: flex;
  flex-direction: column;
}

.ourStory-img {
  width: 40rem;
  height: 30rem;
  border-radius: 1rem;
  margin-left: 6%;
}

.joinBtn {
margin-bottom: 2rem;
}
}
</style>
