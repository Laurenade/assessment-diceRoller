// no.3 //
    //JS//
  // 1----- Create a variable, named dieRolls, and define it as an empty array 
  //            (which later you will use as a list of each die that has been rolled)
  // 2----- Add a click event listener for your "Roll!" button
  // 3----- On click, you need to get the value from the text input box, 
  //            so that you know how many dice to roll. 
  //            Assign this to a variable within your event listener
  // 4- Then you need to roll the dice. It is time to write a loop. 
  //     Use Math.random() to simulate rolling a single six-sided die X number of times, 
  //     where X is the number from the text input box. X is also the number of times 
  //     you will loop
  // 5- Push the result of each roll onto your dieRolls array
  // 6- Sum all your dice rolls and display the result 
  //     in the Total area on the page using innerHTML
  //

const textboxInput = document.querySelector('#number-of-dice-rolls')  
const rollButton = document.querySelector('#roll-button')
const resultsButton = document.querySelector('#roles-results-button')
const listOfResults = document.querySelector('#list-of-results')

const dieRolls = []                                                            // (1) //

rollButton.addEventListener("click", function() {                              // (2) //    
    let valueEnteredTextbox = textboxInput.value                               // (3) //
        
    let currentRoll = 0                                                        // (4) //
        while (currentRoll <= valueEnteredTextbox) { 
            let randNum = Math.floor(Math.random() * 6) + 1
   numberRolled = randNum       
            currentRoll += 1



    }
    let numberRolled = Number(listOfResults.innerHTML)                         // (5) //
                listOfResults.innerHTML = numberRolled
})        
console.log('good')



////////////////////// How it works //////////////////////////////////
                //User enters number into box and clicks      (valueEnteredTextbox)    
                //upon click, the die will role the number of times that the user has entered   (valueEnteredTextbox)
                //each time rolled, a random number 1-6 is shown   (randNum)
                //then pushed to a list    (listOfResults.innerHTML-----?)

////// NOTES ///////
        //-------ex: if 5 entered into textbox loop a number of times equal to the number-of-dice// 
                            //(1 (entered) die 5 times or 5 (entered) die 1 time...but 5 times)//
        //get value of text box and assign it
        //loop THAT (value entered into textbox) number of times   (loop the value of the textbox (ex:8) the amount of textbox (8) times)
        //each time 'roll' randomly from 1 to 6  (math.random to give randomly 1 to 6)(6 sides on dice)
        //loop a number of times equal to the number-of-dice (number entered by user)

////???////
        //will have loop, but not over an array here....   no.4 (on total assesment) 'show all rolls'button should do that...when ready
                // build array by PUSHing to it----dieRolls
                       
                       
 
                



//////?????/////
//   let position = 0
//     while (position < valueEnteredTextbox ) {                        
//               * valueEnteredTextbox
    //let randNum = Math.random()
//          Math.floor((Math.random() * 6) + 1)                                     
    //position += 1 

 //   change 6 to value of textbox //


// let total = __ + ___   (maybe ?)