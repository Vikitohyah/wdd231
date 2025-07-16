document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const navigation = document.querySelector('nav');
const hamburger = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamburger.classList.toggle('show');
});


const memberContainer = document.getElementById("member-container");

async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  memberContainer.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
    <img src="${member.image}" alt="${member.name} logo" loading="lazy" class="member-logo" width="100" height="100">
    <h2>${member.name}</h2>
    <p class="address">${member.address}</p>
    <p class="phone">${member.phone}</p>
    <a href="${member.website}" target="_blank" class="website">${member.website}</a>
    `;
    memberContainer.appendChild(card);
  });
}

const gridView = document.querySelector("#grid");
const listView = document.querySelector("#list")

gridView.addEventListener("click", () => {
  memberContainer.classList.add("grid-view");
  memberContainer.classList.remove("list-view");
});

listView.addEventListener("click", () => {
  memberContainer.classList.add("list-view");
  memberContainer.classList.remove("grid-view");
});

getMembers();
