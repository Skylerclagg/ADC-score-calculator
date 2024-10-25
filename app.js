let dropZoneTopCleared = 0;
let greenBeanBags = 0;
let blueBeanBags = 0;
const maxBeanBags = 7;

// Function to update count for counters
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
    }
    calculateRemainingBeanBags();
    calculateTotalScore();
}

// Calculate remaining bean bags
function calculateRemainingBeanBags() {
    const remaining = maxBeanBags - (greenBeanBags + blueBeanBags);
    document.getElementById('remainingBeanBags').textContent = remaining;
}

// Calculate total score
function calculateTotalScore() {
    let totalScore = dropZoneTopCleared + greenBeanBags + blueBeanBags;
    document.getElementById('total-score').textContent = `Score: ${totalScore}`;
    const warningVisible = dropZoneTopCleared < (greenBeanBags + blueBeanBags);
    document.getElementById('warning-icon').style.display = warningVisible ? 'inline' : 'none';
    document.getElementById('warning-icon-right').style.display = warningVisible ? 'inline' : 'none';
}
