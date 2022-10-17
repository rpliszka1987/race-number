// Race number and time schedule

// Generates random number
let raceNumber = Math.floor(Math.random() * 1000);

// User registered early
var earlyRegister = true;

// Racer age
var racerAge = 36;

// Checks if user has registered early
if (earlyRegister === true && racerAge > 18) {
  raceNumber += 1000;
}

// Checks which category the racer qualifis for.
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
