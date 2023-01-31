<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <section>
    <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About CakeBite</RouterLink>
          <RouterLink to="/login">Admin Login</RouterLink>
        </nav>

        <Header msg="🍰 Cake Bite 🍰 " />
    </div>

    <RouterView />
    <Footer msg="hello"/>
  </section>
</template>

<style  lang="scss">
@import './assets/styles.scss';

nav {
  font-size: 1.2rem;
  padding: 1rem 0;
  margin-top: 1rem;
  text-align: right;
  font-family: 'Aref Ruqaa Ink', serif;
}

nav a.router-link-exact-active {
  color: $main-pink;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  border-bottom: $text-grey;
  text-decoration: underline;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color:  $text-grey;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
