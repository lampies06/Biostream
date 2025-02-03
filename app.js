// Function to start the experiment
function startExperiment() {
    document.getElementById("experiment-info").innerHTML = "Experiment Started: Virtual mice are infected with Hantavirus."; // Updates text when experiment starts
    createVirtualMouse(); // Calls function to create the virtual mice
}

// Function to create a virtual mouse for the experiment
function createVirtualMouse() {
    let mouseContainer = document.getElementById("mouse-container"); // Gets the mouse container element
    let mouse = document.createElement("div"); // Creates a new div element for the mouse
    mouse.classList.add("mouse"); // Adds a CSS class for styling
    mouse.innerHTML = "Virtual Mouse (Infected with Hantavirus)"; // Sets text inside the mouse div
    mouseContainer.appendChild(mouse); // Appends the mouse element to the container
}

// Sample CSS for the mouse
document.styleSheets[0].insertRule(`
    .mouse {
        width: 100px; /* Width of the mouse */
        height: 50px; /* Height of the mouse */
        background-color: #e0e0e0; /* Light gray color for the mouse */
        margin-top: 10px; /* Adds space between each mouse */
        padding: 10px;
        text-align: center; /* Centers the text inside the mouse */
        border-radius: 5px; /* Rounded corners */
    }
`, 0);
