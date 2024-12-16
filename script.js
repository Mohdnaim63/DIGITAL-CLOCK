const time = document.getElementById("time")
const timeFormat= document.getElementById("timeFormat")
const changeFormat = document.getElementById("changeFormat")

let is24HourFormat = true;


document.addEventListener("DOMContentLoaded",() =>{
    setInterval(showTime,1000);

    changeFormat.addEventListener("click", toggleFormat);
})
 function showTime(){
    let date = new Date();
    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    if (!is24HourFormat) {
        timeFormat.textContent = hr >= 12 ? "PM" : "AM";
        hr = hr % 12 || 12; 
    } else {
        timeFormat.textContent = ""; 
    }

    hr = hr<10 ? `0${hr}` : hr;
    mins =mins<10 ? `0${mins}` : mins;
    secs = secs<10 ? `0${secs}` : secs;
    time.textContent = `${hr} : ${mins} : ${secs}`
 }
 function toggleFormat() {
    is24HourFormat = !is24HourFormat; 
}

