<template>
  <div class="drag" v-show="show">
      <div class="content"></div>
 </div>
</template>

<script>
export default {
  name: '',
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
.drag{
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: .2);
    .content{
        width: 800px;
        height: 500px;
        background-color: white;
    }
}
</style>