<script setup lang="ts">
import { ref } from 'vue'

type admin = { adminId: string, adminName: string, cafeId: string };
const admins = ref<admin[]>([]);

//To deploy with Railway
const backend = 'https://cakebite-production.up.railway.app';

//Check deploy or development
const host = (process.env.NODE_ENV == "production") ? backend : "http://localhost:3001";

//getAdmin data
const getAdmin = async () => {
  const response = await fetch(`${host}/admin`);
  const adminData = await response.json();
  admins.value = adminData;
};
getAdmin();
</script>

<template>
    <div class="admin">
      <h1>ADMIN</h1>
      <ul >
        <li v-for="admin in admins">
          <span> admin id is: {{ admin.adminId }}</span>
          <span> admin name is: {{ admin.adminName }}</span>
          cafe id is: {{ admin.cafeId }}
        </li>
      </ul>
    </div>
</template>
  
<style scoped  lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';
.admin {
    min-height: 150vh;
    background-color: rgb(137, 183, 137);
}
</style>
  