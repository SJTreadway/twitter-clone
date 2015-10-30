$(document).ready(function() {
	$('.tweet-compose').on('click', function() {
		$('#tweet-controls').show();
		$(this).css('height', '5em');
	});

	$('.tweet-compose').on('blur', function() {
		$('#tweet-controls').hide();
		$(this).css('height', '2.5em');
	});


});