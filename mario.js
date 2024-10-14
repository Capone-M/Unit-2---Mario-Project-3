
function determineHeightAndThenDrawPyramid() {
    // Get the height from the input field
    const heightInput = document.getElementById('height');
    const height = parseInt(heightInput.value, 10);

    // Clear previous pyramids
    const pyramidDiv = document.getElementById('pyramid');
    pyramidDiv.innerHTML = ''; // Clear previous content

    if (!isNaN(height) && height > 0) {
        printPyramid(height); // Call the printPyramid function with the specified height
    } else {
        alert("Enter a valid positive integer for the height.");
    }
}

const drawButton = document.querySelector('button');
drawButton.addEventListener('click', determineHeightAndThenDrawPyramid);



function printPyramid(height) {

    let emptySpace = "";
    let brick = "##";
    for (let i = 0; i < height; i++){
        emptySpace = emptySpace+".";
    }
    for (let i = 0; i < height; i++){
        layer = emptySpace + brick;
        console.log(layer);
         emptySpace = emptySpace.substring(1);
        brick = brick + "#";
        
        let para = document.createElement("p");
        //create text
        let rowStr = document.createTextNode(layer);
            //add the text to the paragraph element
            para.appendChild(rowStr);
            //create a variable to reference the div element
            let element = document.getElementById("pyramid");
            //add the paragraph element to the div element      
            element.appendChild(para)

    }

}