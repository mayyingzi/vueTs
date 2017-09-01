<template>
  <div id="app">
    <div class="header">
      <p>header:</p>
      <router-link to="/">>>in js file, Hello.vue</router-link>
      <router-link to="/testTs">>>in ts file, testTs.vue</router-link>
    </div>
    <div class="content">
      <p>content:</p>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  font-size: 28px;
}
.header{
  width: 35%;
  border: 1px solid #ff4d6a;
  margin-right:10px;
  text-align: left;
}
a{
    display: block;
    color: #000;
    text-decoration: none;
    font-size: 18px;
    text-align: left;
    line-height: 50px;
    margin-bottom: 20px;
    padding-left:10px;

  }
.router-link-exact-active{
  color:#ff4d6a;
}
.content{
  flex: 1;
  border: 1px solid #ff4d6a;
  text-align: left;
  padding: 10px;
}
</style>
