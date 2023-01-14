<script setup lang="ts">
defineProps<{
  msg: string
}>()

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Choose your favorite cafe
    </h3>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';

h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
 color:red;
 color: $main-pink;
font-family: 'Aref Ruqaa Ink', serif;
font-family: 'Moon Dance', cursive;
}


@media (min-width: 1024px) {
  /* .greetings h1,
  .greetings h3 {
    text-align: left;
  } */
}
</style>
