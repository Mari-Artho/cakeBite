<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <h1>This is footer</h1>
  {{ msg }}
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';

h1 {
  font-size: 2rem;
}

</style>
