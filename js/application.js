$(function(){
	var all = $(".well");
	var reset = function(){
		all.removeClass('highlight')
	}
	$("#reset").click(function(){
		reset()
	});
	$("#nav a").click(function(){
		reset()
		$shownWell = $($(this).attr('href'))
		$shownWell.toggleClass('highlight')
	});
	if (location.search.match(/\en=true/)) {
		$(".zh-tw").hide()
	} else {
		$(".en").hide()
	}
});