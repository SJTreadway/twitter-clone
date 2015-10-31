$(document).ready(function() {
	$('.tweet-compose').on('click', function() {
		$('#tweet-controls').show();
		$(this).css('height', '5em');
	});

	$('.tweet-compose').on('keyup', function() {
		var counter = 140 - $('.tweet-compose').val().length;
		$('#char-count').text(counter);

		if (counter <= 10) {
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', '#999');
		}

		if (counter < 0) {
			$('#tweet-submit').css('visibility', 'hidden');
		} else {
			$('#tweet-submit').css('visibility', 'visible');
		}
	});				

	$('#tweet-submit').on('click', function() {
		$('#stream').prepend(function() {
			var newTweetImg = "<img class='avatar' src='img/alagoon.jpg' />";
			var newTweetFullName = "<strong class='fullname'>Steven Treadway</strong>";
			return newTweetImg + newTweetFullName;
		});
	});


});