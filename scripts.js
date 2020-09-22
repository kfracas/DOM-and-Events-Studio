// Write your JavaScript code here.
// Remember to pay attention to page loading!

function load () {
    let button = document.getElementById("takeoff");
    let land = document.getElementById("landing");
    let abortMission = document.getElementById("missionAbort");
    let moveUp = document.getElementById("up");
    let moveDown = document.getElementById("down");
    let moveRight = document.getElementById("right");
    let moveLeft = document.getElementById("left");

    function takeOff () {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            button = document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            shuttleBackground.style = "background-color: blue";
            button = document.getElementById("spaceShuttleHeight").innerHTML += 10000;
        }
    }

    function landing () {
        let response = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (response) {
            land = document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
            shuttleBackground.style = "background-color: green";
            button = document.getElementById("spaceShuttleHeight").innerHTML = 0;
        } 
    }

    function missionAbort () {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            abortMission = document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            shuttleBackground.style = "background-color: green";
            abortMission = document.getElementById("spaceShuttleHeight").innerHTML = 0;
        } 
    }

    function shuttleUp () {
        moveUp = document.getElementById("spaceShuttleHeight").innerHTML += 10000;
    }

    function shuttleDown () {
        moveDown = document.getElementById("spaceShuttleHeight").innerHTML -= 10000;
    }

    function shuttleRight () {
        moveRight = document.getElementById("spaceShuttleHeight").innerHTML += 10000;
    }

    function shuttleLeft () {
        moveLeft = document.getElementById("spaceShuttleHeight").innerHTML += 10000;
    }

        button.addEventListener("click", takeOff);
        land.addEventListener("click", landing);
        abortMission.addEventListener("click", missionAbort);
        moveUp.addEventListener("click", shuttleUp);
        moveDown.addEventListener("click", shuttleDown);
        moveRight.addEventListener("click", shuttleRight);
        moveLeft.addEventListener("click", shuttleLeft);

        console.log(document.getElementById("rocket").)

        
};

window.onload = load;
