<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <img src="../../public/images/logo.png" alt="cafeBite logo"/>
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';

h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

.greetings {
color: $main-pink;
font-family: $main-font;
display: grid;
opacity: 10;
grid-template-columns: 1fr 6fr;
background-color: white;
}

img {
  height: 200px;
  border-radius: 20%;;
}

@media (min-width: 1024px) {
  /* .greetings h1,
  .greetings h3 {
    text-align: left;
  } */
}
</style>
