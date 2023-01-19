<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';

//get data from sql
import { ref } from 'vue';
const tasks = ref([]);
const task = ref('');

const getData = async () => {
  const response = await fetch('http://localhost:30001/users');
  const data = await response.json();
  tasks.value = data;
};

getData();
</script>

<template>
  <section>
  <ul>
    <li
      v-for="task in tasks"
    >
      <span>Hello {{ task.adminName }}</span>
    </li>
  </ul>

    <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About us</RouterLink>
          <RouterLink to="/admin">Admin</RouterLink>
        </nav>

        <Header msg="Cake Bite: How much cake left?" />
    </div>

    <RouterView />
  </section>
</template>

<style  lang="scss">
@import './assets/styles.scss';

nav {
  font-size: 2rem;
  padding: 1rem 0;
  margin-top: 1rem;
  text-align: right;
  font-family: 'Aref Ruqaa Ink', serif;
  //border: lightgrey .1rem solid ;
  //display :inline-block;
}

nav a.router-link-exact-active {
  color: $main-pink;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  border-bottom: black;
  text-decoration: underline;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color: black;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
