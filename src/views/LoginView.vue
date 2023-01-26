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
</script>

<template>
    <div class="login">
      <h1>This is login view</h1>

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
</template>
  
<style  lang="scss">
@media (min-width: 1024px) {


}
</style>
  