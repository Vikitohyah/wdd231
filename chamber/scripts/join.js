import { setupFooterAndHeader } from "./modules.js";
setupFooterAndHeader();

document.addEventListener("DOMContentLoaded", () => {
    const now = new Date().toISOString();
    document.getElementById("timestamp").value = now;
});

const closeModal = document.querySelector(".closeModal");

// NP Membership
const npModal = document.getElementById('np-modal');
const npBtn = document.querySelector("#np");
npBtn.addEventListener('click', () =>{
    npModal.showModal();
});
npModal.addEventListener("click", () => {
    npModal.close();
});

// Bronze Membership
const bronzeModal = document.getElementById('bronze-modal');
const bronzeBtn = document.querySelector("#bronze");
bronzeBtn.addEventListener('click', () =>{
    bronzeModal.showModal();
});
bronzeModal.addEventListener("click", () => {
    bronzeModal.close();
});

// Silver Membership
const silverModal = document.getElementById('silver-modal');
const silverBtn = document.querySelector("#silver");
silverBtn.addEventListener('click', () =>{
    silverModal.showModal();
});
silverModal.addEventListener("click", () => {
    silverModal.close();
});

// Gold Membership
const goldModal = document.getElementById('gold-modal');
const goldBtn = document.querySelector("#gold");
goldBtn.addEventListener('click', () =>{
    goldModal.showModal();
});
goldModal.addEventListener("click", () => {
    goldModal.close();
});