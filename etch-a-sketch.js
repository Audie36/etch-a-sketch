

// INITIALIZE VARIABLES

    // Get Body Element

let body = document.querySelector('body');

    // Get Container Div ✅

let container = document.querySelector('#container');

    // Get Option Div  ✅

let options = document.querySelector('#options');

// Set Background

let backgroundDiv = document.querySelector('#background');

// Set container grid dimensions 

// let gridSize = 960;

// Set pixel dimensions ✅

let numberOfSquares = 16;

// OPTIONS

    // Add Option Buttons

    addOptionButtons(options);

// ETCH-A-SKETCH IMAGE


// GRID

    // Create Grid - Inside Container Div

    buildGrid (numberOfSquares, container);

    // MAKE OPTION CLICKABLE

        // Clear Button - We're still able to use the resetButton variable because we returned it from addOptions function

        resetButton.addEventListener("click", promptForGridSize);

    // RESET Prompt for Size

    function promptForGridSize(){

        // Gray out Background

        backgroundDiv.setAttribute('style', 'display: block; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4)');
    
    // BUILD MODAL

        // Create Pop up Message on Top of Screen ✅

        const prompt = document.createElement('div');
            
        prompt.setAttribute('style', 'background-color: #fefefe; margin: auto; padding: 10px; border: 1px solid #888;  border-radius: 5px; z-index: 2; width: 40%');
        prompt.setAttribute('id', 'promptMessage');
        backgroundDiv.insertBefore(prompt, container);

        // Create X to close the box

        const closeDiv = document.createElement('div');
        closeDiv.setAttribute('style', 'display: flex; align-items: flex-start; justify-content: flex-end');


        prompt.appendChild(closeDiv);

            const closeX = document.createElement('span');
            closeX.innerHTML = "&times;";
            closeX.classList.add('close');

        closeDiv.appendChild(closeX);


        //prompt.insertBefore(closeDiv, promptText);
        
        // Prompt Contents

        const promptContent = document.createElement('div');
        promptContent.setAttribute('style', 'display: grid; align-items: center; justify-content: center; background-color: #fefefe; z-index: 2; text-align: center; padding-top: 10px');

        prompt.appendChild(promptContent);

        // Add Div - Text - Prompt for size

        let promptText = document.createElement('div');

        promptText.textContent = "What do you want to change the grid size to?";

        promptContent.appendChild(promptText);

        // Create Input Div

        const inputDiv = document.createElement('div');

        inputDiv.setAttribute('style', 'display: grid; align-items: stretch; justify-items: center; margin 20px');
        promptContent.appendChild(inputDiv);

        //Input - # of Squares per Side ✅

        let sizeOfGrid = document.createElement('input');

        sizeOfGrid.setAttribute('style', 'border-radius: 5px; border: 1px solid black; margin: 20px 0px; padding: 10px; text-align: center; width: 150px');
        sizeOfGrid.setAttribute('type', 'text');
        sizeOfGrid.setAttribute('id', 'gridInput');
        sizeOfGrid.setAttribute('placeholder', '# of Squares - Below 100');

        inputDiv.appendChild(sizeOfGrid);

        // Add OK button to prompt ✅

        const okButton = document.createElement('button');

        okButton.classList.add('button');
        okButton.textContent = "OK";
        okButton.setAttribute('style', 'width: 50px; ');
        
        inputDiv.appendChild(okButton);

    // CLICK OK BUTTON

       // Validate input value when clicking "Ok"

        okButton.addEventListener('click', function validate(){

            // Change from string to int

            let newSizeGrid = document.querySelector('#gridInput').value;

            newSizeGrid = parseInt(newSizeGrid, 10);

            // If nothing entered, alert that nothing was entered ✅

            if (isNaN(newSizeGrid)){
                alert('No value was entered, please add a value before running');
            }
            // Limit Grid to less than 100 ✅
            else if (newSizeGrid > 100){
                alert("Value can't be over 100");
            }
            else {

                // Remove Current Grid
                /*
                    backgroundDiv.removeChild(container);

                    document.createElement('container');
                    backgroundDiv.appendChild(container);
                    container = document.querySelector('#container');
                    container.setAttribute('id', 'container');
                */


                
                // Select ALL current divs in current grid ✅
                
                let gridDivs = container.querySelectorAll('.sketchPixel');

                // Delete ALL current divs in current grid ✅

                gridDivs.forEach(div => container.removeChild(div));

                // Create new grid off of new values ✅

                

                buildGrid(newSizeGrid, container);
            }

        });
        
    // CLOSE OUT OF PROMPT MESSAGE

        // When the user clicks on <span> (x), close the modal
        closeX.onclick = function() {
            //prompt.style.display = "none";
            backgroundDiv.removeChild(prompt);
            backgroundDiv.style.backgroundColor = "white";
        }
  
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == backgroundDiv) {

                //prompt.style.display = "none";
                backgroundDiv.removeChild(prompt);
                backgroundDiv.style.backgroundColor = "white";
            }
        }

    };



// OPTIONS

        // Add Option Buttons

        function addOptionButtons(options){

            // Add Div - for Color Buttons

            const optionDiv = document.createElement('div');
            optionDiv.setAttribute('style', 'display: flex; justify-content: space-around; align-items: center');

            options.appendChild(optionDiv);

            // Add Black & White Button

            const bwButton = document.createElement('button');
            bwButton.classList.add('roundButton');
            bwButton.setAttribute('id', 'bwButton');
            bwButton.textContent = "Black";
            
            optionDiv.appendChild(bwButton);

            // Add Random Color Button

            const colorButton = document.createElement('button');
            colorButton.classList.add('roundButton');
            colorButton.setAttribute('id', 'colorButton');
            colorButton.textContent = "Color";
            
            optionDiv.appendChild(colorButton);

            // Add Gray Scale Button

            const grayButton = document.createElement('button');
            grayButton.classList.add('roundButton');
            grayButton.setAttribute('id', 'grayButton');
            grayButton.textContent = "Gray";
            
            optionDiv.appendChild(grayButton);


            // Add RESET Button ✅

            const resetButton = document.createElement('button');
            resetButton.classList.add('button');
            resetButton.setAttribute('id', 'resetButton');
            resetButton.textContent = "Reset";

            
            options.appendChild(resetButton);

            return bwButton, colorButton, grayButton, resetButton;

        }

// SELECT COLOR BUTTONS

// Start with Black selected

bwButton.classList.add('selected');

// Grab all Buttons
let buttons = document.querySelectorAll('.roundButton');

// For each color button click - change selection

buttons.forEach(div => div.addEventListener('click', addSelectClass));

// Add Function to Remove the current selection and perform new selection

function addSelectClass(event){

    // Unselect selected button

    buttons.forEach(div => div.classList.remove('selected'));

    // Select clicked color button

    event.target.classList.add('selected');

}

/*

    // Selection - Function

    let addSelectClass = function(){
        // Call Remove Selection Function
        removeSelectClass();
        // Select Button
        this.classList.add('selected');	
    }

    // Remove Selection - Function.  Remove selection

    let removeSelectClass = function(){
        for (let i =0; i < buttons.length; i++) {
            buttons[i].classList.remove('selected')
        }
    }

// Run Selection Function - When button clicked

buttons.forEach(roundButton => roundButton.addEventListener('click', addSelectClass));

    for (let i =0; i < button.length; i++) {
        button[i].addEventListener("click",addSelectClass);
    }
*/    /*Test*/

// GRID

    // Create Grid Function - Custom size ✅

    function buildGrid (numberOfSquares, container) {

        let gridSize = 960;

        // Change size of container div - depending on size entered ✅


        // Custom Grid - Depending on specified size 

        container.setAttribute('style', 'grid-template-rows: repeat('+ numberOfSquares + ', + '+ Math.floor(gridSize/numberOfSquares) +'px); grid-template-columns: repeat(' + numberOfSquares + ', '+ Math.floor(gridSize/numberOfSquares) +'px)');


        // Create Div in Grid ✅

        for(i=1; i<=(numberOfSquares*numberOfSquares); i++){
            const div = document.createElement('div');
            div.setAttribute('style', 'border: 1px solid black; height: '+ (Math.floor(gridSize/numberOfSquares) - 1) +'px; width: '+ (Math.floor(gridSize/numberOfSquares) - 1) +'px');
            div.classList.add('sketchPixel')
            container.appendChild(div);
        }
    }

// COLOR

    // Event Listener - Trigger when hover over with mouse 

        // Identify each square ✅

        let divButtons = container.querySelectorAll('.sketchPixel');


        // Color each div BLACK ✅

        divButtons.forEach((div) => {
            
            div.addEventListener('mouseover', colorGrid);
            
        });

// COLOR
    
    // Black ✅

        function colorGrid(e){

            switch(true){
                case bwButton.classList.contains('selected'):

                    e.target.style.backgroundColor = "black";

                    break;

                case grayButton.classList.contains('selected'):

                    e.target.style.backgroundColor = "blue";

                    break;

                case colorButton.classList.contains('selected'):

                    e.target.style.backgroundColor = "green";

                    break;

            }

           
        }

