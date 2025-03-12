const messages = [
    "Are you sure?",
    "Are you really sure??",
    "Realy Reeeally sure???",
    "Please",
    "I'll be sad",
    "Really sad😕",
    "Pls?!?!",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}