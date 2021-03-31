<template>
  <div class="home">
  <ul>
    <li>周一</li>
    <li @click="goSecond">周二
       <ul class="uu">
          <li v-for="item in $store.state.list1" :key="item.id">
             <p> {{item.content}} </p>
          </li>
      </ul>
    </li>
    <li>周三</li>
    <li>周四</li>
    <li>周五</li>
    <li>周六</li>
    <li>周日</li>
  </ul>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  methods: {
    goSecond() {
      this.$router.push('/drag1')
    }
  },
}
</script>
<style lang="scss" scoped>
  .home{
   width: 100%;
   height: 100%;
   .uu{
     display: flex;
     flex-direction: column;
     margin-top: 100px;
   }
   ul{
     width: 100%;
     height: 100%;
     background-color: #ccc;
     display: flex;
     justify-content: space-around;
     align-items: center;
     li{
       width: 14.5%;
       height: 30px;
       text-align: center;
       line-height: 30px;
       border: 1px solid gray;
     }
   }

  }
</style>
