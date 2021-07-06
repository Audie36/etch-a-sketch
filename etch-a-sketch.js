

// Initialize Variables

    // Get Container Div ✅

let container = document.querySelector('#container');

// Set grid dimensions ✅

let size = 16;

// Create Grid - Inside Container Div

buildGrid (size, container);

// Event Listener - Trigger when hover over with mouse

    // Identify each square ✅

        let divButtons = container.querySelectorAll('.sketchPixel');


    // Color each div black ✅

    divButtons.forEach((div) => {
        
        div.addEventListener('mouseover', blackWhite);
        
    });


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

function blackWhite(e){
    e.target.style.backgroundColor = "black";
}