<template>
  <div class="about">
    <ul>
      <li @click="clickShow1">第一步</li>
      <li @click="clickShow2">第二步</li>
      <li @click="clickShow3">第三步</li>
      <li @click="clickShow4">最后一步</li>
    </ul>
    <div class="first" v-show="show1">
      商品名称：
      <input type="text" v-model="goodsName" />
      <button @click="clickShow1">下一步</button>
    </div>
    <div class="first" v-show="show2">
      商品价格：
      <input type="text" v-model="goodsPrice" />
      <button @click="clickShow1">上一步</button>
      <button @click="clickShow2">下一步</button>
    </div>
    <div class="first" v-show="show3">
      图片路径：
      <input type="text" v-model="goodsImg" />
      <button @click="clickShow2">上一步</button>
      <button @click="clickShow3">下一步</button>
    </div>
    <div class="first" v-show="show4">
      库存量 ：
      <input type="text" v-model="goods" />
      <button @click="clickShow4">上一步</button>
      <button @click="addGoods">提交</button>
      <ul>
        <li v-for="item in $store.state.list2" :key="item.id">
          <p>商品名称： {{item.goodsName}}</p>
          <p>商品价格： {{item.goodsPrice}}</p>
          <p>商品图片： {{item.goodsImg}}</p>
          <p>商品库存： {{item.goods}}</p>
        </li>
      </ul>
      <button @click="delAll(item)">清空重填</button>
    </div>
  </div>
</template>
<script>
import myButton from "../components/second/myButton.vue";
export default {
  components: { myButton },
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      goodsName: "",
      goodsPrice: "",
      goodsImg: "",
      goods: '',
    };
  },
  methods: {
    clickShow1() {
      if (this.goodsName == "") {
        return alert("商品名称不能为空");
      } else {
        this.show2 = true;
        this.show1 = false
      }

      this.show1 = !this.show1;
    },
    clickShow2() {
      if (this.goodsPrice == "") {
        return alert("商品价格不能为空");
      } else {
        this.show2 = false
        this.show3 = true;
      }

      this.show2 = !this.show2;
    },
    clickShow3() {
      if (this.goodsImg == "") {
        return alert("商品图片不能为空");
      } else {
        this.show4 = true;
      }

      this.show3 = !this.show3;
    },
    clickShow4() {
      this.show3 = true;
      this.show4 = !this.show4;
    },
    addGoods() {
      let obj = {
        goodsName: this.goodsName,
        goodsPrice: this.goodsPrice,
        goodsImg: this.goodsImg,
        goods: this.goods,
        id: +new Date()
      }
      this.$store.commit('goodList', obj)
    },
    delAll(item) {
      this.$store.commit('allDel',item)
    }
  },
};
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100%;
  ul {
    width: 300px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    li:hover {
      color: green;
      cursor: pointer;
    }
  }
  // .first{
  //   position: fixed;
  //   top: 200px;
  //   left: 20px;
  // }
}
</style>
