define(["jquery", "app/api", "app/ui"], function ($, api, ui) {
  let allData = [];

  function loadCharacters(query = "") {
    api.fetchCharacters(query).then((data) => {
      allData = data; // ✅ FIX: Data disimpan ke allData
      ui.renderCards(data);
    });
  }

  // Load default characters
  loadCharacters();

  // Handle search form (submit)
  $("#search-form").on("submit", function (e) {
    e.preventDefault();
    const query = $(this).find("input").val().trim();
    loadCharacters(query);
  });

  // Handle input search (live filter)
  $(".inputSearch").on("input", function () {
    const query = $(this).val().trim();
    const filtered = allData.filter((char) =>
      char.name.toLowerCase().includes(query.toLowerCase())
    );
    ui.renderCards(filtered);
  });
});
