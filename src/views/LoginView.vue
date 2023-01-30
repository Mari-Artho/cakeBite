<script setup lang="ts">
import { ref } from 'vue';

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
    <h1 v-show="admin.cafeId == 0">Admin Login</h1>

    <!-- LOGIN -->
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
      <button class="submitBtn" type="submit" v-on:click="getLogin(admin.name, admin.password)">Login</button>
    </div>

    <!-- LOGIN SUCCESS -->
      <h1 v-show="admin.cafeId >0">Admin name : {{ admin.name }}</h1>

      <ul v-for="cake in cakes">
        <li class="cakeList">{{cake.cakeName}}</li>
        <li><img :src="`${cake.imageURL}`"/></li>
        <li class="cakeList">{{ cake.slicesLeft }} slices</li>
        <input type="number" id="numberCake" v-model.string="cake.slicesLeft"/>
        <button class="saveBtn" type="submit" v-on:click="updateCakes(cake.slicesLeft)">SAVE</button>


        <!-- <button class="countBtn">+</button>
        <button class="countBtn">-</button> -->
      </ul>
      
      <button>Logout</button>
   
</template>
  
<style scoped  lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';

h1,
.loginForm {
  font-family: $sub-font;
}

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

ul {
  display: flex;
  li{
    width: 15rem;
    list-style-type: none;
    text-align: left;
    border-bottom-style:dotted;
    border-bottom-width: 1px;
  }
}

.cakeList {
    font-size: 1.2rem;
}

img {
  width: 5rem;
  height: 4rem;
}

.countBtn{
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}

.submitBtn {
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
  