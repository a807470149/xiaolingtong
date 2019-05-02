<template>
  <div>
    <header-top></header-top>
    <header-nav></header-nav>
    <Breadcrumb></Breadcrumb>
    <search-list></search-list>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderTop from "../common-components/HeaderTop";
import HeaderNav from "../common-components/HeaderNav";
import Footer from "../common-components/Footer";
import Breadcrumb from "../common-components/Breadcrumb";
import SearchList from "./components/SearchList";

export default {
  name:"Search",
  components: {
    HeaderTop,
    HeaderNav,
    Footer,
    Breadcrumb,
    SearchList
  }
}
</script>

<style lang="less" scoped>
  
</style>
