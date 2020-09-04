## 1.  eslint针对js

主要是.vue单文件组件中的template javascript格式化，css倒是无所谓.

### 1.1 单双引号问题（自动fix）

template模板中统一是双引号

javascript中统一是双引号

http://eslint.cn/docs/rules/semi 分号争议

参考https://vuejs.github.io/vetur/formatting.html#formatters vetur插件的格式化

配置参考:

以vscode为例:

只安装vetur和prettier。



### 1.2 强制分号（自动fix）



### 1.3 多行属性时，强制增加逗号(自动fix)



### 1.4 关闭强制使用全等。可以使用相等==



### 2. 针对.vue文件



### 2.1 模板上标签属性 自动折行，超过5个自动折(自动fix)



### 2.2 .vue组件的name属性使用 短横线 （自动fix）



### 2.3 .vue组件中prop属性强制使用驼峰 (error级别)



### 2.4  .vue组件中prop应极可能详细，至少指定类型(error级别)



### 2.5 .vue组件中。引入组件标签时，强制转为首字母大写(自动fix)



### 2.6 .vue组件中。options顺序 (自动fix)

根据风格指南推荐，减少心智负担，排查代码更容易定位



### 2.7 .vue组件中。标签中的属性顺序(自动fix)

根据风格指南推荐，减少心智负担，查看标签属性更加规范





**如果想要eslint不检测某些代码**

- 不检测某一行，在这行上面使用 `// eslint-disable-next-line `   注释 即可

- 不检测某行一下的多行。 使用 ` // eslint-disable `      注释即可，注释一下，全部不检测

  





### 关于组件的name属性

1.keep-alive生效的是.vue组件的中的name属性，区别大小写。

2.在devtools中的可视化调试中的组件名称，是组件name的大写,被强制转换了。但这个没有任何影响，调试的时候自己知道即可，无需关心。



已用eslint配置，统一短横线分割。不采用首字母大写。

这样在一定程度上可以保证文件夹，.vue组件，name，以及路由中的name一致。





### vue文件模板上的属性(可商榷)

虽然html上比较喜欢data-name="你好" 这种短横线的命名风格，但是为保证减少属性转换。

统一让html属性与props统一，采用驼峰命名即可。与2.3对应



关于IDE的插件问题:

代码风格优先以lint为主，辅助配合vetur和prettier就行。

已经配置了.prettierrc文件。你安装prettier插件就行，会优先读取.prettierrc文件配置





vetury与eslint在.vue模板的html 中冲突的地方，请自行配置，不然很恶心。

配置现在发现的有下面两个

`

 "vetur.format.defaultFormatterOptions": {

  	"prettyhtml": {

   		"printWidth": 150, // 尽可能拉长。避免与5个属性反复冲突

​		   "singleQuote": false // 模板中应使用双引号

​	  }

 }

`

