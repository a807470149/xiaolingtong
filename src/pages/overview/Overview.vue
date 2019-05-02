<template>
  <div>
    <header-top></header-top>
    <header-nav></header-nav>
    <ove-top></ove-top>
    <ove-banner></ove-banner>
    <ove-par></ove-par>
    <ove-desc></ove-desc>
    <Footer></Footer>
  </div>
</template>


<script>
import HeaderTop from "../common-components/HeaderTop";
import HeaderNav from "../common-components/HeaderNav";
import Footer from "../common-components/Footer";
import OveTop from "./components/OveTop";
import OveBanner from "./components/OveBanner";
import OvePar from "./components/OvePar";
import OveDesc from "./components/OveDesc";

export default {
  name: "Overview",
  components: {
    HeaderTop,
    HeaderNav,
    Footer,
    OveTop,
    OveBanner,
    OvePar,
    OveDesc
  }
}
</script>

<style lang="less" scoped>
  
</style>