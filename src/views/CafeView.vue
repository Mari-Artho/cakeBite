<script setup lang="ts">
//id = $route.query.id;
//const { id } = ();
</script>

<template>
    <div class="cafe">
      <h1>Hello this is a CafeView.vue</h1>
      <p>{{$route.params.id}}</p>
      <p>{{$route.params.text}}</p>
    </div>
</template>