<script setup lang="ts">
import { ref } from 'vue';

//get data from mySql
const admin = ref({name: "", password: ""}); //from the web form
const login = ref({name: "", password: ""}); //from SQL

const getLogin = async (name: string, password: string) => {
  const response = await fetch('http://localhost:3001/login/' + name + '/' + password);
  const adminData = await response.json();
  login.value = adminData;
  // todo: check if login is successful (admin == login),
  // if successful, render a new page with cake data that can be edited
};
</script>

<template>
    <h1>Admin Login</h1>

    <div class="login">
      <form class="loginForm">
        <div class="loginInput">
          <label for="adminName">Admin name</label>
          <input type="string" id="adminName" v-model.string="admin.name"/>
        </div>
          <!-- <select name="adminName">
            <option value="Sakura" >Sakura</option>
            <option value="Flore">Flore</option>
            <option value="Pause">Pause</option>
            <option value="Vete-Hunden">Vete-Hunden</option>
            <option value="Mrs.Cake">Mrs.Cake</option>
            <option value="Madam">Madam</option>
          </select> -->
        <div class="loginInput">
          <label for="password">Password </label>
          <input type="password"  id="password" v-model.string="admin.password"/>
        </div>
      </form>
      <button type="submit" v-on:click="getLogin(admin.name, admin.password)">LOG IN</button>
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
  