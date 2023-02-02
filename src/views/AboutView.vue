<script  setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

function joinBtn(){
    alert("Thank you! We will get back to you soon! ")
}

const photoGallery = ref([
                  {photo:"../../public/images/user1.jpg", 
                   text: "I'm busy working and taking care of my three children, so it's very helpful to have a CakeBite where I can check the inventory. I'm always checking it!",
                   stars:"⭐️⭐️⭐️⭐️⭐️"},
                  {photo:"../../public/images/user2.jpg",
                   text: "I live in a suburb, so I'm happy to be able to check a cafe in advance. I hope there will be more shops. So 4 stars.", 
                   stars:"⭐️⭐️⭐️⭐️"},
                  {photo:"../../public/images/user3.jpg",
                    text: "I am raising a child in Japan. And once in a while, the only thing I look forward to is eating matcha cake from Sakura Cafe. I go and cry if it's sold out! That's why I'm grateful for CakeBite.", stars:"⭐️⭐️⭐️⭐️⭐️"},
                  {photo:"../../public/images/user4.jpg",
                   text: "I Love CakeBite! Absolutely!", 
                   stars:"⭐️⭐️⭐️⭐️⭐️"},
                  {photo:"../../public/images/user5.jpg",
                   text: "I'm a travel writer, so I'm always checking out trendy shops. That's why I want CakeBite to post shops around the world!", stars:"⭐️⭐️⭐️"},
                  {photo:"../../public/images/user6.jpg",
                   text: "CakeBite? Damn good!", 
                   stars:"⭐️⭐️⭐️⭐️⭐️"},
                  {photo:"../../public/images/user7.jpg",
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
        <img src="../../public/images/maria.jpg" alt="Maria's image" class="ourStory-img" />
      </article>
    </div>

    <!-- User's voice -->
    <h1>User's voice</h1>

    <Carousel :itemsToShow="2" :wrapAround="true" :transition="500">
      <Slide v-for="slide in photoGallery" :key="slide">
        <div class="sliderPhoto">
          <img v-bind:src="slide.photo" class="carousel-item-img" />
          <p class="usersComment">{{ slide.text}}</p>
          <p>{{ slide.stars }}</p>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination  />
      </template>
    </Carousel>
  
    <h1>How to use the CakeBite</h1>
    <article class="howTo">
      If you were the owner, you would prepare the cake first thing in the morning, right? Log in from admin and register the number of cakes. That's all!
      If you bake a cake during the day, register the amount that increased.<br/>
      Also, since the store's cash register and our database are connected, the number of slices sold is automatically subtracted. Easy, right?
    </article>

    <h1>Our business</h1>
    <article class="howTo">
      Our service is not limited to just stocking cakes.
      For example, if you have a take-out for lunch boxes,
      a pizza shop, a bakery, or other restaurant, join us!
    </article>

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

.usersComment {
  font-size: 1.2rem;
}

// TO DO
.carousel__pagination-button {
  list-style:circle;
  color: red;
}

.sliderPhoto {
  background:$third-pink;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10%;
}

.howTo {
  width: 90vh;
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
}
</style>
