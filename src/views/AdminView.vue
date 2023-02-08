<script setup lang="ts">
import { ref } from 'vue'

//get data from mySql

// type admin = { adminId: number, adminName: string, cafeId: number };
//Vite 環境変数 を string 以外で読み込めないかも知れないのでstringで。
type admin = { adminId: string, adminName: string, cafeId: string };

const admins = ref<admin[]>([]);

//require('dotenv').config();
//const { config } = require('dotenv');
//const  config  = require('dotenv');

const backend = 'https://cakebite-production.up.railway.app';
// const host = process.env.HOST || "http://localhost:3001" ||  backend;
const host =  "http://localhost:3001" ||  backend;


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
  