<template>
  <div class="nav-bar one-px-top">
    <router-link class="nav-bar-item" to="/canOrder">
      <icon type="success"></icon>
      <p class="nav-bar-label">可抢的订单</p>
    </router-link>
    <router-link class="nav-bar-item" to="/progress">
      <icon type="success"></icon>
      <p class="nav-bar-label">进行中的订单</p>
    </router-link>
    <router-link class="nav-bar-item" to="/completed">
      <span class="badge-box">
         <icon type="success"></icon>
          <badge text="888" class="badge"></badge>
      </span>
      <p class="nav-bar-label">完成的订单</p>
    </router-link>
  </div>
</template>

<script>
  import { Icon, Badge } from 'vux'

  export default {
    name: 'nav-bar',
    components: {
      Icon,
      Badge
    }
  }
</script>

<style lang="less">
  .nav-bar {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #FEFDFE;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, .1);
    z-index: 25;

    &.hide {
      display: none;
    }
  }

  .nav-bar-item {
    display: block;
    flex: 1;
    text-align: center;
    font-size: 22px;
    i {
      font-size: 22px;
      color: #C2C2C3;
    }
  }

  .nav-bar-label {
    font-size: 10px;
    color: #9E9E9E;
  }

  .router-link-active {
    i,
    .nav-bar-label {
      color: #F23030;
    }
  }

  .badge-box {
    position: relative;
    left: 0;
    top: 0;

    .badge {
      position: absolute;
      right: -8px;
      top: 0;
    }
  }
</style>
