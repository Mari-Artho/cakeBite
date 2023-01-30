<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'

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

//update test1
// const updateCakes = (slices) => {
//   if(slices <0){
//     alert("Input more than 0");
//     return;
//   }
//   const response =  fetch('http://localhost:3001/cakes/' + adminData.cafeId );
//   //const amountCakes =  response.json();
//   const amountCakes =  response;
//   console.log("Hello Mari");
//   console.log(amountCakes);
//   console.log((adminData.cafeId ));
// };

//update test2
// const data = { slicesCake : 1 }
// function updateCakes2() {
//             axios.put(`http://localhost:3001/cakes/${adminData.cafeId }`, data)

//             .then((response)=> {
//               console.log(response)
//             })
//             .catch((err) => {
//               console.log("err: ", err)
//             })
//         }

//update test3 
// const updateCakes2 = (slicesLeft: number) => {
//   const data = slicesLeft;
//   const url = axios.put(`http://localhost:3001/cakes/${admin.value.cafeId}`, data)
//     //"http://localhost:3000/cakes/ + cafeId", data)

//         .then(() => {
//             console.log('update cake:',url)
//         })

//         .catch(err => {
//         console.log("data is: " + data);
//         console.log("url is: " + url);
        
//         console.log("error 発生です！！:", err);
//         });
// }

//update test4
const updateCakes2 = (cakeId: number, slicesLeft: number) => {
      axios.put(`http://localhost:3001/cakes/${cakeId}/${slicesLeft}`, 
      {
      data: slicesLeft
      })
      .then(response => {
        console.log(`update cake ${cakeId} to ${slicesLeft}!`)
      })
      
      .catch(err => {
        console.log("エラー発生！！" + err);
      })
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
      <h1 v-show="admin.cafeId >0">Admin name : {{ admin.name }}</h1>

      <ul v-for="cake in cakes">
        <li>{{cake.cakeId}}</li>
        <li class="cakeList">{{cake.cakeName}}</li>
        <li><img :src="`${cake.imageURL}`"/></li>
        <li class="cakeList">{{ cake.slicesLeft }} slices</li>
        <input type="number" id="numberCake" v-model.string="cake.slicesLeft"/>
        <button class="saveBtn" type="submit"  v-on:click="updateCakes2(cake.cakeId, cake.slicesLeft)">SAVE</button>
        <!-- <button class="countBtn">+</button>
        <button class="countBtn">-</button> -->
      </ul>
      
      <button v-show="admin.cafeId >0">Logout</button>
   
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
  