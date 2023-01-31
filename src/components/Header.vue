<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <img src="../../public/images/logo.png" alt="cafeBite logo"/>
    <h1><span class="title">{{ msg }} </span><br/>How much cake left?</h1>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';

h1 {
  //font-weight: 500;
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
  //padding-left: 1rem;
}

@media (min-width: 1024px) {
  /* .greetings h1,
  .greetings h3 {
    text-align: left;
  } */
}
</style>
