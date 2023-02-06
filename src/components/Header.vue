<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <img src="/images/logo.png" alt="CakeBite logo"/>
    <h1><span class="title">{{ msg }} </span><br/>How much cake left?</h1>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';

h1 {
  font-size: 2rem;
}

.title {
  font-family: $sub-font;
  font-size: 3rem;
}

.greetings {
color: $main-pink;
font-family: $main-font;
display: grid;
opacity: 10;
grid-template-columns: 1fr 6fr 1fr;
background-color:$main-beige;
border-radius: 0% 0% 50% 50%;
}

img {
  height: 150px;
  border-radius: 50%;
  padding: 1rem;
}

//----------Mobile-------------------------
@media screen and ( max-width:926px) {
    .greetings {
      display: flex;
      flex-direction: column-reverse;
      border-radius: 5%;
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      padding: 1rem;
      margin: auto;
   }

   .title {
      font-size: 2rem;
    }

    h1 {
      text-align: center;
    }
  }
</style>
