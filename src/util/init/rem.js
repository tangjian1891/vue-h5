// import vm from "../main";
(function(document, window) {
  var html = document.documentElement;
  var resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";

  // 处理屏幕尺寸变化函数
  var handleResize = function() {
    var clientWidth = html.clientWidth;
    if (!clientWidth) return;
    var _fontSize; // 最大为40px。 PC端体验最佳
    // 注意:一般不会发生，如果你在浏览器上由PC切换到移动端。那么是没有 window.orientation 属性的。
    if (
      window.orientation === undefined ||
      window.orientation === 180 ||
      window.orientation === 0
    ) {
      // console.log("竖屏状态,最大为50px,屏幕宽度为768px,与 网易 设计接近！");
      _fontSize = clientWidth / 10; // 以苹果6为基础，如果你是苹果6，那么就是37.5px

      // 最大缩放不能超过50px。屏幕宽度最大已设定为768px
      if (_fontSize > 50) {
        _fontSize = 50;
      }
    }
    // 在有 window.orientation 的情况下
    if (window.orientation === 90 || window.orientation === -90) {
      // console.log("横屏状态,最大就是37.5px！");
      _fontSize = 37.5;
    }
    html.style.fontSize = _fontSize + "px";

    // 触发横竖屏切换。如果页面有echart，可以使用vuex触发屏幕改变
    // vm.$store.commit("changeScrennOrientation");
  };
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, handleResize, false); // 监听屏幕横竖屏
  document.addEventListener("DOMContentLoaded", handleResize, false); // 监听初始化
})(document, window);
