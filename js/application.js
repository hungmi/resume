$(function(){
	var All = $(".content > div > div");
	$(".nav a").click(function(){
		All.removeClass('highlight');
		All.addClass('hide');
		$($(this).attr('href')).removeClass('hide');
		$($(this).attr('href')).addClass('highlight');
	});
	$("#reset").click(function(){
		All.removeClass('highlight');
		All.removeClass('hide');
	});
});