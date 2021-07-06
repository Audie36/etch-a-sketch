

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

    container.setAttribute('style', 'grid-template-rows: repeat('+ size + ', 10px); grid-template-columns: repeat(' + size + ', 10px)');

    // Create Div
    /*
    const div = document.createElement('div');
    div.setAttribute('style', 'border: 10px solid black');
    container.appendChild(div);
    */

}