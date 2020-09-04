<template>
  <div>
    首页
    <router-link :to="{name:'test'}">去测试页面</router-link>
    <div class="test-class">
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  name: "index",
  components: {
    [Button.name]: Button,
  },
  created() {
    let a = {
      b: {},
    };
    console.log(a?.b?.c?.d?.f);
  },
  methods: {
    add() {
      let a = {
        b: {},
      };
      console.log(a?.b?.c);
    },
  },
};
</script>

<style lang="scss"  scoped>
.test-class {
  .van-button--normal {
    background-color: $active-color;
  }
}
</style>