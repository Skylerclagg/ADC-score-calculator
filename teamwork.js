// Variables for the state
let dropZoneTopCleared = 0;
let greenBeanBags = 0;
let blueBeanBags = 0;
let neutralBalls = 0;
let greenBalls = 0;
let blueBalls = 0;
let redDroneSelection = "None";
let blueDroneSelection = "None";
const maxBeanBags = 7;
const maxBalls = 10;
const maxDropZoneTops = 7;

// Update count logic for each counter
function updateCount(id, change) {
    if (id === 'dropZoneTopCleared') {
        dropZoneTopCleared = Math.max(0, Math.min(maxDropZoneTops, dropZoneTopCleared + change));
        document.getElementById(id).textContent = dropZoneTopCleared;
    } else if (id === 'greenBeanBags') {
        greenBeanBags = Math.max(0, Math.min(maxBeanBags - blueBeanBags, greenBeanBags + change));
        document.getElementById(id).textContent = greenBeanBags;
    } else if (id === 'blueBeanBags') {
        blueBeanBags = Math.max(0, Math.min(maxBeanBags - greenBeanBags, blueBeanBags + change));
        document.getElementById(id).textContent = blueBeanBags;
    } else if (id === 'neutralBalls') {
        neutralBalls = Math.max(0, Math.min(maxBalls - (greenBalls + blueBalls), neutralBalls + change));
        document.getElementById(id).textContent = neutralBalls;
    } else if (id === 'greenBalls') {
        greenBalls = Math.max(0, Math.min(maxBalls - (neutralBalls + blueBalls), greenBalls + change));
        document.getElementById(id).textContent = greenBalls;
    } else if (id === 'blueBalls') {
        blueBalls = Math.max(0, Math.min(maxBalls - (neutralBalls + greenBalls), blueBalls + change));
        document.getElementById(id).textContent = blueBalls;
    }
    calculateRemainingItems(); // Update remaining balls and bags
    calculateTotalScore();     // Recalculate total score
}

// Calculate and display remaining bean bags and balls
function calculateRemainingItems() {
    const remainingBeanBags = maxBeanBags - (greenBeanBags + blueBeanBags);
    const remainingBalls = maxBalls - (neutralBalls + greenBalls + blueBalls);
    document.getElementById('remainingBeanBags').textContent = `Remaining Bean Bags: ${remainingBeanBags}`;
    document.getElementById('remainingBalls').textContent = `Remaining Balls: ${remainingBalls}`;
}

// Update drone selection for landing points and recalculate score
function selectDroneOption(drone, option) {
    if (drone === 'red') {
        redDroneSelection = option;
    } else {
        blueDroneSelection = option;
    }
    calculateTotalScore(); // Recalculate score when drone option is selected
    updateDroneButtonStates(); // Update the disabled states of drone buttons
}

// Disable drone options based on the other drone's selection
function updateDroneButtonStates() {
    const redOptions = document.querySelectorAll('.red-drone-options button');
    const blueOptions = document.querySelectorAll('.blue-drone-options button');
    
    redOptions.forEach(button => {
        const option = button.getAttribute('data-option');
        button.disabled = option === blueDroneSelection || (blueDroneSelection === "Landing Pad" && option === "Bullseye") || (blueDroneSelection === "Bullseye" && option === "Landing Pad");
    });

    blueOptions.forEach(button => {
        const option = button.getAttribute('data-option');
        button.disabled = option === redDroneSelection || (redDroneSelection === "Landing Pad" && option === "Bullseye") || (redDroneSelection === "Bullseye" && option === "Landing Pad");
    });
}

// Calculate the total score based on all inputs
function calculateTotalScore() {
    let basicScore = dropZoneTopCleared + neutralBalls + greenBeanBags + blueBeanBags;
    let greenBasePoints = greenBalls;
    let blueBasePoints = blueBalls;

    // Color match for green and blue balls
    let greenColorMatch = greenBeanBags > 0 ? (greenBalls * greenBeanBags * 2) : 0;
    let blueColorMatch = blueBeanBags > 0 ? (blueBalls * blueBeanBags * 2) : 0;

    // Drone landing scores
    let redLandingScore = landingScore(redDroneSelection);
    let blueLandingScore = landingScore(blueDroneSelection);

    // Calculate total score
    let totalScore = basicScore + greenBasePoints + blueBasePoints + greenColorMatch + blueColorMatch + redLandingScore + blueLandingScore;

    // Display total score
    document.getElementById('total-score').textContent = `Score: ${totalScore}`;

    // Check if bean bag constraint is violated
    const warningVisible = dropZoneTopCleared < (greenBeanBags + blueBeanBags);
    const warningIcons = document.querySelectorAll('.warning-icon');
    warningIcons.forEach(icon => {
        icon.style.display = warningVisible ? 'inline' : 'none';
    });
}

// Calculate landing score based on drone selection
function landingScore(selection) {
    switch (selection) {
        case "None": return 0;
        case "Small Cube": return 25;
        case "Large Cube": return 15;
        case "Landing Pad": return 15;
        case "Bullseye": return 25;
        default: return 0;
    }
}

// Navigation back to home
function goBack() {
    window.location.href = "index.html";
}
