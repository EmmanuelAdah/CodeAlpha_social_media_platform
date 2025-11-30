const sendCodeBtn = document.getElementById("sendCodeBtn");
const popupOverlay = document.getElementById("popupOverlay");
const codeInputs = document.querySelectorAll(".code");

// Open the verification popup when email is entered
sendCodeBtn.addEventListener("click", () => {
    const email = document.getElementById("emailInput").value.trim();

    if (email === "") {
        alert("Please enter an email.");
        return;
    }
    popupOverlay.style.display = "flex";

    // For enabling the first box only
    codeInputs[0].disabled = false;
    codeInputs[0].focus();
});

// Handle typing logic
codeInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        let value = input.value.replace(/[^0-9]/g, "");
        input.value = value;

        // for moving to the next box if filled
        if (value && index < codeInputs.length - 1) {
            codeInputs[index + 1].disabled = false;
            codeInputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            input.value = "";

            // for disabling all boxes after current. i.e. boxes yet to be reached
            for (let i = index + 1; i < codeInputs.length; i++) {
                codeInputs[i].value = "";
                codeInputs[i].disabled = true;
            }

            // to move back to the previous box
            if (index > 0) {
                codeInputs[index - 1].focus();
            }
        }
    });
});

// Close popup
function closePopup() {
    popupOverlay.style.display = "none";

    // for reseting fields
    codeInputs.forEach((input, i) => {
        input.value = "";
        input.disabled = true;
    });
}
