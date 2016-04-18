$(document).ready(function(){

	// Slideshow (fallback at mobile)
	// ------------------------------

	// As the video plugin does not work on mobile you can add slideshow images here as a fallback.
	var slideshowBackgroundURLS = [
		"{{asset('plugins/fullscreen-video/images/slideshow-1.jpg')}}",
		"{{asset('plugins/fullscreen-video/images/slideshow-2.jpg')}}",
		"{{asset('plugins/fullscreen-video/images/slideshow-3.jpg')}}"
	];

	// Sets fade time for mobile slideshow
	var slideshowFade = 1000;

	// Sets slide duration for mobile slideshow
	var slideshowDuration = 4000;

	// Enable video background colour - 'on' to enable, 'off' to disable. This can be set in the CSS
	var videoBackground = 'on';

	// Paste YouTube URL into the videoBackgronudURL variable - use the YouTube link NOT the embed code
	var videoBackgroundURL = 'https://www.youtube.com/watch?v=0LtminEkoVY';

	// Sets whether the video is muted or not - 'true' to enable, 'false' to disable
	var videoMuted = true;




	// Video background
	// ----------------

	if(videoBackground == 'on') {
	    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$(".player").hide();
			$.backstretch(slideshowBackgroundURLS, {
		    	fade: slideshowFade,
		   		duration: slideshowDuration
			});
		}

		// Options for YouTube player
		else {
			$(".player").mb_YTPlayer({
				// Adds YouTube URL from videoBackgroundURL option above
				videoURL: videoBackgroundURL,

				// Sets the video container
				containment: '.video-container',

				// Enables video autoplay on page load
				autoPlay: true,

				// Change this value above at videoMuted
				mute: videoMuted,

				// Sets where the video playback will start
				startAt: 0,

				// Sets where the video playback ends
				stopAt: 25,

				// Sets opacity of the video from 0 to 1
				opacity: 1,

				// Sets whether the video is fullscreen to cropped - 'true' for fullscreen, 'false' for cropped
				optimizeDisplay: true,

				// Shows or hide the YouTube video controls - 'true' to show and 'false' to hide
				showControls: true,

				// Sets whether there video loops or plays through once - 'true' to loop and 'false' for one playback
				loop: true,

				// Set video volume page load
				vol: 50,

				// Activates the pause when the window looses focus
				stopMovieOnBlue: true
			});

			if(videoMuted == false) {
				$('.videoMuteButton').show();
			}
		}
	}
	else {
		$.backstretch(slideshowBackgroundURLS, {
		    fade: slideshowFade,
		    duration: slideshowDuration
		});
	}
});
