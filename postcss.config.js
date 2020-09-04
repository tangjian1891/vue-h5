const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

module.exports = () => {
  // vant 37.5 [link](https://github.com/youzan/vant/issues/1181)
  //  调整了vant 根元素的大小（2倍图）。保持项目一致性
  // const isVant = file && file.dirname && file.dirname.indexOf("vant") > -1;
  // const rootValue = isVant ? 37.5 : 75;
  // 设计稿为375.无需调整vant大小
  return {
    plugins: [
      autoprefixer(),
      pxtorem({
        rootValue: 37.5,
        propList: ["*"],
        minPixelValue: 1.1,
      }),
    ],
  };
};
