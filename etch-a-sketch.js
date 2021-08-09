

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

let gridSize = 960;

// Set pixel dimensions ✅

let numberOfSquares = 16;

// OPTIONS

    // Add Option Buttons

    addOptionButtons(options);

// ETCH-A-SKETCH IMAGE


// GRID

    // Create Grid - Inside Container Div

    buildGrid (numberOfSquares, gridSize, container);

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
            
        prompt.setAttribute('style', 'display: grid; align-items: center; justify-content: center; background-color: #fefefe; margin: auto; padding: 20px; border: 1px solid #888;  border-radius: 5px; z-index: 2; width: 40%; text-align: center');
        prompt.setAttribute('id', 'promptMessage');
        prompt.textContent = "What do you want to change the grid size to?";
        backgroundDiv.insertBefore(prompt, container);

        const inputDiv = document.createElement('div');

        inputDiv.setAttribute('style', 'display: flex; align-items: center; justify-content: center; margin 20px');
        prompt.appendChild(inputDiv);

        //Input - # of Squares per Side

        let sizeOfGrid = document.createElement('input');

        sizeOfGrid.setAttribute('style', 'border-radius: 5px; border: 1px solid black; margin: 5px; padding: 10px; text-align: center; width: 150px');
        sizeOfGrid.setAttribute('type', 'text');
        sizeOfGrid.setAttribute('placeholder', '# of Squares - Below 100');

        inputDiv.appendChild(sizeOfGrid);

        

        /*
        // Input - # of Squares High

        let gridHeight = document.createElement('input');

        gridHeight.setAttribute('style', 'border-radius: 5px; border: 1px solid black; margin: 5px; padding: 10px; text-align: center');
        gridHeight.setAttribute('type', 'text');
        gridHeight.setAttribute('placeholder', 'Height - Below "100"');

        inputDiv.appendChild(gridHeight);

        // Input - # of Squares Wide

        let gridWidth = document.createElement('input');

        gridWidth.setAttribute('style', 'border-radius: 5px; border: 1px solid black; margin: 5px; padding: 10px; text-align: center');
        gridWidth.setAttribute('type', 'text');
        gridWidth.setAttribute('placeholder', 'Width - Below "100"');

        inputDiv.appendChild(gridWidth);
        */

        // Add OK button to prompt ✅

        let okButton = document.createElement('button');

        okButton.classList.add('button');
        okButton.textContent = "OK";
        
        prompt.appendChild(okButton);

        // On button click - recreate grid with new size

        //okButton.addEventListener("click", )


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

    function buildGrid (numberOfSquares, gridSize, container) {


        // Change size of container div - depending on size entered ✅

        // container.setAttribute('style', 'grid-template-rows: repeat('+ size + ', 20px); grid-template-columns: repeat(' + size + ', 20px)');


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

// RESET - CHANGE GRID SIZE



// COLOR
    
    // Black ✅

        function blackWhite(e){
            e.target.style.backgroundColor = "black";
        }

