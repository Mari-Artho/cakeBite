<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

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
    // background-color: rgb(245, 214, 181);
    background-color: rgb(137, 183, 137);
}

//----------Mobile-------------------------
@media screen and ( max-width:480px) {

}

//----------Mobile(iPhone SE) Landscape-----------------
@media screen and (min-width:481px) and ( max-width:809px)  {

}

//----------Tablet & Mobile(iPhone11) Landscape------------------------------
@media screen and (min-width:810px)  and ( max-width:1080px)  {
  
}

//----------Tablet Landscape------------------------------
@media screen and (min-width: 1080px)  {
  
}
</style>
  