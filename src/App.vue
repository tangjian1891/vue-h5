<template>
  <div id="app">
    <!-- 所有页面的统一入口 -->
    <transition :name="transitionName">
      <keep-alive :include="keepAlive">
        <router-view class="Router" />
      </keep-alive>
    </transition>
  </div>
</template>
 <script>
export default {
  name: "app",
  data() {
    return {
      transitionName: "", // 初始过渡动画方向
    };
  },
  computed: {
    keepAlive() {
      // 需要缓存的页面名称数组
      return this.$store.state.keepAlive;
    },
  },
  watch: {
    $route(to, from) {
      // 切换动画
      if (!to.meta.tx) {
        this.transitionName = "";
        return;
      }
      if (to.meta.tx > from.meta.tx) {
        this.transitionName = "slide-right";
      } else if (to.meta.tx < from.meta.tx) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "";
      }
    },
  },
};
</script>
<style lang="scss">
.Router {
  background: #fff;
  position: absolute;
  height: 100%;
  width: 100%;
  transition: all 0.177s ease;
  -ms-transition: all 0.177s ease; /* IE 9 */
  -moz-transition: all 0.177s ease; /* Firefox */
  -webkit-transition: all 0.177s ease; /* Safari 和 Chrome */
  -o-transition: all 0.177s ease; /* Opera */
  will-change: transform;
  top: 0;
  backface-visibility: hidden;
  // perspective: 1000;
}
.slide-left-enter,
.slide-right-leave-active {
  // opacity: 0;
  transform: translate3d(-100%, 0, 0);
  -ms-transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  -webkit-transform: translate3d(-100%, 0, 0);
  -o-transform: translate3d(-100%, 0, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  // opacity: 0;
  transform: translate3d(100%, 0, 0);
  -ms-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  -webkit-transform: translate3d(100%, 0, 0);
  -o-transform: translate3d(100%, 0, 0);
}
</style>
