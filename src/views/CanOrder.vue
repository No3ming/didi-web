<template>
  <container class="contain-nav canOrder">
    <div style="height:44px;">
      <sticky scroll-box="vux_view_box_body" ref="sticky" :offset="46" :check-sticky-support="false">
        <grid>
          <grid-item v-for="(item, index) in gridHeader" :key="index" class="header-item">
            <span class="grid-center" v-html="item"></span>
          </grid-item>
        </grid>
      </sticky>
    </div>
    <div>
      <order-item v-for="(item, index) in orders" :key="index" :order="item"></order-item>
    </div>
  </container>
</template>

<script>
  import Container from '../components/Container.vue'
  import { Sticky, Grid, GridItem } from 'vux'
  import OrderItem from '../components/OrderItem.vue'

  export default {
    name: 'canOrder',
    data: () => {
      return {
        gridHeader: ['客户名字', '服务项目', '服务佣金', '订单状态'],
        orders: [
          {id: 1, name: '张学友', type: '工商注册', price: 1000, status: 0},
          {id: 2, name: '张学友1', type: '工商服务', price: 1200, status: 0}
        ]
      }
    },
    components: {
      Container,
      Sticky,
      Grid,
      GridItem,
      OrderItem
    }
  }
</script>

<style lang="less">
  .canOrder {
    .header-item {
      padding: 0;
      font-size: 14px;
      color: #333;
      text-align: center;
      line-height: 32px;
    }
  }
</style>
