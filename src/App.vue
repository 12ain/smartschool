<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//  v-cloak @touchmove.prevent
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
  background-color: #d4edf6;
  /* background-color:grey; */

}
a{
  text-decoration: none;
  color: black;
}
[v-cloak] {
  display: none;
}
.mint-header{
  background-color: #44ceff;
}
.container{
  margin-top: 40px;
  margin-bottom: 55px;
}
.mint-searchbar{
  background-color: transparent;
}
.mint-navbar{
  margin-bottom:5px;
}
</style>
