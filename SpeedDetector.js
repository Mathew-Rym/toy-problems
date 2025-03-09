function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;
  
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
      if (demeritPoints > 12) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  
  const speed = parseInt(prompt("Enter car speed:"), 10);
  checkSpeed(speed);
  