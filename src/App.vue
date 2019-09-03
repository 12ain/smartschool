<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  background-color: #ddedf3;
}
.mint-header{
  background-color: #44ceff;
}
.container{
  margin-top: 40px;
}
.mint-searchbar{
  background-color: transparent;
}
</style>
