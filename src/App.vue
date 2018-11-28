<template>
  <div id="app">
    <TheNavbar />
    <router-view class="content"/>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'
export default {
  name: 'app',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style>
.content {
  max-width: 1170px;
  margin: 0 auto; 
  }
  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
