function getSurat() {
    fetch('https://equran.id/api/surat')
    .then(response => response.json())
    .then(response => {
        let cardSurat='';
        response.forEach(surat => {
            cardSurat+=`
            <div class="col-lg-3 col-md-4 col-sm-12">
                <div class="card mb-3 card-surat">
                    <div class="card-body" onclick="location.href='surat.html?nomorsurat=${surat.nomor}'">
                      <h5 class="card-title">${surat.nomor}. ${surat.nama_latin}</h5>
                      <h4 class="card-subtitle mb-2 text-muted text-end">${surat.nama}</h4>
                      <p class="card-text text-end">${surat.arti}</p>
                    </div>
                  </div>
            </div>`
        });

        const listSurat = document.querySelector('.card-surat-list');
        listSurat.innerHTML = cardSurat;
   
        console.log (response)
    });
}

getSurat();

// Fungsi untuk melakukan pencarian
function searchSurat() {
    const input = document.getElementById('surat-search');
    const filter = input.value.toLowerCase();
    const cardSurat = document.querySelectorAll('.card-surat');
  
    cardSurat.forEach(function (card) {
      const cardTitle = card.querySelector('.card-title').innerText.toLowerCase();
      const cardSubtitle = card.querySelector('.card-subtitle').innerText.toLowerCase();
      if (cardTitle.indexOf(filter) > -1 || cardSubtitle.indexOf(filter) > -1) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  // Menambahkan event listener untuk memanggil fungsi searchSurat saat input berubah
  document.getElementById('surat-search').addEventListener('input', searchSurat);