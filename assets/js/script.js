
function timer(){
    var sec = 75;
    var timer = setInterval(function(){
        document.getElementById("time-left").innerHTML = "Time: " + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            //document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

timer();