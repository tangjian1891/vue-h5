module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/essential", //基本配置，自带 针对.vue文件
    "plugin:vue/strongly-recommended", //强烈推荐  手动增加 针对 .vue文件
    "eslint:recommended", //eslint 基本配置  针对 js
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

    // 1.1 js中默认双引号 warn 级别 【自动fix】
    quotes: [1, "double"],

    // 1.2 强制分号 warn 级别 【自动fix】
    semi: [1, "always"],

    // 1.3 多行属性时强制增加 逗号  warn 级别 【自动fix】
    "comma-dangle": [1, "always-multiline"],

    // 1.4 关闭强制使用全等 http://eslint.cn/docs/rules/eqeqeq
    eqeqeq: [0],

    //2.1 template 属性折行 warn 单行超过5个就自动折行 【自动fix】
    "vue/max-attributes-per-line": [
      1,
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],

    // 2.2 .vue 的name属性 warn 使用短横线 【自动fix】
    "vue/name-property-casing": ["warn", "kebab-case"],

    // 2.3 Vue组件中Prop名称强制使用驼峰 error 级别
    "vue/prop-name-casing": [2, "camelCase"],

    // 2.4 prop定义应始终尽可能详细，至少指定类型 不允许用数组接收 .error 级别
    "vue/require-prop-types": [2],

    // 2.5 使用组件时，强制 <CoolComponent> 大写  warn 级别 【自动fix】
    "vue/component-name-in-template-casing": [1, "PascalCase"],

    // 2.6 组件中options定义的顺序  遵循vue风格指南 warn 级别 【自动fix】
    "vue/order-in-components": [
      1,
      {
        order: [
          "el",
          "name",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "fetch",
          "asyncData",
          "data",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          "head",
          ["template", "render"],
          "renderError",
        ],
      },
    ],

    // 2.7 属性顺序,遵循vue风格指南 warn 级别 【自动fix】
    "vue/attributes-order": [
      1,
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
        alphabetical: false, //关闭按字母顺序
      },
    ],
    //  关闭 prop属性强制需要默认值
    "vue/require-default-prop": [0],

    //  关闭 强制实行单标签
    "vue/html-self-closing": [0],

    // 关闭标签属性强制使用短横线。
    "vue/attribute-hyphenation": [0],

    // 关闭单行html折行
    "vue/singleline-html-element-content-newline": 0,
  },
};
