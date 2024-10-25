/* Body Styling */
body {
    background-color: black; /* Entire site background black */
    color: white; /* Default text color white */
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* Menu Bar Styling */
.menu-bar {
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    padding: 10px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
}

.menu-bar button {
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: #007BFF;
    cursor: pointer;
}

/* Score View */
#score-display {
    margin-top: 60px;
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
    background-color: #333;
    position: fixed;
    top: 60px;
    width: 100%;
    text-align: center;
}

/* Content Area */
#content {
    margin-top: 140px;
    padding: 20px;
}

/* Counter Layout */
.counter {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

/* Buttons */
.counter button {
    font-size: 24px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Drone Button Styling */
.drone-options button {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    background-color: transparent;
    border: 2px solid; /* Outline in respective color */
    color: black;
    cursor: pointer;
}

/* Red Drone Buttons */
.red-drone-options button {
    border-color: red;
}

/* Blue Drone Buttons */
.blue-drone-options button {
    border-color: blue;
}

/* Selected Drone Button */
.drone-options button.selected {
    color: white;
    background-color: currentColor; /* Matches the button's border color (red or blue) */
}

/* Hover and Disabled States */
.drone-options button:hover:not([disabled]) {
    opacity: 0.8;
}

.drone-options button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
