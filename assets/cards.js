let Poster = [
    { title: "Hogwarts", description: "Hogwarts Legacy", src: "../assets/media/Hogwarts.jpg" },
    { title: "Valhalla", description: "Valhalla Rising", src: "../assets/media/Valhalla.jpg" },
    { title: "God Of War", description: "God Of War", src: "../assets/media/GodOfWar.jpg" },
    { title: "One Piece", description: "One Piece", src: "../assets/media/OnePiece.webp" },
    { title: "GTA", description: "GTA", src: "../assets/media/Gta.jpg" }
];

const Card = document.querySelector('.card');
const likedCardsContainer = document.querySelector('.likedCards');
let i = 0;
let Cards = JSON.parse(localStorage.getItem("Cards")) || [];

function DisplayCard(i) {
    Card.style.backgroundImage = `url(${Poster[i].src})`;
    Card.innerHTML = `
        <h3 id="title">${Poster[i].title}</h3>
        <p id="description">${Poster[i].description}</p>
    `;
}

DisplayCard(i);

document.getElementById("like").addEventListener("click", () => {
    const likedCard = Poster[i];
    Cards.push(likedCard);
    localStorage.setItem("Cards", JSON.stringify(Cards)); // Save to localStorage

    i++;
    if (i >= Poster.length) {
        i = 0;
    }
    DisplayCard(i);
});

document.getElementById("dislike").addEventListener("click", () => {
    i++;
    if (i >= Poster.length) {
        i = 0;
    }
    DisplayCard(i);
});

document.getElementById("Liked").addEventListener("click", () => {
    Card.style.display = "none";
    document.querySelector('.buttons').style.display = "none";
    likedCardsContainer.innerHTML = ''; // Clear the container before displaying liked cards
    Cards.forEach(card => {
        const likedCardElement = document.createElement('div');
        likedCardElement.classList.add('card');
        likedCardElement.style.backgroundImage = `url(${card.src})`;
        likedCardElement.innerHTML = `
            <h3 id="title">${card.title}</h3>
            <p id="description">${card.description}</p>
        `;
        likedCardsContainer.appendChild(likedCardElement);
    });
});
