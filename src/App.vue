<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
//import HelloWorld from './components/Header.vue'
</script>

<template>
  <section>
    <header>
      <div class="wrapper">
        <Header msg="CakeBite！" />
        
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About us</RouterLink>
          <RouterLink to="/admin">Admin</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #DF0588;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
