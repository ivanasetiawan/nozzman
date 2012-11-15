$(document).ready(function(){
	keys();
	//parallax();
	waveEffect();
});

var keys = function(){
	$(document).keydown(function(){
		$('.pirate').toggleClass('move');
	});
}

var waveEffect = function(){
	$(window).scrollTop(function(){
	});

}

var parallax = function(){
	$('div[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		});
	});
}

