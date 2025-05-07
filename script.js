// Change text and style
document.getElementById("change-btn").addEventListener("click", function () {
    const description = document.getElementById("description");
    description.textContent = "The content and style have been changed!";
    description.style.color = "white";
    description.style.backgroundColor = "teal";
    description.style.padding = "10px";
});

// Toggle an extra paragraph dynamically
document.getElementById("toggle-element-btn").addEventListener("click", function () {
    const container = document.getElementById("extra-info-container");
    const existing = document.getElementById("extra-paragraph");

    if (existing) {
        container.removeChild(existing);
    } else {
        const newParagraph = document.createElement("p");
        newParagraph.id = "extra-paragraph";
        newParagraph.textContent = "This is an extra paragraph added dynamically!";
        container.appendChild(newParagraph);
    }
});

// Change header text color on hover
const header = document.getElementById("main-title");
header.addEventListener("mouseover", function () {
    header.style.color = "blue";
});
header.addEventListener("mouseout", function () {
    header.style.color = ""; // Reset to default
});

// Display a random fun fact
document.getElementById("fun-fact-btn").addEventListener("click", function () {
    const funFacts = [
        "Honey never spoils.",
        "Bananas are berries, but strawberries aren't.",
        "Octopuses have three hearts.",
        "A group of flamingos is called a 'flamboyance'.",
        "The Eiffel Tower can grow taller in summer."
    ];
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    const funFactElement = document.getElementById("fun-fact");
    funFactElement.textContent = randomFact;
});