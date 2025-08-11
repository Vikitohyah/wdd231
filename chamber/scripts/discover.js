import { setupFooterAndHeader } from "./modules.js";
setupFooterAndHeader();

async function getInterest() {
  const response = await fetch("data/interest.json");
  const data = await response.json();
  displayInterest(data.interests);
}

function displayInterest(interest) {
    interest.forEach((item, index) => {
        const card = document.getElementById(`card${index + 1}`);
        if (!card) return; // skip if card doesn't exist

        card.querySelector("h2").textContent = item.name;
        const addressEl = card.querySelector("address");
        addressEl.innerHTML = `<strong>Address: </strong>${item.address}`;
        card.querySelector("p").textContent = item.description;
    });
}

getInterest();



const visitMessage = document.getElementById("visitor-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions. 🤗";
} else {
    const daysSinceLast = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    
    if (daysSinceLast < 1) {
        visitMessage.textContent = "Back so soon! Awesome! 😎";
    } else if (daysSinceLast === 1) {
        visitMessage.textContent = "You last visited 1 day ago. 👍";
    } else {
        visitMessage.textContent = `You last visited ${daysSinceLast} days ago. 👍`;
    }
}

localStorage.setItem("lastVisit", now);