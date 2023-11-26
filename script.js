function generatePostcard() {
    var message = document.getElementById('message').value;

    if (!message) {
        alert('Lūdzu, ieraksti savu novēlējumu pirms ģenerēšanas!');
        return;
    }

    var postcardImage = document.getElementById('postcardImage');
    var postcardText = document.getElementById('postcardText');
    var downloadLink = document.getElementById('downloadLink');

    // Izveido attēlu ar dinamisko tekstu
    var imageUrl = 'https://via.placeholder.com/600x400.png?text=Skola,+kur%C4%81+katrs+' + encodeURIComponent(message) + '+ir+v%C4%93rt%C4%ABba';
    postcardImage.src = imageUrl;
    postcardImage.style.display = 'block';

    // Uzstāda dinamisko tekstu uz pastkartes
    postcardText.innerText = 'Skola, kurā katrs ' + message + ' ir vērtība';

    // Parāda lejupielādes saiti
    downloadLink.href = imageUrl;
    downloadLink.style.display = 'block';
}
