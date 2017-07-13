<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
        <router-link to="/" class="tab-item">商品</router-link>
        <router-link to="/ratings" class="tab-item">评论</router-link>
        <router-link to="/sellers" class="tab-item">商家</router-link>
    </div>
    <div>
      content
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from 'components/mainheader'
  // const SUCCESS = 200

  export default {
    name: 'app',
    data () {
      return {
        seller: {}
      }
    },
    created () {
      this.$http.get('static/seller.json', {}).then((responce) => {
        responce = responce.body
        this.seller = responce.seller
        // console.log(this.seller)
      })
    },
    components: {
      'v-header': header
    }
  }
</script>
    
<style lang="stylus" ref="stylesheet/stylus">
#app 
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    .tab-item 
      flex 1
      text-align center
      text-decoraction none
      font-size 20px
</style>

