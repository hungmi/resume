$(function(){
	var All = $(".well");
	var reset = function(){
		All.removeClass('highlight')
	}
	$("#reset").click(function(){
		reset()
	});
	$("#nav a").click(function(){
		reset()
		$shown_well = $($(this).attr('href'))
		$shown_well.toggleClass('highlight')
	});
	if (location.search.match(/\zh-cn=true/)) {
		$(".zh-tw").hide()
	} else {
		$(".zh-cn").hide()
	}
});