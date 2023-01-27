<script setup lang="ts">
import { ref } from 'vue';

//get data from mySql
const admin = ref({name: "", password: "", cafeId: 0});
const cakes = ref([]);

const getCakes = async (cafeId: number) => {
  const response = await fetch('http://localhost:3001/cakes/'+ cafeId);
  const cakeData = await response.json();
  cakes.value = cakeData;
};

const getLogin = async (name: string, password: string) => {
  const response = await fetch('http://localhost:3001/login/' + name + '/' + password);
  const adminData = await response.json();
  if (adminData.cafeId == 0) {
    alert ("Invalid login.");
    return;
  }
  admin.value.cafeId = adminData.cafeId
  // login is successful
  // render a new page with cake data that can be edited
  getCakes(adminData.cafeId);
};
</script>

<template>
    <h1>Admin Login</h1>

    <div class="login" v-show="admin.cafeId == 0">
      <form class="loginForm">
        <div class="loginInput">
          <label for="adminName">Admin name</label>
          <input type="string" id="adminName" v-model.string="admin.name"/>
        </div>
        <div class="loginInput">
          <label for="password">Password </label>
          <input type="password"  id="password" v-model.string="admin.password"/>
        </div>
      </form>
      <button type="submit" v-on:click="getLogin(admin.name, admin.password)">LOG IN</button>
    </div>
    <div class="cake-details">
            <ul v-for="cake in cakes" >
                <li class="cakeName">{{cake.cakeName}}</li>
                <li>
                    <span class="sliceLeft" >{{ cake.slicesLeft }} </span>
                     Slices left</li>
                <li><img :src="`${cake.imageURL}`"/></li>
            </ul>
        </div>
</template>
  
<style  lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';

h1,
.loginForm {
  font-family: $sub-font;
}

// .login {
//   width: fit-content;
//   margin: auto;
//   margin-bottom: 2rem;
//   background-color: white;
// }

.loginInput {
  margin:1rem;
}

.loginForm {
  display: flex;
  flex-direction: column;
}

label {
  display: inline-block;
  width: 150px;
  text-align: right;
  margin-right: 1rem;
}

input {
  height: 1.5rem;
}

button {
  width: 10rem;
  height: 2rem;
  background-color: $sub-pink;
  margin-bottom: 2rem;;
}

.joinBtn {
  background-color: $sub-pink;
  width: 18rem;
  height: 4rem;
  font-size: 2rem;
  font-family: $main-font;
  margin-top: 3rem;
  margin-bottom: 2rem;;
  cursor: pointer;
  &:hover{
    background-color: $main-pink;
    color: white;
  }
}
</style>
  