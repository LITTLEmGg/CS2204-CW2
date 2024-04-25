var message = [
    "DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798",
    "DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379",
    "DISNEY PREMIER ACCESS - 1-ATTRACTION, STARTING FROM HK $79"
  ];

var currentMessage = 0;
var promotionInfo = document.getElementById("promotion-info");

function changeMessage() {
    promotionInfo.innerHTML = message[currentMessage];
    currentMessage = (currentMessage + 1) % message.length;
}

changeMessage();
setInterval(changeMessage, 3000);

var video = [
    "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4",
    "https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.mp4"
  ];

  var currentVideo = 0;
  var videoPlayer = document.getElementById("video-player");
  var videoSource = document.getElementById("video-source");

  function switchVideo() {
    currentVideo = (currentVideo + 1) % videos.length;
    videoSource.src = video[currentVideo];
    videoPlayer.load();
    videoPlayer.play();
  }

  videoPlayer.addEventListener("ended", switchVideo);

  var timeSelect = document.getElementById("time");

  function toggleMultiple() {
    timeSelect.multiple = !timeSelect.multiple;
  }

  timeSelect.addEventListener("click", toggleMultiple);

  var checkAvailabilityBtn = document.getElementById("check-availability");
var warningMsg = document.getElementById("warning");

checkAvailabilityBtn.addEventListener("click", function(event) {
  var dateInput = document.getElementById("date");
  var timeInput = document.getElementById("time");
  var guestsInput = document.getElementById("no-of-guests");

  if (dateInput.value.trim() === "" || timeInput.value.trim() === "" || guestsInput.value.trim() === "") {
    event.preventDefault();
    warningMsg.style.display = "block";
  } else {
    var reservationStatus = reserve(dateInput.value, timeInput.value, guestsInput.value);

    if (reservationStatus) {
      alert("Reservation done. Thank you.");
    } else {
      alert("Disneyland has reached the maximum number of visitors for the day");
    }

    event.preventDefault();
  }
});

document.getElementById("reset").addEventListener("click", function() {
  warningMsg.style.display = "none";
});

function reserve(date, time, noOfVisitors) {
  if (noOfVisitors <= 500) {
    return true;
  } else {
    return false;
  }
}