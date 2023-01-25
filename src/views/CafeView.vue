<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from "vue-router"
import { RouterLink } from 'vue-router'

const route = useRoute();
const cafe = ref([]);

const getCafe = async () => {
  const response = await fetch('http://localhost:3001/cafe/'+ route.params.id);
  console.log(response);
  const cafeData = await response.json();
  cafe.value = cafeData[0];
};
getCafe();
</script>

<template>
    <div class="cafe">
        <router-link v-bind:to="{name:'home'}">
            BACK
        </router-link>
      <h1>Hello this is a CafeView.vue</h1>
      <p>id : {{$route.params.id}}</p>
      <p>name : {{$route.params.name}}</p>
      <p>text : {{$route.params.text}}</p>
      <p>fullpath : {{ $route.fullPath }}</p>
      <p>params : {{ $route.params }}</p>
      <p>path : {{ $route.path }}</p>

      // TODO: query backend /cafe/:id to get data on cafe
    </div>
</template>