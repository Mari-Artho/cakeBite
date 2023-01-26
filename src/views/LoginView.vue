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

function joinBtn(){
    alert("Thank you! We will get back to you soon! ")
}
</script>

<template>
    <div class="login">
      <h1>Log in</h1>

      <form>
        <label for="adminId">Admin Id
          <input type="number" id="adminId" v-model.number="admins.adminId"/>
        </label>
        <label for="adminPassword">Password
          <input type="string" id="adminPassword" v-model.string="admins.password"/>
        </label>
        <button type="submit">LOG IN</button>
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
  