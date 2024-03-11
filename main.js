document.addEventListener("DOMContentLoaded", function () {
    // Get the button element by its ID
    var changeColorButton = document.getElementById("changeColorButton");

    // Add a click event listener to the button
    changeColorButton.addEventListener("click", function () {
        // Change the background color of the body
        document.body.style.backgroundColor = "#c0392b"; /* Red background */
    });
});


