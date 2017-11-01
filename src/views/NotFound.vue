<template>
  <container class="not-found">
    <p class="not-found-tip">非常抱歉您访问的页面不存在</p>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'

  export default {
    name: 'not-found',
    data () {
      return {
      }
    },
    components: {
      Container
    }
  }
</script>

<style>
  .not-found {
    padding-top: 76px;
    text-align: center;
  }

  .not-found-tip {
    margin-top: 40px;
    margin-bottom: 12px;
    font-size: 18px;
    color: #767676;
  }
</style>
