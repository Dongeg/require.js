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
