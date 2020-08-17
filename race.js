let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = false;
let runnerAge = 18;
if(earlyRunner && runnerAge > 18) {
  raceNumber += 1000;
}
if(earlyRunner && runnerAge > 18) {
 console.log (`Race will begin at 9:30 am. Your race number is ${raceNumber}`);
} else if(!earlyRunner && runnerAge > 18) {
  console.log(`Race will begin at 11:00am. Your race number is ${raceNumber}`);
}
if (runnerAge < 18) {
  console.log(`Race will begin at 12:30. Your race number is ${raceNumber}`) 
  }
 else {
   console.log('See desk');
 }
