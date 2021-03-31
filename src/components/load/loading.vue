<template>
  <div class="loading" v-show="show">
    <div>{{msg}}</div>
 </div>
</template>

<script>
export default {
  name: '',
  props: {
    show: Boolean,
    msg: String
  },
  data() { 
    return {

    }
  },
  created() {

  },
  methods:{

  },
 }
</script>

<style scoped lang="scss">
.loading{
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: .1);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  div{
    padding: 10px 15px;
    background-color: rgba($color: #000000, $alpha: .5);
    color: skyblue;
  }
}
</style>