<script setup lang="ts">
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
        The next time, this time the matcha milk crepe was sold out. At the time, She thought, "I want to know the inventory of the cakes before going to the store.
        Wouldn't it be nice if people could do that?”
        This was the moment CakeBite was born.
        <blockquote>
          <i> "Where there is a will, there is a way", Abraham Lincoln</i>
        </blockquote>
      </article>
      
      <article>
        <img src="../../public/images/maria.jpg" alt="our story" class="ourStory-img" />
        
      </article>
    </div>

    <h1>Customer's voice</h1>


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

  article {
    //width: 700px;
    //margin: auto;
    font-size: 1.4rem;
    text-align: left;
    padding:  1rem;
    //background-color: white;
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

  .joinBtn {
  background-color: #CC4777;
  width: 30rem;
  height: 4rem;
  font-size: 2rem;
  font-family: $main-font;
  cursor: pointer;
  &:hover{
    background-color: $main-pink;
    color: white;
  }
}
}
</style>
