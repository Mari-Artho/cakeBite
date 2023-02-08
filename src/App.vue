<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <section>
    <div class="homeLayout" >
        <nav id="global-nav">
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

<style lang="scss">
@import './assets/styles.scss';
nav {
  font-size: 1.2rem;
  padding: .5rem 0;
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

//----------Mobile-------------------------
@media screen and ( max-width:480px) {
    .homeLayout {
      display: flex;
      flex-direction: column-reverse;
    }

    nav {
      display: flex;
      flex-direction: column;
      text-align: left;
      a {
        border-left: none;
      }
    }
  }
</style>
