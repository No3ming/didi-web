<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'container'
  }
</script>


<style lang="less">
  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #F4F4F4;
    -webkit-overflow-scrolling : touch;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 22;

    &.contain-nav {
      bottom: 50px;
    }
  }

  .follow ~ .container,
  .follow ~ .shop-page {
    top: 32px;
  }
</style>
