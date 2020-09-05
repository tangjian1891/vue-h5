<template>
  <div>
    <router-link :to="{name:'index'}">回到首页</router-link>
  </div>
</template>

<script>
export default {
  name: "test-page",
  created() {
    let a = {
      b: {
        c: {
          d: false,
        },
      },
    };
    // console.log(a??'13')
    console.log(a?.b?.c?.d);
    // console.log(aa)
  },
  methods: {
    add() {},
  },
};
</script>

<style>
</style>