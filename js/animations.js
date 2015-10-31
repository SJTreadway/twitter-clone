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
		var newTweet = $('.tweet-compose').val();
		$('#stream').prepend("<div id='stream'><div class='tweet'><div class='content'><img class='avatar' src='img/alagoon.jpg' /><strong class='fullname'>Steven Treadway</strong><span class='username'>@sjt</span><p class='tweet-text'>" + newTweet + "</p><div class='tweet-actions'><ul><li><span class='icon action-reply'></span> Reply</li><li><span class='icon action-retweet'></span> Retweet</li><li><span class='icon action-favorite'></span> Favorite</li><li><span class='icon action-more'></span> More</li></ul></div><div class='stats'><div class='retweets'><p class='num-retweets'>30</p><p>RETWEETS</p></div><div class='favorites'><p class='num-favorites'>6</p><p>FAVORITES</p></div><div class='users-interact'><div><img src='img/alagoon.jpg' /><img src='img/vklimenko.jpg' /></div></div><div class='time'>1:04 PM - 19 Sep 13</div></div><div class='reply'><img class='avatar' src='img/alagoon.jpg' /><textarea class='tweet-compose' placeholder='Reply to @sjt'/></textarea></div></div></div>");
		newTweet = $('.tweet-compose').val('');
	});

	$('.tweet').on('click', function() {
		$(this).find('.stats').show();
	});

});