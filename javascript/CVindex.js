$(function () {
	//浏览器类型检测，低版本（IE6\7\8\9）不支持
	if (/MSIE (9.0|8.0|7.0|6.0)/.test(navigator.userAgent)) {
		$('.g-wrap').hide();
		alert('您的浏览器版本太低，请升级至IE10+或使用360、Chrome、FireFox、Safari等浏览器！');
	}
	// 头部信息
	// 学校和专业hover时分别显示学位证和毕业证
	var header=$('header'),
		xuexiao=header.find('li:eq(6)'),
		zhuanye=header.find('li:eq(7)'),
		xuewei=header.find('li:eq(8)'),
		biye=header.find('li:eq(9)');
	xuexiao.hover(function(){
		xuewei.show().addClass('animated zoomIn');
	},function(){
		xuewei.hide();
	});
	zhuanye.hover(function(){
		biye.show().addClass('animated zoomIn');
	},function(){
		biye.hide();
	});
	//求职目标
	$('nav').find('li').addClass('animated tada');
	//自我评价
	var Cer=$('#SelfAssessment'),
		cerLi=Cer.find('li:eq(0)'),
		cerPng=Cer.find('li:eq(2)');
	cerLi.hover(function(){
		cerPng.show().addClass('animated fadeIn');
	},function(){

	});
});