var vid = document.getElementById("player1")
var volume = 100

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")

	if(document.querySelector("#mute").textContent == "Mute"){
		document.getElementById("volume").innerHTML = volume + "%"
		document.getElementById("slider").value = volume
		vid.volume = volume / 100
	}
	else {
		document.getElementById("volume").innerHTML = 0 + "%"
		document.getElementById("slider").value = 0
		vid.volume = 0 / 100
	}

	
	vid.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	vid.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video")
	vid.playbackRate *= 0.9
	console.log(vid.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video")
	vid.playbackRate /= 0.9
	console.log(vid.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video")
	if(vid.currentTime + 10  > vid.duration) {
		vid.currentTime = 0
	}
	else {
		vid.currentTime += 10
	}
	console.log(vid.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video")
	if(document.querySelector("#mute").textContent == "Mute"){
		document.getElementById("volume").innerHTML = 0 + "%"
		document.getElementById("slider").value = 0
		vid.volume = 0
		document.querySelector("#mute").textContent = "Unmute"
	}
	else {
		document.getElementById("volume").innerHTML = volume + "%"
		document.getElementById("slider").value = volume
		vid.volume = volume / 100
		document.querySelector("#mute").textContent = "Mute"
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	volume = document.getElementById("slider").value
	document.getElementById("volume").innerHTML = volume + "%"
	vid.volume = volume / 100
	if(vid.volume != 0) {
		document.querySelector("#mute").textContent = "Mute"
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	vid.className = "oldSchool"
});

document.querySelector("#orig").addEventListener("click", function() {
	vid.className = "video"
});