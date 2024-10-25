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

// Update count logic for each counter
function updateCount(id, change) {
    if (id === 'dropZoneTopCleared') {
        dropZoneTopCleared = Math.max(0, dropZoneTopCleared + change);
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
    calculateRemainingItems();
    calculateTotalScore();
}

// Calculate remaining bean bags and balls
function calculateRemainingItems() {
    const remainingBeanBags = maxBeanBags - (greenBeanBags + blueBeanBags);
    const remainingBalls = maxBalls - (neutralBalls + greenBalls + blueBalls);
    // Update any relevant UI with the remaining counts if needed
}

// Update drone selection for landing points
function updateDroneSelection(drone, option) {
    if (drone === 'red') {
        redDroneSelection = option;
    } else {
        blueDroneSelection = option;
    }
    calculateTotalScore();
}

// Calculate total score
function calculateTotalScore() {
    let basicScore = dropZoneTopCleared + neutralBalls + greenBeanBags + blueBeanBags;
    let greenColorMatch = greenBeanBags > 0 ? (greenBalls * greenBeanBags * 2) : 0;
    let blueColorMatch = blueBeanBags > 0 ? (blueBalls * blueBeanBags * 2) : 0;
    let redLandingScore = landingScore(redDroneSelection);
    let blueLandingScore = landingScore(blueDroneSelection);

    let totalScore = basicScore + greenBalls + blueBalls + greenColorMatch + blueColorMatch + redLandingScore + blueLandingScore;
    document.getElementById('total-score').textContent = `Score: ${totalScore}`;
}

// Helper function to calculate landing score based on selection
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
