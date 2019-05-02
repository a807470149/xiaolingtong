import Vue from "vue";
export default {

  // 添加商品到购物车
  addCarpanelData(state, data) {
    let boff = true;
    state.goodsList.forEach(item => {
      if (item.id === data.id) {
        item.count++;
        boff = false;
      }
    })
    if (boff) {
      Vue.set(data, "count", 1);
      state.goodsList.push(data);
    }
  },

  // 从购物车删除商品
  deleteCarpanelData(state, id) {
    state.goodsList.forEach((goods,index) => {
      if (goods.id === id) {
        state.goodsList.splice(index, 1);
        return;
      }
    })
  }
}