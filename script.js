const messages = [
    "Sure kana??",
    "Pumayag kana 🥺",
    "Maawa ka naman sakin!",
    "Sige na Ganda 💗",
    "Kung ako yan di kita gaganunin!",
    "Iiyak nako dito oh! 🥹"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    if (!noButton || !yesButton) {
        console.error("Buttons not found!");
        return;
    }

    noButton.textContent = messages[messageIndex];

    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(
        window.getComputedStyle(yesButton).fontSize
    );

    yesButton.style.fontSize =
        Math.min(currentSize * 1.2, 60) + "px";
}

function handleYesClick() {
    window.location.href = "./yes_page.html";
}
