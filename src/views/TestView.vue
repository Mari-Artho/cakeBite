<script setup lang="ts">
    interface Props{
        title: string;
        content: string;
    }
    
    const props = defineProps<Props>();
</script>

<template>
    <div class="cafe">
      <h1>  {{ props.title }}</h1>
      <h1>  {{ props.content }}</h1>
    </div>
</template>