<template>
  <div>
    <header-top></header-top>
    <header-nav></header-nav>
    <detail-top></detail-top>
    <detail-product></detail-product>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderTop from "../common-components/HeaderTop";
import HeaderNav from "../common-components/HeaderNav";
import Footer from "../common-components/Footer";
import DetailTop from "./components/DetailTop";
import DetailProduct from "./components/DetailProduct";

export default {
  name: "Detail",
  components: {
    HeaderTop,
    HeaderNav,
    Footer,
    DetailTop,
    DetailProduct
  }
}
</script>

<style lang="less" scoped>
  
</style>
