export function setupFooterAndHeader() {
    // Dynamic year and last modified date
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  const modified = document.getElementById("lastModified")
  if (modified) modified.textContent = `Last Modification: ${document.lastModified}`;

  // Navigation toggle (My hamburger menu)
  const navigation = document.querySelector('nav');
  const hamburger = document.querySelector('#menu');

  if (hamburger && navigation) {
    hamburger.addEventListener('click', () => {
      navigation.classList.toggle('show');
      hamburger.classList.toggle('show');
    });
  }

}
