<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const admin = ref({name: "", password: "", cafeId: 0});
const cakes = ref([]);

//Get cakes
const getCakes = async (cafeId: number) => {
  const response = await fetch('http://localhost:3001/cakes/'+ cafeId);
  const cakeData = await response.json();
  cakes.value = cakeData;
};

//Get login
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

//Update cakes
const updateCakes = (cakeId: number, slicesLeft: number) => {
      if(slicesLeft <0) {
        alert("Slices left has to be at least 0.");
        return;
      }
      axios.put(`http://localhost:3001/cakes/${cakeId}/${slicesLeft}`)  
      .then(response => {
          console.log(`update cake ${cakeId} to ${slicesLeft}!`)
      })
      .catch(err => {
        console.log("error: " + err);
      })
}

const modalOpen = ()=> {
  alert("Saved!!")
}

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
      <h1 v-show="admin.cafeId >0" class="adminName">Admin name : {{ admin.name }}</h1>

      <div class="cakeDetail">
        <ul v-for="cake in cakes" >
          <li class="cakeList">{{cake.cakeName}}</li>
          <li><img :src="`${cake.imageURL}`"/></li>
          <li class="cakeList">{{ cake.slicesLeft }} slices</li>
          <input class="input" type="number" id="numberCake" v-model.string="cake.slicesLeft"/>
          <button class="saveBtn" type="submit" v-on:click="updateCakes(cake.cakeId, cake.slicesLeft), modalOpen()">SAVE</button>
        </ul>
      </div>
      
      <router-link v-bind:to="{name:'home'}">
        <button v-show="admin.cafeId >0" class="logoutBtn">Logout</button>
      </router-link>
      
   
</template>
  
<style scoped  lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';

.login {
  margin: 3rem;
}

h1,
.loginForm {
  font-family: $sub-font;
  color: $text-grey;
}

.adminName {
  border-bottom: double 3px $text-grey;
  width: fit-content;
  padding: .5rem;
  margin: 2rem;

}

.loginInput {
  margin: 1rem;
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

.input {
  display: inline-block;
  width: 5rem;
  height: 2rem;
  padding: 0.5em;
  border: 1px solid $text-grey;
  box-sizing: border-box;
  background: $main-beige;
  margin: 1rem;
  border-radius: 10px;
}

ul {
  display: flex;
  border-top-style:  dotted;
  border-top-width: 1px;
}

.cakeDetail {
  :last-child {
    border-bottom-style:  dotted;
    border-bottom-width: 1px;
  }
}

li{
  width: 15rem;
  list-style-type: none;
  text-align: left;
  padding: 1rem;
}

.cakeList {
  font-size: 1.2rem;
}

img {
  width: 5rem;
  height: 4rem;
}

.saveBtn, .logoutBtn{
  display: inline-block;
  width: 4rem;
  height: 2rem;
  padding: 0.5em;
  border: 1px solid $text-grey;
  box-sizing: border-box;
  background: $main-beige;
  margin: 1rem;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    opacity: .7;
  }
}

.submitBtn {
  width: 11rem;
  height: 3rem;
  background-color: $sub-pink;
  margin-bottom: 2rem;;
  cursor: pointer;
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
  