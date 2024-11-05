document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.querySelector(".typing-text");
    const messages = [
        "Wishing you a day filled with love and laughter ❤️",
        "Hope your morning is as bright as your smile 😊",
        "Have a wonderful day, you amazing person! 💖",
        "I hope today brings",
        "you all the happiness, energy, and motivation",
        "you need to take on whatever comes your way!",
        "May everything go smoothly",
        "and remember to enjoy the",
        "little things—your",
        "smile alone can light up any room! 😊",
        "Have an amazing day filled with",
        "fun, laughter, and good vibes. Just know",
        "I'm cheering you on and wishing you all the best.",
        "You’ve got this! 🌟"
    ];

    let messageIndex = 0;
    let charIndex = 0;

    function typeMessage() {
        if (charIndex < messages[messageIndex].length) {
            typingText.innerHTML += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, 100); // Delay between each character
        } else {
            setTimeout(() => {
                typingText.innerHTML = "";
                charIndex = 0;
                messageIndex = (messageIndex + 1) % messages.length; // Loop through messages
                typeMessage();
            }, 2000); // Delay before next message
        }
    }

    typeMessage();
});
