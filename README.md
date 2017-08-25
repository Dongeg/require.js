# require.js
require.js 模块化

<h3>作用</h3>

(1)实现js文件的异步加载，避免网页失去响应；
  
(2)管理模块之间的依赖性，便于代码的编写和维护。

(3)防止命名冲突

(4)代码以模块化方式组织
<h3>require.js的加载</h3>

放在<code></body></code>标签之前，意为加载完require.js后再加载入口文件main.js
```html
<script src="js/require.js" data-main="js/main"></script>
```
具体请看demo

<h3>加载不符合AMD规范模块</h3>
underscore,underscore不符合amd规范

```js
　　require.config({
　　　　shim: {

　　　　　　'underscore':{
　　　　　　　　exports: '_'
　　　　　　},
　　　　　　'underscoreunderscoreunderscore': {
　　　　　　　　deps: ['underscore', 'jquery'],
　　　　　　　　exports: 'Backbone'
　　　　　　}
　　　　}
　　});
```
require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。
具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。

<a href="http://www.ruanyifeng.com/blog/2012/11/require_js.html">参考23333</a>
