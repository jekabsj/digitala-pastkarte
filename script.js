function generatePostcard() {
    var message = document.getElementById('message').value;

    if (!message) {
        alert('Lūdzu, ieraksti savu novēlējumu pirms ģenerēšanas!');
        return;
    }

    var postcardImage = document.getElementById('postcardImage');
    postcardImage.src = 'https://via.placeholder.com/600x400.png?text=' + encodeURIComponent(message);
    postcardImage.style.display = 'block';
}
