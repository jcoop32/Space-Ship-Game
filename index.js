let alienShip = 0;
let userChoiceGlobal = "";

//initialize fight or flight choice
//1 = fight, 2 = flee
fightOrFlight = 1;


//set up enemy ships
let alienShips = [];
let obj = {};
const MAX_NUM = 10;
const MIN_NUM = 1;
let ranNum = (Math.floor(Math.random() * MAX_NUM) + MIN_NUM);
let missiles = 3;

for(let i = 0; i<ranNum; i++){
  obj = {
      hull: (Math.floor(Math.random() * 4) +3),
      firePower: (Math.floor(Math.random() * 3) +2),
      accuracy: (Math.floor(Math.random() * 3) +6)/10
  }
  alienShips.push(obj)  
}

console.log("________________________________________________");
console.log("________                 -                   ___");
console.log("__________\\----------\\               -       ___");
console.log("_______oooo) >  >  >  ))>      -             ___");
console.log("__________/----------/                         _");
console.log("________                      -         -      _");
console.log("       -     [  BATTLES  ]                    __");
console.log("___________                        -         ___");
console.log("__________________\\----------\\        -       __");
console.log("_______________oooo) >  >  >  ))>              _");
console.log("__________________/----------/      -         __");
console.log("_____________                                  _");
console.log("_    -      -       [  IN  ]       -         ___");
console.log("__________________                      -     --");
console.log("___________________________\\----------\\      ___");
console.log("________________________oooo) >  >  >  ))>     _");
console.log("___________________________/----------/       __");
console.log("___________________                            _");
console.log("__             -        -   [  SPACE  ]       __");
console.log("________________________________________________\n\n");

const username = prompt('What is your name? ');
console.log(`\nYour name is ${username}.\n`);
console.log("You are an astronaut in the Global Space Force.\n");
console.log(`${alienShips.length} Alien space ships are threatening to destroy Earth.\n`);
console.log("You're the best of the best, so you've been")
console.log("ordered to take out the evil enemy space ships.\n")
console.log("So, get in your ship and give 'em heck (Hey, we're G-rated)!\n")

// let x = (Math.floor(Math.random() * 4) +3) ; //hull
// let y = (Math.floor(Math.random() * 3) +2); //firepower
// let z = (Math.floor(Math.random() * 3) +6)/10;//accuracy
//initialize alien ship values


    // console.log("------------------------");
    // console.log(alienShips);
    // console.log(alienShip);
    // let obj1  = alienShips[alienShip];
    // console.log(obj1.hasOwnProperty('accuracy'));

    // console.log("------------------------");  


//set up USS Schwarzenegger
  let USSS = {
      hull: 20,
      firePower: 5,
      accuracy: .7
  }


//get user name
//const username = prompt('What is your name? ');
//console.log(`Your name is ${username}`);

function fightTheShips () {
  
  while (USSS.hull>0 && alienShips[alienShip].hull>0){
    
    //USSS fires at alien ship
    //x = prompt('Press any key to fire:\n\n');
    //console.log("You're firing!!!\n\n")
    usssFires();
    if (USSS.hull < 1){
      break;
    }

    //alien ship fires as USSS
    alienShipFires();
    
  } 
  
  alienShip++;
  if (USSS.hull < 15 && USSS.hull > 1){
    let userRecharge = prompt("Do you want to return to base and recharge shields? (y/n) ");
    console.log("\n");
      if (userRecharge === 'y'){
        USSS.hull = 20;
      }
  }
  

} 

function usssFires(){
    //fires at alien ship
    firingSolution = Math.random();
    let fireChoice = prompt(`Press 'f' to fire or 'm' for missile`);
    console.log("------------------------\n");  
    let currentFirePower = 0;
    let currentAccuracy = 0;
    if (fireChoice === 'f'){
      currentFirePower = USSS.firePower;
      currentAccuracy = USSS.accuracy;
    } else if (fireChoice === 'm'){
      
        if (missiles > 0){
          missiles = missiles - 1;
          currentFirePower = USSS.firePower + 1;
          currentAccuracy = USSS.accuracy + 0.2;
          console.log(`You have ${missiles} missile(s) left\n`);
        } else {
          console.log(`You have no missiles left.\n`)
          currentFirePower = USSS.firePower;
          currentAccuracy = USSS.firePower - USSS.firePower;
        }
      
    }
  
    //evaluate hit or miss
      if (firingSolution <= currentAccuracy){
        //report out the hit and decrement alien ship hull      
          console.log ("You've scored a hit!\n");
          alienShips[alienShip].hull = alienShips[alienShip].hull - currentFirePower;
          if (alienShips[alienShip].hull < 1){
            console.log("Ship destroyed!\n");
          }
          
          

        
      }
      else{
        //report out the miss
          console.log ("Uh oh! You missed!\n");
    }
    
    
    //echo ship details to the screen
    displayStats(); 
  
}

function shieldAmount(firePower){
  let ranShield = Math.floor(Math.random() * 4);
  if (ranShield > firePower){
    return 0;
  } else{
    return ranShield;
  }
}

function alienShipFires(){
  if (alienShips[alienShip].hull>0){
    //fires at USSS
    firingSolution = Math.random();
    let shield = shieldAmount(alienShips[alienShip].firePower);
    //evaluate hit or miss
    if (firingSolution <= alienShips[alienShip].accuracy){
      if (shield > 0){
        console.log(`Shield strength is +${shield}`);
        console.log("\n");          
      }
        console.log ("You've been hit!\n");
        USSS.hull = USSS.hull - alienShips[alienShip].firePower + shield;
        console.log(`You've taken ${alienShips[alienShip].firePower} damage and were protected by a shield strength of ${shield}.`);
    }
    else{
      //report out the miss
      console.log ("Yay! They missed!");
    }

    displayStats(); 
            
          }
}
function displayStats(){
  if (alienShips[alienShip].hull < 1){
    alienShips[alienShip].hull = 'Destroyed';
  }
  console.log("------------------------"); 
  console.log(`Alien ship health: ${alienShips[alienShip].hull}`);
  console.log(`USSS health: ${USSS.hull}`); 
  console.log("------------------------\n"); 
}


//alienShips.forEach(fightTheShips);
// console.log("------------------------"); 
// console.log(alienShips)
// console.log(USSS) 
// console.log("------------------------"); 


for (let ships of alienShips){
  console.log(`You are now attacking ship # ${alienShip + 1} of ${alienShips.length}`);
  console.log("\n");    
  let userChoice = prompt("Do you want to attack or retreat? (a/r): ");
  userChoiceGlobal = userChoice;
  console.log("\n");  
  userChoice = userChoice.toLowerCase();
  if (userChoice === 'a'){
    fightTheShips(); 
    if (USSS.hull < 1){
      break;
    }

  } else if (userChoice === 'r'){
    console.log(`\nAstronaut ${username}, you have retreated. Earth will be utterly destroyed and you'll have no place to park your ship. Game over!`);
    console.log("\n");
    break;
  }
}

if (userChoiceGlobal !== 'r'&& USSS.hull > 0){
  console.log(`\nAstronaut ${username}, you destroyed all the ships and saved Earth. Now you still have a place to park your ship. You won!`);
} 
else if (USSS.hull < 1){
  console.log(`\nAstronaut ${username}, your ship was destroyed. Earth will be utterly destroyed. So much destruction! Game over!`);
}  

  

// console.log("-----------end-------------"); 
// console.log(`USSS Remaining Health left: ${USSS.hull}`);
// console.log(`Total Alien ships: ${alienShips.length}`)
// console.log("-----------end-------------"); 

/*prompt user if they want to attack or retreat (y/n)
  if yes -> run attack function
  if no -> end game and show stats of game
*/
