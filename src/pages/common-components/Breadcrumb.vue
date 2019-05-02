<template>
  <div class="tonglan">
    <div class="banxin">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path:'/search' }">全部结果</el-breadcrumb-item>
        <el-breadcrumb-item>小米9</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>


<script>
export default {
  name: "Breadcrumb"
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";
.tonglan {
  background-color: #f0f0f0;
  height: 34px;
  color: #666;
  .banxin {
    padding-top: 10px;
  }
}
</style>
