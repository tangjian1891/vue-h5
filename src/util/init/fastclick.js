import FastClick from "fastclick";
// 重写focus方法.
FastClick.prototype.focus = function(targetElement) {
  var length;
  // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
  if (
    targetElement.setSelectionRange &&
    targetElement.type.indexOf("date") !== 0 &&
    targetElement.type !== "time" &&
    targetElement.type !== "month"
  ) {
    length = targetElement.value.length;
    targetElement.focus(); // IOS13 。input框需要长按才有效
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
};
//  fastclick.解决300ms.点击穿透 .监听准备挂载
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      FastClick.attach(document.body);
    },
    false,
  );
}
