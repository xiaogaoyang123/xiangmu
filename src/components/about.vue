<template>
  <div>
      <h1>我是about组件</h1>
      <h2><font color="red">{{num}}</font></h2>

  <div class="block">
    <el-image class="imgs" :src="src"></el-image>
  </div>

      
  </div>
</template>

<script>
export default {
    data() {
        return {

            src: 'https://zt.xueersi.com/zaixian/pc-zhu-tiyanke/quanke/img/headerhuman.png',
            num:''
        }
    },
    created() {
        console.log(this.$route);
        this.num=this.$route.params.id;
    },
}
</script>

<style>
.block{
    width: 100%;
    height: 600px;
    background-color: red;
}
.block .imgs{
    width: 70%;
    height: 80%;
    margin-left: -200px;
    margin-top: 30px;
  
}

</style>
