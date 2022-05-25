const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hand = document.querySelectorAll(".hand");

function setDate() {
    const now = new Date()
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours, minutes, seconds);

    //conditional statements below smooth out animation on clock hands at top of clock

    if (seconds === 0) {
        secondHand.style.transition = "none";
        minuteHand.style.transition = "none";
        hourHand.style.transition = "none";
    };

    if (seconds === 1) {
        secondHand.style.transition = "all 0.05s";
        minuteHand.style.transition = "all 0.05s";
        hourHand.style.transition = "all 0.05s";
    }
}

setInterval(setDate, 1000);