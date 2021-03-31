<template>
  <div class="drag">
    <div class="content">
      <h4>周二任务列表</h4>
      <ul>
          <li v-for="item in $store.state.list1" :key="item.id">
             <p> {{item.content}} <span @click="del(item)">删除</span></p>
          </li>
      </ul>
      <input type="text" v-model="content" @keyup.enter="add" />
      
      <button @click="add">添加</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        content: '',
        list: [],
    };
  },
  created() {},
  methods: {
      add() {
          let obj = {
              content: this.content,
              id: + new Date(),
          }
          this.$store.commit('addList1',obj)
          this.content = ''
      },
      del(item) {
        this.$store.commit('delList',item)
      }
  },
};
</script>

<style scoped lang="scss">
.drag {
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.2);
  .content {
    width: 800px;
    height: 500px;
    background-color: skyblue;
    margin: auto;
    ul{
        width: 100%;
        li{
          height: 30px;
         
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          span{
            cursor: pointer;
          }
        }
    }
  }
}
</style>