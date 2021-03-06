// no.3 //
    //JS//
  // 1----- Create a variable, named dieRolls, and define it as an empty array 
  //            (which later you will use as a list of each die that has been rolled)
  // 2----- Add a click event listener for your "Roll!" button
  // 3----- On click, you need to get the value from the text input box, 
  //            so that you know how many dice to roll. 
  //            Assign this to a variable within your event listener
  // 4----- Then you need to roll the dice. It is time to write a loop. 
  //     Use Math.random() to simulate rolling a single six-sided die X number of times, 
  //     where X is the number from the text input box. X is also the number of times 
  //     you will loop
  // 5----- Push the result of each roll onto your dieRolls array
  // 6----- Sum all your dice rolls and display the result 
  //     in the Total area on the page using innerHTML

  
const textboxInput = document.querySelector('#number-of-dice-rolls')  
const rollButton = document.querySelector('#roll-button')
const totalRolls = document.querySelector('#total-rolls')
const resultsButton = document.querySelector('#roles-results-button')
const listOfResults = document.querySelector('#list-of-results')

const dieRolls = []                                                            // (1) //

rollButton.addEventListener("click", function() {                              // (2) //    
    let valueEnteredTextbox = textboxInput.value                               // (3) //
        
    let currentRoll = 0                                                        // (4) //
        while (currentRoll < valueEnteredTextbox) {      
            let randNum = Math.floor(Math.random() * 6) + 1
            numberRolled = randNum       
            currentRoll += 1
                           
    dieRolls.push(numberRolled)                                                // (5) //
                console.log(dieRolls)           
                                                                                                                                                              
            const add = (a, b) =>                                              // (6) //  //https://medium.com/@chrisburgin95/rewriting-javascript-sum-an-array-dbf838996ed0
                    a + b
            const sum = dieRolls.reduce(add)
        
            totalRolls.innerHTML = sum
        }
})    

    resultsButton.addEventListener("click", function() {                              // (1) //
        
        let number = 0                                                                // (2) //
            while (number < dieRolls.length) {
                listOfResults.innerHTML += "<li>" + dieRolls[number] + "</li>"        // (3) //
            number += 1                                                               // (4) //
        }            
    })
        




// no. 4 //
    // 1----- Add a click event listener to your "Show All Rolls" (resultsButton) button
    // 2----- Loop over the dieRolls array 
    // 3- Create a new List Item for each number 
    // 4- Add that List Item to the innerHTML of the "All Rolls" (listOfResults) element

////////////////////// How it works /////////////////////////
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
/////////////////////////
//Creating a new element and adding it to an existing element which is already 
//on the page can be done with strings, concatenation, and innerHTML. 
//Here is an example of one way you might create a new die element 
//(presuming you have the numberRolled and allRollsElement variables already 
//defined elsewhere in your code):    
/*  const newDiceString = '<li class="dice">' + numberRolled + "</li>";
                allRollsElement.innerHTML += newDiceString; */   
////////////////////////
 
