define(["jquery"], function ($) {
  const $container = $("#cards-container");
  const $cardTemplate = $(".card");
  const $noResults = $("#no-results");

  function renderCards(data) {
    $container.empty();

    if (data.length === 0) {
      $noResults.removeClass("hidden");
      return;
    } else {
      $noResults.addClass("hidden");
    }

    data.forEach((item) => {
      const $card = $cardTemplate.clone();
      $card.removeClass("hidden");
      $card.find("img").attr("src", item.image).attr("alt", item.name);
      $card.find("p").text(item.name);

      $container.append($card);
    });
  }

  return {
    renderCards,
  };
});
