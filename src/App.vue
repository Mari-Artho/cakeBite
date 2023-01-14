<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <section>
    <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About us</RouterLink>
          <RouterLink to="/admin">Admin</RouterLink>
        </nav>

        <Header msg="Cake Bite" />
      </div>

    <RouterView />
  </section>
</template>

<style  lang="scss">
nav a.router-link-exact-active {
  color: rgb(38, 38, 205);
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

/* @media (min-width: 1024px) { */
  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
    /* color:red; */
    text-align: right;
  }
/* } */
</style>
