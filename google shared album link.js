// Google Photos Album Access
function accessAlbum() {
    const password = prompt("Enter password to access the album:");
    if (password === "Vanakkam") {
        window.open("https://photos.app.goo.gl/ZacWy3yjDBVUvKU46", "_blank");
    } else {
        alert("Incorrect password. Access denied.");
    }
}
