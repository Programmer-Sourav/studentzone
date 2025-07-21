function createTimer(){
    const hoursEl   = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes")
    const secondsEl = document.getElementById("seconds")


    let seconds = 0, minutes = 0, hours = 0;
    let intervalId = 0;

    function updateDisplay(){
        secondsEl.textContent = String(seconds).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
    }

    return{
         start: function() {
                      if (intervalId !== null) return; // avoid multiple timers

                      intervalId = setInterval(()=>{
                        seconds++;
                        if(seconds===60){
                            seconds = 0;
                            minutes++;
                        }

                        if(minutes === 60){
                            minutes = 0;
                            hours++;
                        }

                        updateDisplay();
                      }, 1000)

        },
         stop: function () {
            clearInterval(intervalId);
            intervalId = null;
        },

        reset: function () {
            this.stop();
            seconds = 0;
            minutes = 0;
            hours = 0;
            updateDisplay();
        }
    }
}