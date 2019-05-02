<template>
  <div>
    <login-header></login-header>
    <login-body></login-body>
    <login-footer></login-footer>
  </div>
</template>

<script>
import LoginHeader from "./components/LoginHeader";
import LoginBody from "./components/LoginBody";
import LoginFooter from "./components/LoginFooter";
export default {
  name: "Login",
  components: {
    LoginHeader,
    LoginBody,
    LoginFooter
  }
}
</script>

<style lang="less" scoped>
  
</style>
