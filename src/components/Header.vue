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

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  font-family: Moon Dance;
}

h3 {
  font-size: 1.2rem;
  font-family: Moon Dance;
}


@media (min-width: 1024px) {
  /* .greetings h1,
  .greetings h3 {
    text-align: left;
  } */
}
</style>
