<template>
  <div>
    <Header></Header>
    <header-nav></header-nav>
    <home-nav></home-nav>
    <home-product :product="phone"></home-product>
    <home-product :product="jiadian"></home-product>
    <home-product :product="zhineng"></home-product>
    <home-product :product="dapei"></home-product>
    <home-product :product="peijian"></home-product>
    <home-product :product="zhoubian"></home-product>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "../common-components/HeaderTop";
import HeaderNav from "../common-components/HeaderNav";
import HomeNav from "./components/HomeNav";
import HomeProduct from "./components/HomeProduct";
import Footer from "../common-components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    HeaderNav,
    HomeNav,
    HomeProduct,
    Footer
  },
  data() {
    return {
      phone: {
        title: "手机",
        bannerList: [
          "/images/home/shoujibanner01.jpg",
          "/images/home/shoujibanner02.jpg"
        ],
        productList: [
          {
            id: "001",
            flag: "新品",
            imgUrl: "/images/home/shouji.jpg",
            name: "小米9 6GB+128GB",
            dec: "骁龙855，索尼4800万超广角微距三摄",
            price: "2999元"
          },
          {
            id: "002",
            flag: "新品",
            imgUrl: "/images/home/shouji.jpg",
            name: "小米9 6GB+128GB",
            dec: "骁龙855，索尼4800万超广角微距三摄",
            price: "2999元"
          },
          {
            id: "003",
            flag: "新品",
            imgUrl: "/images/home/shouji.jpg",
            name: "小米9 6GB+128GB",
            dec: "骁龙855，索尼4800万超广角微距三摄",
            price: "2999元"
          },
          {
            id: "004",
            flag: "新品",
            imgUrl: "/images/home/shouji.jpg",
            name: "小米9 6GB+128GB",
            dec: "骁龙855，索尼4800万超广角微距三摄",
            price: "2999元"
          },
          {
            id: "005",
            flag: "新品",
            imgUrl: "/images/home/shouji.jpg",
            name: "小米9 6GB+128GB",
            dec: "骁龙855，索尼4800万超广角微距三摄",
            price: "2999元"
          },
          {
            id: "006",
            flag: "新品",
            imgUrl: "/images/home/shouji.jpg",
            name: "小米9 6GB+128GB",
            dec: "骁龙855，索尼4800万超广角微距三摄",
            price: "2999元"
          },
          {
            id: "007",
            flag: "新品",
            imgUrl: "/images/home/shouji.jpg",
            name: "小米9 6GB+128GB",
            dec: "骁龙855，索尼4800万超广角微距三摄",
            price: "2999元"
          },
          {
            id: "008",
            flag: "新品",
            imgUrl: "/images/home/shouji.jpg",
            name: "小米9 6GB+128GB",
            dec: "骁龙855，索尼4800万超广角微距三摄",
            price: "2999元"
          }
        ]
      },
      jiadian: {
        title: "家电",
        bannerList: [
          "/images/home/jiadianbanner01.jpg",
          "/images/home/jiadianbanner02.jpg",
          "/images/home/jiadianbanner03.jpg"
        ],
        productList: [
          {
            id: "001",
            flag: "新品",
            imgUrl: "/images/home/jiadian.jpg",
            name: "米家互联网洗烘一体机10kg",
            dec: "",
            price: "1999元"
          },
          {
            id: "002",
            flag: "新品",
            imgUrl: "/images/home/jiadian.jpg",
            name: "米家互联网洗烘一体机10kg",
            dec: "",
            price: "1999元"
          },
          {
            id: "003",
            flag: "新品",
            imgUrl: "/images/home/jiadian.jpg",
            name: "米家互联网洗烘一体机10kg",
            dec: "",
            price: "1999元"
          },
          {
            id: "004",
            flag: "新品",
            imgUrl: "/images/home/jiadian.jpg",
            name: "米家互联网洗烘一体机10kg",
            dec: "",
            price: "1999元"
          },
          {
            id: "005",
            flag: "新品",
            imgUrl: "/images/home/jiadian.jpg",
            name: "米家互联网洗烘一体机10kg",
            dec: "",
            price: "1999元"
          },
          {
            id: "006",
            flag: "新品",
            imgUrl: "/images/home/jiadian.jpg",
            name: "米家互联网洗烘一体机10kg",
            dec: "",
            price: "1999元"
          },
          {
            id: "007",
            flag: "新品",
            imgUrl: "/images/home/jiadian.jpg",
            name: "米家互联网洗烘一体机10kg",
            dec: "",
            price: "1999元"
          },
          {
            id: "008",
            flag: "新品",
            imgUrl: "/images/home/jiadian.jpg",
            name: "米家互联网洗烘一体机10kg",
            dec: "",
            price: "1999元"
          }
        ]
      },
      zhineng: {
        title: "智能",
        bannerList: [
          "/images/home/zhinengbanner01.jpg",
          "/images/home/zhinengbanner02.jpg",
          "/images/home/zhinengbanner03.jpg"
        ],
        productList: [
          {
            id: "001",
            flag: "",
            imgUrl: "/images/home/zhineng.png",
            name: "米家声波电动牙刷",
            dec: "磁悬浮声波马达，定制多种刷牙模式",
            price: "199元"
          },
          {
            id: "002",
            flag: "",
            imgUrl: "/images/home/zhineng.png",
            name: "米家声波电动牙刷",
            dec: "磁悬浮声波马达，定制多种刷牙模式",
            price: "199元"
          },
          {
            id: "003",
            flag: "",
            imgUrl: "/images/home/zhineng.png",
            name: "米家声波电动牙刷",
            dec: "磁悬浮声波马达，定制多种刷牙模式",
            price: "199元"
          },
          {
            id: "004",
            flag: "",
            imgUrl: "/images/home/zhineng.png",
            name: "米家声波电动牙刷",
            dec: "磁悬浮声波马达，定制多种刷牙模式",
            price: "199元"
          },
          {
            id: "005",
            flag: "",
            imgUrl: "/images/home/zhineng.png",
            name: "米家声波电动牙刷",
            dec: "磁悬浮声波马达，定制多种刷牙模式",
            price: "199元"
          },
          {
            id: "006",
            flag: "",
            imgUrl: "/images/home/zhineng.png",
            name: "米家声波电动牙刷",
            dec: "磁悬浮声波马达，定制多种刷牙模式",
            price: "199元"
          },
          {
            id: "007",
            flag: "",
            imgUrl: "/images/home/zhineng.png",
            name: "米家声波电动牙刷",
            dec: "磁悬浮声波马达，定制多种刷牙模式",
            price: "199元"
          },
          {
            id: "008",
            flag: "",
            imgUrl: "/images/home/zhineng.png",
            name: "米家声波电动牙刷",
            dec: "磁悬浮声波马达，定制多种刷牙模式",
            price: "199元"
          }
        ]
      },
      dapei: {
        title: "搭配",
        bannerList: [
          "/images/home/dapeibanner01.jpg",
          "/images/home/dapeibanner02.jpg",
          "/images/home/dapeibanner03.jpg"
        ],
        productList: [
          {
            id: "001",
            flag: "",
            imgUrl: "/images/home/dapei.jpg",
            name: "  小米USB充电器快充版（18W）  ",
            dec: "",
            price: "29.9元"
          },
          {
            id: "002",
            flag: "",
            imgUrl: "/images/home/dapei.jpg",
            name: "  小米USB充电器快充版（18W）  ",
            dec: "",
            price: "29.9元"
          },
          {
            id: "003",
            flag: "",
            imgUrl: "/images/home/dapei.jpg",
            name: "  小米USB充电器快充版（18W）  ",
            dec: "",
            price: "29.9元"
          },
          {
            id: "004",
            flag: "",
            imgUrl: "/images/home/dapei.jpg",
            name: "  小米USB充电器快充版（18W）  ",
            dec: "",
            price: "29.9元"
          },
          {
            id: "005",
            flag: "",
            imgUrl: "/images/home/dapei.jpg",
            name: "  小米USB充电器快充版（18W）  ",
            dec: "",
            price: "29.9元"
          },
          {
            id: "006",
            flag: "",
            imgUrl: "/images/home/dapei.jpg",
            name: "  小米USB充电器快充版（18W）  ",
            dec: "",
            price: "29.9元"
          },
          {
            id: "007",
            flag: "",
            imgUrl: "/images/home/dapei.jpg",
            name: "  小米USB充电器快充版（18W）  ",
            dec: "",
            price: "29.9元"
          },
          {
            id: "008",
            flag: "",
            imgUrl: "/images/home/dapei.jpg",
            name: "  小米USB充电器快充版（18W）  ",
            dec: "",
            price: "29.9元"
          }
        ]
      },
      peijian: {
        title: "配件",
        bannerList: [
          "/images/home/peijianbanner01.jpg",
          "/images/home/peijianbanner02.jpg",
          "/images/home/peijianbanner03.jpg",
        ],
        productList: [
          {
            id: "001",
            flag: "",
            imgUrl: "/images/home/peijian.jpg",
            name: "Redmi Note 7 洞洞保护壳（创意镂空）",
            dec: "",
            price: "29元"
          },
          {
            id: "002",
            flag: "",
            imgUrl: "/images/home/peijian.jpg",
            name: "Redmi Note 7 洞洞保护壳（创意镂空）",
            dec: "",
            price: "29元"
          },
          {
            id: "003",
            flag: "",
            imgUrl: "/images/home/peijian.jpg",
            name: "Redmi Note 7 洞洞保护壳（创意镂空）",
            dec: "",
            price: "29元"
          },
          {
            id: "004",
            flag: "",
            imgUrl: "/images/home/peijian.jpg",
            name: "Redmi Note 7 洞洞保护壳（创意镂空）",
            dec: "",
            price: "29元"
          },
          {
            id: "005",
            flag: "",
            imgUrl: "/images/home/peijian.jpg",
            name: "Redmi Note 7 洞洞保护壳（创意镂空）",
            dec: "",
            price: "29元"
          },
          {
            id: "006",
            flag: "",
            imgUrl: "/images/home/peijian.jpg",
            name: "Redmi Note 7 洞洞保护壳（创意镂空）",
            dec: "",
            price: "29元"
          },
          {
            id: "007",
            flag: "",
            imgUrl: "/images/home/peijian.jpg",
            name: "Redmi Note 7 洞洞保护壳（创意镂空）",
            dec: "",
            price: "29元"
          },
          {
            id: "008",
            flag: "",
            imgUrl: "/images/home/peijian.jpg",
            name: "Redmi Note 7 洞洞保护壳（创意镂空）",
            dec: "",
            price: "29元"
          }
        ]
      },
      zhoubian: {
        title: "周边",
        bannerList: [
          "/images/home/zhoubianbanner01.jpg",
          "/images/home/zhoubianbanner02.jpg",
          "/images/home/zhoubianbanner03.jpg",
        ],
        productList: [
          {
            id: "001",
            flag: "",
            imgUrl: "/images/home/zhoubian.jpg",
            name: "TS尼龙偏光太阳镜 米家定制灰色",
            dec: "",
            price: "149元"
          },
          {
            id: "002",
            flag: "",
            imgUrl: "/images/home/zhoubian.jpg",
            name: "TS尼龙偏光太阳镜 米家定制灰色",
            dec: "",
            price: "149元"
          },
          {
            id: "003",
            flag: "",
            imgUrl: "/images/home/zhoubian.jpg",
            name: "TS尼龙偏光太阳镜 米家定制灰色",
            dec: "",
            price: "149元"
          },
          {
            id: "004",
            flag: "",
            imgUrl: "/images/home/zhoubian.jpg",
            name: "TS尼龙偏光太阳镜 米家定制灰色",
            dec: "",
            price: "149元"
          },
          {
            id: "005",
            flag: "",
            imgUrl: "/images/home/zhoubian.jpg",
            name: "TS尼龙偏光太阳镜 米家定制灰色",
            dec: "",
            price: "149元"
          },
          {
            id: "006",
            flag: "",
            imgUrl: "/images/home/zhoubian.jpg",
            name: "TS尼龙偏光太阳镜 米家定制灰色",
            dec: "",
            price: "149元"
          },
          {
            id: "007",
            flag: "",
            imgUrl: "/images/home/zhoubian.jpg",
            name: "TS尼龙偏光太阳镜 米家定制灰色",
            dec: "",
            price: "149元"
          },
          {
            id: "008",
            flag: "",
            imgUrl: "/images/home/zhoubian.jpg",
            name: "TS尼龙偏光太阳镜 米家定制灰色",
            dec: "",
            price: "149元"
          }
        ]
      }
    };
  }
};
</script>

<style lang="less" scoped>
</style>