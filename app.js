//Exercise 1
function kelvinToFahrenheit (kelvin) {
  let celsius = kelvin - 273;
  let fahrenheit =Math.floor(celsius * (9/5) + 32) ;
  return fahrenheit; 
}
console.log (kelvinToFahrenheit(294)) ;


//Exercise 2
function  humanAgeInDogYears (myAge) {
  let earlyYears = 2 * 10.5;
  let laterYears = (myAge -2) * 4;
  let myAgeInDogYears = earlyYears + laterYears ;
  return myAgeInDogYears; 
}
console.log (humanAgeInDogYears (21));


//Exercise 3
 function answerMyQuestion (userName, userQuestion) {
 let randomNumber  = Math.floor(Math.random() * 8);
 let eightBall = "" ;
 switch (randomNumber) {
  case 0 :
  console.log('It is certain');
  break;
  case 1 :
  console.log ('It is decidedly so') ;
  break;
  case 2 :
  console.log ('Reply hazy try again') ;
  break;
  case 3 :
  console.log ('Cannot predict now') ;
  break;
  case 4 :
    console.log ('Do not count on it') ;
    break;
    case 5 :
      console.log ('My sources say no');
      break;
      case 6 :
      console.log ('Outlook not so good');
      break;
      case 7 :
        console.log ('Signs point to yes');
        break;
      }
      return eightBall; 
}
answerMyQuestion ("Valeria", "Should I go on a vacation?"); 


//Exercise 4
 function raceTime (userAge, registeredEarly) {
  let raceNumber = Math.floor(Math.random()*1000);  
  if (userAge >= 18 && registeredEarly ) { 
    raceNumber+=1000;
  }
  if ( registeredEarly && userAge >= 18 ) {
    console.log (`Runner ${raceNumber} you race at 9:30 am.`) ;
  } 
  else if (userAge >= 18 !== registeredEarly ) {
    console.log (`Runner ${raceNumber} you will race at 11:00 am.`) ;
  }
  else if (userAge < 18) {
    console.log ( `Runner ${raceNumber} you will race at 12:30 am.`);
  }
  else if (userAge = 18) { 
    console.log ( `Runner ${raceNumber} you will race at 12:30 am.`);
  
  }
  return registeredEarly ;
 }
raceTime(22, true); 
