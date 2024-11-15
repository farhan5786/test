// script.js
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");

let form = document.getElementById("login-form");

// Toggle between text1 and text2 on backspace or key press
form.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
        setTimeout(() => {
            toggleText();
        }, 100);
    }
});

function toggleText() {
    if (text1.style.display === "none") {
        text1.style.display = "block";
        text2.style.display = "none";
    } else {
        text1.style.display = "none";
        text2.style.display = "block";
    }
}
