
var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
    });


	const playButton = document.getElementById('play');
	const pauseButton = document.getElementById('pause');
	const volumeDisplay = document.getElementById('volume');
	const slowerButton = document.getElementById('slower');
	const skipButton = document.getElementById("skip");
	const muteButton = document.getElementById("mute");
	const speedupbutton = document.getElementById('faster');
	const vintageButton = document.getElementById("vintage");
    const origButton = document.getElementById("orig");

    vintageButton.addEventListener("click", function() {
        // Add the oldSchool class to the video element
        video.classList.add("oldSchool");
    });

    origButton.addEventListener("click", function() {
        // Remove the oldSchool class from the video element
        video.classList.remove("oldSchool");
    });


	speedupbutton.addEventListener("click", function() {
		playbackRate += 0.1 * Math.abs(playbackRate);
        video.playbackRate = playbackRate;
        console.log("New speed: " + playbackRate.toFixed(2));
	});


    muteButton.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = "Mute";
        } else {
            video.muted = true;
            muteButton.textContent = "Unmute";
        }
    });

	pauseButton.addEventListener('click', function () {
        video.pause();
	});

	playButton.addEventListener('click', function () {
        video.play();
        updateVolumeDisplay();
    });

	skipButton.addEventListener("click", function() {
        // Check if the video has ended
        if (video.currentTime + 10 >= video.duration) {
            // If yes, go back to the start of the video
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current video location: " + video.currentTime);
    });

	
	function updateVolumeDisplay() {
		volumeDisplay.textContent = Math.round(video.volume * 100) + '%';
	}

	slowDownButton.addEventListener("click", function() {
        playbackRate -= 0.1 * Math.abs(playbackRate);
        video.playbackRate = playbackRate;
        console.log("New speed: " + playbackRate.toFixed(2));
	});
	



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

