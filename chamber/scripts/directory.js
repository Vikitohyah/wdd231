document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

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
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
    `;
    memberContainer.appendChild(card);
  });
}

const gridView = document.querySelector("#grid");
const listView = document.querySelector("#list")

gridView.addEventListener("click", () => {
  memberContainer.classList.add("grid");
  memberContainer.classList.remove("list");
});

listView.addEventListener("click", () => {
  memberContainer.classList.add("list");
  memberContainer.classList.remove("grid");
});

getMembers();
