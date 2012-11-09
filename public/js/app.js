$(document).ready(function(){
	keys();
});

var keys = function(){
	$(document).keydown(function(){
		$('.pirate').toggleClass('move');
	});
}
