<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 默认的是hash模式 
      <a href="#/">首页</a>
    <a href="#/detail">详情页</a> -->
    <!--history模式
       <a href="/">首页</a>
    <a href="/detail">详情页</a> -->
    <!-- <router-link to="/" exact>首页</router-link>
    <router-link to="/detail" active-class="nav">详情页</router-link>
    <router-link to="/aa">hello页</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.router-link-active{
  background-color: red;
}
.nav{
  background-color: blue;
}
.one{
  background-color: green;
  color: white;
}
</style>
