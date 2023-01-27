<script setup lang="ts">
function joinBtn(){
    alert("Thank you! We will get back to you soon! ")
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button class="joinBtn" v-on:click="joinBtn()">Click here to join us!</button>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    background-color: pink;
  }
}
</style>
