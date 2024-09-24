const cards = document.querySelector(".cards");

function createH2(header) {
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "card--title");
  h2.innerHTML = header;

  return h2;
}

function createImg(src) {
  const img = document.createElement("img");
  img.setAttribute("class", "card--img");
  img.setAttribute("src", src);
  img.setAttribute("width", "256");

  return img;
}

function createStat(stat) {
  const statElement = document.createElement("li");
  statElement.innerHTML = stat.stat.name.toUpperCase() + ": " + stat.base_stat;

  return statElement;
}

function createStats(stats) {
  const statsElement = document.createElement("ul");
  statsElement.setAttribute("class", "card--text");

  stats.forEach((stat) => statsElement.appendChild(createStat(stat)));

  return statsElement;
}

function createPokemonElement(pokemon) {
  const element = document.createElement("li");
  element.setAttribute("class", "card");

  element.appendChild(createH2(pokemon.name));
  element.appendChild(createImg(pokemon.sprites.front_default));
  element.appendChild(createStats(pokemon.stats));

  return element;
}

data.forEach((pokemon) => {
  cards.appendChild(createPokemonElement(pokemon));
});
