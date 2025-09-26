define(["axios"], function (axios) {
  function fetchCharacters(query = "") {
    const url = query
      ? `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(
          query
        )}`
      : "https://rickandmortyapi.com/api/character";

    return axios
      .get(url)
      .then((res) => res.data.results)
      .catch((err) => {
        console.warn("API error:", err.message);
        return [];
      });
  }

  return {
    fetchCharacters,
  };
});
