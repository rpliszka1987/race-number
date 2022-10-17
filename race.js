let raceNumber = Math.floor(Math.random() * 1000);

var earlyRegister = true;

var racerAge = 36;

if (earlyRegister === true && racerAge > 18) {
  raceNumber += 1000;
}

if (racerAge > 18 && earlyRegister === true) {
  console.log(
    `Your race starts at 9:30 AM and your race number is ${raceNumber}`
  );
} else if (racerAge > 18 && earlyRegister === false) {
  console.log(
    `Your race starts at 11:00 AM and your race number is ${raceNumber}`
  );
} else if (racerAge < 18) {
  console.log(
    `Youe race starts at 12:20 PM and your race number is ${raceNumber}`
  );
} else {
  console.log("Please go to the registration desk.");
}
