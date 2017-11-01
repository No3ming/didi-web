<template>
  <grid>
    <grid-item  class="header-item">
      <span class="grid-center" v-html="order.name"></span>
    </grid-item>
    <grid-item  class="header-item">
      <span class="grid-center" v-html="order.type"></span>
    </grid-item>
    <grid-item  class="header-item">
      <span class="grid-center" v-html="order.price"></span>
    </grid-item>
    <grid-item  class="header-item">
      <router-link class="grid-center" :to="'/order/detail/' + order.id">可以抢单</router-link>
    </grid-item>
  </grid>
</template>

<script>
  import { Grid, GridItem } from 'vux'

  export default {
    name: 'orderItem',
    data () {
      return {

      }
    },
    props: {
      order: Object
    },
    components: {
      Grid,
      GridItem
    }
  }
</script>
<style lang="less">

</style>
