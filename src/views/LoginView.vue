<script setup lang="ts">
import { ref } from 'vue';

//get data from mySql
const admin = ref({name: "", password: ""});
const login = ref({name: "", password: ""});

const getLogin = async (name: string, password: string) => {
  const response = await fetch('http://localhost:3001/login/' + name + '/' + password);
  const adminData = await response.json();
  login.value = adminData;
  // todo: check if login is successful (admin == login),
  // if successful, render a new page with cake data that can be edited
};

function joinBtn(){
    alert("Thank you! We will get back to you soon! ")
}
</script>

<template>
    <div class="login">
      <h1>Admin Login</h1>

      <form>
        <label for="adminName">Admin name
          <input type="string" id="adminName" v-model.string="admin.adminName"/>

          <!-- <select name="adminName">
            <option value="Sakura" >Sakura</option>
            <option value="Flore">Flore</option>
            <option value="Pause">Pause</option>
            <option value="Vete-Hunden">Vete-Hunden</option>
            <option value="Mrs.Cake">Mrs.Cake</option>
            <option value="Madam">Madam</option>
          </select> -->
        </label>
        <label for="adminPassword">Password
            <input type="password"  id="adminPassword" v-model.string="admin.password"/>
          </label>
        <button type="submit" v-on:click="getLogin(admin.name, admin.password)">LOG IN</button>
      </form>
    </div>

    <button class="joinBtn" v-on:click="joinBtn()">Click here to join us!</button>
</template>
  
<style  lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';
@media (min-width: 1024px) {

.joinBtn {
  background-color: #f6a6c3;
  width: 20rem;
  height: 4rem;
  font-size: 2rem;
  font-family: $main-font;
  margin-top: 3rem;
  cursor: pointer;
  &:hover{
    background-color: $main-pink;
    color: white;
  }
}

}
</style>
  