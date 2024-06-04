<template>
   <div class="login-page">


      <h1>Login</h1>
      <form class="login-form" action="">
         <CustomInput type="email" label="Email" />
         <CustomInput type="password" label="Password" />
         <button>Submit</button>
      </form>
   </div>
</template>


<script>
import CustomInput from "../components/custom-input.vue";
export default {
   components: {
      CustomInput
   },

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