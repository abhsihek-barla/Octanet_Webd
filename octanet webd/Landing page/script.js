// script.js

function showDramaDetails(title, genres, leadActor, leadActress) {
    const dramaInfoContainer = document.getElementById("drama-info");
    dramaInfoContainer.innerHTML = `<h2>${title}</h2>
                                   <p><strong>Genres:</strong> ${genres}</p>
                                   <p><strong>Lead Actor:</strong> ${leadActor}</p>
                                   <p><strong>Lead Actress:</strong> ${leadActress}</p>`;

    // Show the drama details section
    const dramaDetailsSection = document.getElementById("drama-details");
    dramaDetailsSection.style.display = "block";
}

function hideDramaDetails() {
    // Hide the drama details section
    const dramaDetailsSection = document.getElementById("drama-details");
    dramaDetailsSection.style.display = "none";
}
// The `scrollTo` method is a smooth scroll option
// `document.documentElement` points to the `<html>` tag
// `window.pageYOffset` or `document.documentElement.scrollTop` returns the number of pixels the document has been scrolled vertically
// 72 is the approximate height of a row in the movie grid
// By default, `scrollTo` scrolls the page vertically by a specified number of pixels
// To enable smooth scrolling, set the `behavior` option to 'smooth'
document.documentElement.scrollTo({
    top: window.pageYOffset + 72,
    behavior: 'smooth'
   });