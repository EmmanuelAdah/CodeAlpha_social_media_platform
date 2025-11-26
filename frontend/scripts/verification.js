const sendCodeBtn = document.getElementById("sendCodeBtn");
const popupOverlay = document.getElementById("popupOverlay");
const codeInputs = document.querySelectorAll(".code");
const BASE_URL = process.env.BASE_URL;

// Open the verification popup when email is entered
function inputVerificationCode(verificationEmail) {
    sendCodeBtn.addEventListener("click", () => {
        // const email = document.getElementById("emailInput").value.trim();

        if (verificationEmail === "") {
            alert("Please enter an email.");
            return;
        }
        popupOverlay.style.display = "flex";

        // To enable the first box only
        codeInputs[0].disabled = false;
        codeInputs[0].focus();
    });

    // For Handle typing logic
    codeInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            let value = input.value.replace(/[^0-9]/g, "");
            input.value = value;

            // To move to the next box if a digit is entered
            if (value && index < codeInputs.length - 1) {
                codeInputs[index + 1].disabled = false;
                codeInputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                input.value = "";

                // Disable all boxes after current
                for (let i = index + 1; i < codeInputs.length; i++) {
                    codeInputs[i].value = "";
                    codeInputs[i].disabled = true;
                }

                // For moving back to the previous box
                if (index > 0) {
                    codeInputs[index - 1].focus();
                }
            }
        });
    });
}

// For Close popup
function closePopup() {
    popupOverlay.style.display = "none";

    // Reset fields
    codeInputs.forEach((input, i) => {
        input.value = "";
        input.disabled = true;
    });
}

async function sendEmail() {
    const email = document.getElementById("emailInput").value.trim();

    confirm(`Are you sure you want to send a email address to ${email}?`);
    alert("Am sending the email already....");

    // const sendEmailRequest = await fetch(`${BASE_URL}/api/auth/verify/user`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ email })
    // })
    // if (!sendEmailRequest.ok)
    //     return alert("Not a registered email");
    //
    inputVerificationCode(email);
}

async function verifyCode() {
    const email = document.getElementById("emailInput").value.trim();
    const code = document.getElementById("codeInput").value.trim();

    confirm(`Are you sure you want to verify ${codeInputs}?`);

}
