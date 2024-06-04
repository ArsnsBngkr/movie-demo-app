<template>

   <div class="login-page" v-if="!isLoggedIn">
      <h1>Login</h1>
      <form class="login-form" @submit.prevent="handleSubmit">
         <CustomInput type="email" label="Email" v-model="emailValue" :handleOnKeyUp="handleOnKeyUp" />
         <CustomInput type="password" label="Password" v-model="passwordValue" :handleOnKeyUp="handleOnKeyUp" />
         <button>Submit</button>
      </form>
   </div>
   <div v-else>User Logged In

      <router-link to="/" class="top-bar-link">
            <span>Home Page</span>
          </router-link>
   </div>
</template>

<script>
import CustomInput from "../components/custom-input.vue";

import router from '../router'

export default {
   components: {
      CustomInput
   },
   data: function () {
      return {
         emailValue: '',
         passwordValue: '',
         isLoggedIn:false
      }
   },
   methods: {
      handleSubmit() {
         if(this.emailValue==="user@gmail.com" && this.passwordValue==="user"){
          this.isLoggedIn=true;
          router.push('/');
      
         }
      },
      handleOnKeyUp() {
         console.log("key up --email:" + this.emailValue + " password:" + this.passwordValue)
      }
   }

}


</script>



<style>
.login-page {
   padding: 0 20px;
}

.login-form {

   padding: 20px;
   justify-content: flex-start;

}

.login-form button {
   display: block;
   margin-top: 40px;
   max-width: 240px;
}
</style>