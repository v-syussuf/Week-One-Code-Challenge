//Function speedDetector detects the speed of a car as input
function speedDetector(speed){
    
// The provided speed limit    
    speedlimit = 70;
    
//speedXtra calculates the diffrence between the actual speed and the speedLimit    
    const speedxtra = (speed - speedlimit);
//points calculates the number of demerit points the driver would gather basing on how fast they were.
    const points = (speedxtra / 5);
    
    if (speed < speedlimit){
        console.log("Ok");
    }
    else if (points > 12) {
        console.log("License Suspended");
    }
    else{
        console.log("Demerit_Points:", points);
    }
}
// Call the function with the desired values
speedDetector(280);