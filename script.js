// 1. Calculator display screen and buttons symbols dynamic integration
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// --- 2. MOUSE CLICK LOGIC (Idhu mouse clicks-ah gavanikkum) ---
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const buttonText = button.textContent;

        if (buttonText === "C") {
            display.value = "";
        } else if (buttonText === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else {
            display.value += buttonText;
        }
    });
});

// --- 3. LAPTOP KEYBOARD LOGIC (Idhu laptop keys-ah gavanikkum) ---
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if ((key >= "0" && key <= "9") || key === "+" || key === "-" || key === "*" || key === "/") {
        display.value += key;
    } else if (key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    } else if (key === "Backspace") {
        display.value = "";
    }
});
