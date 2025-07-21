
 let interval = null;
function startTheTimer(){
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    
    let seconds =0, minutes =0, hours = 0;
  
        interval = setInterval(()=>{
        seconds = seconds + 1;
        secondsEl.textContent = `0${seconds}`;
        if(seconds===60){
            minutes = minutes + 1;
            minutesEl.textContent = `0${minutes}`;
            seconds = 0;
        }
        if(minutes === 60){
            hours = hours + 1;
            hoursEl.textContent = `0${hours}`;
            minutes = 0;
            seconds = 0;
        }
        }, 1000)
       
     
        // Hook for the button
    
}

function start() {
    if (!interval) {
        startTheTimer();
    }
}

// Optional: stop/reset function
function stopTimer() {
    clearInterval(interval);
    interval = null;
}