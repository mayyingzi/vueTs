<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{myPath}}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'this is js file,get the data  from this.$route',
      myPath: this.$route.name
    }
  }
}
</script>

<style scoped>

</style>
