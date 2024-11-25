// Google Photos Album Access
function accessAlbum() {
    const password = prompt("Enter password to access the album:").trim(); // Removes leading/trailing spaces
    if (password === "Vanakkam") { // Case-sensitive match
        window.open("https://photos.app.goo.gl/ZacWy3yjDBVUvKU46", "_blank");
    } else {
        alert("Incorrect password. Access denied.");
    }
}
