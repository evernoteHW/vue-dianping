<template>
  <div id="app">
    <mainheader></mainheader>
    <div>
      tab
    </div>
    <div>
      content
    </div>
  </div>
</template>

<script>
  import mainheader from './components/mainheader'
  export default {
    name: 'app',
    components: {
      mainheader
    }
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
}
</style>
