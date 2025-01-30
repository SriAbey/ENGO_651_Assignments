var sliderCounter = 0; // Keeps track of the current index in the sliderContent array
var sliderContent = [
    "Developer!", // First text to display in the slider
    "Designer!", // Second text to display in the slider
];
var sliderValue = document.querySelector(".SliderValue"); // Selects the element with the class 'SliderValue' where the text will be displayed

// Function to handle the sliding effect
function slide() {
    if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0; // Reset the counter to 0 if it exceeds the length of the sliderContent array
    }

    sliderValue.textContent = ""; // Clears any previously displayed text before starting to type the new text

    let text = sliderContent[sliderCounter]; // Get the text to display based on the current index (sliderCounter)
    let i = 0; // Index for the current character to be typed

    // Function to type each letter one by one
    function typeLetter() {
        if (i < text.length) {
            sliderValue.textContent += text[i]; // Add the current character to the text content
            i++; // Increment the character index
            setTimeout(typeLetter, 100); // Calls the typeLetter function again with a delay to simulate typing speed
        }
    }

    typeLetter(); // Start typing the first letter of the current text
    sliderCounter++; // Move to the next text in the array
}

// Initial run of the slide function
slide();

// Set an interval to run the slide function every 2 seconds (2000 milliseconds)
setInterval(slide, 2000);
