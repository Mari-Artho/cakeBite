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
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    background-color: pink;
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
