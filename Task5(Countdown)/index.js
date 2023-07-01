// Initialize variables for the timer by destructing method
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
// Reference to the timer display element
let timerRef = document.querySelector('.timerDisplay');
// Reference to the interval object, initially set to null
let int = null;

// Event listener for the "start" button
document.getElementById('startTimer').addEventListener('click', ()=>{
    // If timer is already running, stop it before starting again
    if(int!==null){
        clearInterval(int);
    }
    // Start the timer and save the interval object
    int = setInterval(displayTimer,10);
});

// Event listener for the "pause" button
document.getElementById('pauseTimer').addEventListener('click', ()=>{
    // Stop the timer by clearing the interval
    clearInterval(int);
});

// Event listener for the "reset" button
document.getElementById('resetTimer').addEventListener('click', ()=>{
    // Stop the timer and reset all variables to zero
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    // Update the timer display to show the reset time
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});

// Function to update the timer display
function displayTimer(){
    // Increment milliseconds by 10
    milliseconds+=10;
    // If milliseconds reaches 1000, reset to zero and increment seconds
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        // If seconds reaches 60, reset to zero and increment minutes
        if(seconds == 60){
            seconds = 0;
            minutes++;
            // If minutes reaches 60, reset to zero and increment hours
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    // Format the timer display with leading zeroes as necessary
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
