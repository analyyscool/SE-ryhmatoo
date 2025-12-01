// ---------------------------------------
// Juhusliku sihtkoha valimine (index.html)
// ---------------------------------------

// Otsime avalehe nupu ja tulemuse elemendid välja
const randomBtn = document.getElementById('random-btn');
const randomResult = document.getElementById('random-result');

// Kontrollime, kas oleme avalehel 
if (randomBtn && randomResult) {

    // Sihtkohtade nimekiri 
    const sihtkohad = [
        { nimi: 'Tartu', url: 'tartu.html' },
        { nimi: 'Pärnu', url: 'parnu.html' }
    ];

    // Lisame nupule klikikuulaja
    randomBtn.addEventListener('click', function () {
        // Valime suvalise sihtkoha massiivist
        const indeks = Math.floor(Math.random() * sihtkohad.length);
        const sihtkoht = sihtkohad[indeks];

        // Kuvame tulemuse koos lingiga
        randomResult.innerHTML = `Soovitame: <a href="${sihtkoht.url}">${sihtkoht.nimi}</a>`;
    });
}


// -------------------------------------------------
// "Näita rohkem infot" nupp (tartu.html ja parnu.html)
// -------------------------------------------------

// Otsime nupu ja lisainfo ploki
const infoBtn = document.getElementById('info-btn');
const moreInfo = document.getElementById('more-info');

// Kontrollime, kas oleme mõnel linna-lehel (kus need elemendid olemas on)
if (infoBtn && moreInfo) {

    // Lisame nupule klikikuulaja
    infoBtn.addEventListener('click', function () {

        // Kontrollime, kas lisainfo on peidus või nähtav
        const peidus = moreInfo.style.display === '' || moreInfo.style.display === 'none';

        if (peidus) {
            // Teeme lisainfo nähtavaks
            moreInfo.style.display = 'block';
            infoBtn.textContent = 'Näita vähem infot';
        } else {
            // Peidame lisainfo uuesti
            moreInfo.style.display = 'none';
            infoBtn.textContent = 'Näita rohkem infot';
        }
    });
}

