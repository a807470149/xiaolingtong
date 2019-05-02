<template>
  <div>
    <cart-header></cart-header>
    <cart-main></cart-main>
    <Footer></Footer>
  </div>
</template>


<script>
import CartHeader from "./components/CartHeader";
import CartMain from "./components/CartMain";
import Footer from "../common-components/Footer";

export default {
  name: "Cart",
  components: {
    CartHeader,
    CartMain,
    Footer
  }
}
</script>

<style lang="less" scoped>
  
</style>