<template>
  <div class="tonglan">
    <div class="banxin">
      <ul class="clearfix">
        <li v-for="item in parList" :key="item.index">
          <p class="name">{{ item.name }}</p>
          <p class="desc">{{ item.desc }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OvePar",
  data() {
    return {
      parList: [
        {
          name: "全球首批骁龙855",
          desc: "年度超旗舰处理器"
        },
        {
          name: "索尼 4800 万像素三摄",
          desc: "DxOMark 拍照世界前三"
        },
        {
          name: "支持超广角、微距拍摄",
          desc: "开启手机摄影非凡视野"
        },
        {
          name: "全球首款 20W 无线闪充",
          desc: "速度堪比有线快充"
        },
        {
          name: "全息幻彩玻璃机身",
          desc: "手心中的梦幻彩虹光"
        },
        {
          name: "全曲面轻薄设计",
          desc: "怦然心动的好手感"
        },
        {
          name: "第五代极速屏下指纹",
          desc: "快25% 解锁超灵敏"
        },
        {
          name: "三星 AMOLED 屏幕",
          desc: "90.7% 超高屏占比"
        },
        {
          name: "标配 27W 有线快充",
          desc: "充满只需 60 分钟"
        },
        {
          name: "蓝宝石玻璃镜片",
          desc: "超硬耐磨，长久保护"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.tonglan {
  background: linear-gradient(
    to right,
    #fffbf4,
    #fffbf4,
    #e9f6f9,
    #d5f2ff,
    #d5f2ff
  );
  padding: 30px 0;
  .banxin {
    ul {
      li {
        width: 240px;
        height: 60px;
        float: left;
        margin-top: 10px;
        p.name {
          font-size: 16px;
          line-height: 30px;
        }
        &:nth-child(1) {
          color: #ff2b49;
        }
        &:nth-child(2) {
          color: #f72550;
        }
        &:nth-child(3) {
          color: #e42961;
        }
        &:nth-child(4) {
          color: #c72d76;
        }
        &:nth-child(5) {
          color: #a13591;
        }
        &:nth-child(6) {
          color: #c52e78;
        }
        &:nth-child(7) {
          color: #a9348d;
        }
        &:nth-child(8) {
          color: #7e38a6;
        }
        &:nth-child(9) {
          color: #673bb2;
        }
        &:nth-child(10) {
          color: #413ec3;
        }
      }
    }
  }
}
</style>

