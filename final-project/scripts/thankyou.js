// Thank You Page Information Gotten From Form
const params = new URLSearchParams(window.location.search);

document.getElementById("name").textContent = params.get("name") || "N/A";
document.getElementById("email").textContent = params.get("email") || "N/A";
document.getElementById("plan").textContent = params.get("plan") || "N/A";
document.getElementById("timestamp").textContent = params.get("timestamp") || "N/A";