

// INITIALIZE VARIABLES

    // Get Body Element

let body = document.querySelector('body');

    // Get Container Div ✅

let container = document.querySelector('#container');

    // Get Option Div  ✅

let options = document.querySelector('#options');

// Set Background

let backgroundDiv = document.querySelector('#background');

// Set grid dimensions ✅

let size = 16;

// OPTIONS

    // Add Option Buttons

    addOptionButtons(options);

// ETCH-A-SKETCH IMAGE


// GRID

    // Create Grid - Inside Container Div

    buildGrid (size, container);

    // MAKE OPTION CLICKABLE

        // Clear Button - We're still able to use the resetButton variable because we returned it from addOptions function

        resetButton.addEventListener("click", promptForGridSize);

       
        /* function displayConsole(){

            console.log("Reset button clicked");

        */

    // RESET Prompt for Size

    function promptForGridSize(){

        // Gray out Background

        backgroundDiv.setAttribute('style', 'display: block; position: fixed; z-index: 1; width: 100%; height: 100%; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4)');

        // Create Pop up Message on Top of Screen

        const prompt = document.createElement('div');
            
        prompt.setAttribute('style', 'display: grid; align-items: center; justify-content: center; background-color: #fefefe; margin: auto; padding: 20px; border: 1px solid #888;  border-radius: 5px; z-index: 2; width: 80%');
        prompt.setAttribute('id', 'promptMessage');
        prompt.textContent = "What do you want to change the grid size to?";
        backgroundDiv.insertBefore(prompt, container);

        // Add input space for new Grid Size

        let inputGridSize = document.createElement('input');

        inputGridSize.setAttribute('style', 'border-radius: 5px; border: 1px solid black; margin: 20px; padding: 10px; text-align: center');
        inputGridSize.setAttribute('type', 'text');
        inputGridSize.setAttribute('placeholder', 'Change Grid Size - Ex. "16"');

        prompt.appendChild(inputGridSize);

        return prompt;


    }

// COLOR

    // Event Listener - Trigger when hover over with mouse 

        // Identify each square ✅

            let divButtons = container.querySelectorAll('.sketchPixel');


        // Color each div BLACK ✅

        divButtons.forEach((div) => {
            
            div.addEventListener('mouseover', blackWhite);
            
        });

// OPTIONS

        // Add Option Buttons

        function addOptionButtons(options){

            // Add RESET Button ✅

            const resetButton = document.createElement('button');
            resetButton.classList.add('button');
            resetButton.setAttribute('id', 'resetButton');
            resetButton.textContent = "Reset";

            
            options.appendChild(resetButton);

            return resetButton;

        }




// GRID

    // Create Grid Function - Custom size ✅

    function buildGrid (size, container) {


        // Change size of container div - depending on size entered ✅

        // container.setAttribute('style', 'grid-template-rows: repeat('+ size + ', 20px); grid-template-columns: repeat(' + size + ', 20px)');


        // Custom Grid - Depending on specified size

        container.setAttribute('style', 'grid-template-rows: repeat('+ size + ', 20px); grid-template-columns: repeat(' + size + ', 20px)');


        // Create Div in Grid ✅

        for(i=1; i<=(size*size); i++){
            const div = document.createElement('div');
            div.setAttribute('style', 'border: 1px solid black; height: 19px; width: 19px');
            div.classList.add('sketchPixel')
            container.appendChild(div);
        }
    }

// RESET - CHANGE GRID SIZE



// COLOR
    
    // Black ✅

        function blackWhite(e){
            e.target.style.backgroundColor = "black";
        }