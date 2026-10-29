let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

// Loop through all buttons
for (let i = 0; i < buttons.length; i++) {

    // Event Listener
    buttons[i].addEventListener("click", function () {

        let value = this.innerText;

        // If Clear button is pressed
        if (value === "C") {
            display.value = "";

        }

        // If Equal button is pressed
        else if (value === "=") {

            try {
                display.value = eval(display.value);
            }
            catch {
                display.value = "Error";
            }

        }

        // Otherwise add button value
        else {
            display.value += value;
        }

    });

}