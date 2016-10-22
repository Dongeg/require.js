//自定义模块
define(['jquery'],function($){
	function plus(a,b){
		return a+b;
	}
	function isEqual(a,b){
		return a===b;
	}

	return {
		plus:plus,
		isEqual:isEqual
	}
})
