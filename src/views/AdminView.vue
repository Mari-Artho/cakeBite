<script setup lang="ts">
import { ref } from 'vue';

//get data from mySql
const admins = ref([]);

const getAdmin = async () => {
  const response = await fetch('http://localhost:3001/admin');
  const adminData = await response.json();
  admins.value = adminData;
};
getAdmin();
</script>


<template>
    <div class="admin">
      <h1>This is an Admin page😃</h1>
    
      <ul >
        <li v-for="admin in admins">
          <span> admin id is: {{ admin.adminId }}</span>
          <span> admin name is: {{ admin.adminName }}</span>
          cafe id is: {{ admin.cafeId }}
        </li>
      </ul>
    </div>
</template>
  
<style  lang="scss">
@media (min-width: 1024px) {
.admin {
    min-height: 100vh;
    background-color: rgb(245, 214, 181);
}
}
</style>
  