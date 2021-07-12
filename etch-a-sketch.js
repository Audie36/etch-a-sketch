

// INITIALIZE VARIABLES

    // Get Container Div ✅

let container = document.querySelector('#container');

    // Get Option Div  ✅

let options = document.querySelector('#options');

// Set grid dimensions ✅

let size = 16;

// OPTIONS

    // Add Option Buttons

    addOptionButtons(options);

// GRID

    // Create Grid - Inside Container Div

    buildGrid (size, container);

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

            // Add Clear Button

            let resetButton = document.createElement('button');
            resetButton.style.cssText = 'border: 5px solid red; padding: 10px; margin: 40px; border-radius: 7px; color: #FFB845';
            resetButton.textContent = "Reset";
            
            options.appendChild(resetButton);

            return resetButton;


        }

// GRID

    // Create Grid Function - Custom size ✅

    function buildGrid (size, container) {


        // Change size of container div - depending on size entered ✅

        container.setAttribute('style', 'grid-template-rows: repeat('+ size + ', 20px); grid-template-columns: repeat(' + size + ', 20px)');

        // Create Div in Grid ✅

        for(i=1; i<=(size*size); i++){
            const div = document.createElement('div');
            div.setAttribute('style', 'border: 1px solid black; height: 19px; width: 19px');
            div.classList.add('sketchPixel')
            container.appendChild(div);
        }
    }

// COLOR
    
    // Black ✅

        function blackWhite(e){
            e.target.style.backgroundColor = "black";
        }