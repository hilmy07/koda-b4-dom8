const container = document.querySelector(".container");
const cardTemplate = document.querySelector(".card");
const searchForm = document.querySelector(".search-form");
const inputSearch = document.querySelector(".inputSearch");

let data = [];

async function getData() {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    data = result.results;

    // Hapus card template dari tampilan agar tidak muncul
    cardTemplate.style.display = "none";

    data.forEach((item) => {
      const card = cardTemplate.cloneNode(true);
      card.style.display = "inline-block"; // Tampilkan card

      // Isi data pada card hasil clone
      const img = card.querySelector("img");
      const name = card.querySelector("p");

      img.src = item.image;
      img.alt = item.name;
      name.textContent = item.name;

      // Tambahkan card ke container
      container.appendChild(card);

      renderCards(data);
    });
  } catch (error) {
    console.error(error.message);
  }
}

function renderCards(data) {
  // Hapus semua card kecuali template (yang display none)
  container
    .querySelectorAll(".card:not([style*='display: none'])")
    .forEach((card) => card.remove());

  data.forEach((item) => {
    const card = cardTemplate.cloneNode(true);
    card.style.display = "inline-block";

    const img = card.querySelector("img");
    const name = card.querySelector("p");

    img.src = item.image;
    img.alt = item.name;
    name.textContent = item.name;

    container.appendChild(card);
  });
}

// Tangani submit search form
inputSearch.addEventListener("input", (e) => {
  const query = inputSearch.value.trim().toLowerCase();

  const filtered = data.filter((character) =>
    character.name.toLowerCase().includes(query)
  );

  renderCards(filtered);
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = inputSearch.value.trim().toLowerCase();
  const filtered = data.filter((character) =>
    character.name.toLowerCase().includes(query)
  );
  renderCards(filtered);
});

searchForm.addEventListener("reset", (e) => {
  renderCards(data);
});

getData();
