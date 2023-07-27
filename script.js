// Variable Declaration:
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

// Declaring Stopwatch Function:
function stopwatch(){
    if(timer == true){
        // Increasing Count in every 10 milisecond time.
        count++;

        // Updating Second digit after every 100 count reach of count.
        if(count == 100){
            sec++;
            count = 0;
        }

        // Updating minute digit after every 60 count of second digit.
        if(sec == 60){
            min++;
            sec = 0;
        }

        // Updating hour digit after every 60 count of minute digit.
        if(min == 60){
            hr++;
            min = 0;
            sec = 0;
        }

        // Declaring String Variable To display two digit timing figure below 10.
        var hrS = hr;
        var minS = min;
        var secS = sec;
        var countS = count;
        if(hr<10){
            hrS = "0" + hrS;
        }
        if(min<10){
            minS = "0" + minS;
        }
        if(sec<10){
            secS = "0" + secS;
        }
        if(count<10){
            countS = "0" + countS;
        }

        // Reflecting All The Changes into the original html page.
        document.getElementById("hr").innerHTML = hrS;
        document.getElementById("min").innerHTML = minS;
        document.getElementById("sec").innerHTML = secS;
        document.getElementById("count").innerHTML = countS;

        // Calling stopwatch function again after 10 milisecond.
        setTimeout("stopwatch()",10);
    }
}

// Adding Start Button Function:
function start(){
    timer = true;
    stopwatch();
}

// Adding Stop Button Function:
function stop(){
    timer = false;
}

// Adding Reste Button Function:
function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    
    // Resetting All Clock Digit To Initial ("00") Position.
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}