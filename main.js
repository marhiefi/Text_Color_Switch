const headingsColor = document.getElementsByClassName('h');

let turnRed = 0;
let eachH = 0;

function startChange() {
    turnRed = setInterval(colorChange, 1000)

    function colorChange() {
        eachH %= headingsColor.length;
        headingsColor[eachH].style.color = 'red';
        eachH++;
    }
}

function stopChange() {
    clearInterval(turnRed)
    Array.from(headingsColor).map((heading, i) =>
        heading.style.color = 'black')
    eachH = 0;
}



