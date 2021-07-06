

// Initialize Variables

    // Get Container Div

let container = document.querySelector('#container');

// Grid dimensions

let size = 16;

// Build Grid - Inside Container Div

buildGrid (size, container);

// Build Grid - Custom size

function buildGrid (size, container) {


    // Change size of container div - depending on size entered ✅

    container.setAttribute('style', 'grid-template-rows: repeat('+ size + ', 20px); grid-template-columns: repeat(' + size + ', 20px)');

    // Create Div in Grid

    for(i=1; i<=(size*size); i++){
        const div = document.createElement('div');
        div.setAttribute('style', 'border: 1px solid black; height: 19px; width: 19px');
        container.appendChild(div);
    }

}