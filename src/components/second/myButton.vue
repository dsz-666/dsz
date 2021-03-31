<template>
  <div>
      <button @click="next">下一步</button>
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
      next() {
          this.$router.go()
      }
  },
 }
</script>

<style scoped>
</style>