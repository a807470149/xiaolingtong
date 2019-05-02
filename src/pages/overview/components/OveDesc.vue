<template>
  <div class="tonglan">
    <div class="box">
      <div class="title">
        <p>更强 骁龙855</p>
        <p>更快 20W 无线闪充</p>
        <p>两大科技全球首批量产</p>
      </div>
    </div>
    <div class="desc">
      <div class="desc-title">
        <p>快！骁龙855 处理器</p>
        <p>游戏快 20%，运算快 45%，3 倍 AI 性能</p>
        <p>高通骁龙 800 系史上最大升级</p>
      </div>
      <div class="desc-txt">
        <p>
          盘点智能手机历代经典机型，哪一代没有骁龙 800 系的强大引擎！骁龙855 不仅在性能上全面飞跃，
          更有再次突破的 7nm - 领先芯片工艺加持。这一切已被我们首次应用于小米9，让你快人一步领略科技魅力。
        </p>
      </div>
      <img src="/images/overview/storage.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "OveDesc"
};
</script>

<style lang="less" scoped>
.tonglan {
  .box {
    background: url("/images/overview/cpu.jpg") no-repeat center center;
    padding: 50px 0;
    .title {
      width: 650px;
      margin: 0 auto;
      p {
        font-size: 40px;
        font-weight: bold;
        color: #fff;
        margin: 20px 0;
      }
    }
  }
  .desc {
    width: 650px;
    margin: 50px auto;
    .desc-title {
      p {
        font-size: 20px;
        font-weight: bold;
        margin: 15px 0;
      }
    }
    .desc-txt {
      line-height: 20px;
      font-size: 13px;
    }
    img {
      width: 100%;
      margin: 30px 0;
    }
  }
}
</style>
