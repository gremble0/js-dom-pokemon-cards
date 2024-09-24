const cards = document.querySelector(".cards");

function createH2(header) {
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "card--title");
  h2.innerHTML = header;

  return h2;
}

function createImg(sprites) {
  const img = document.createElement("img");
  let curImg = sprites.front_default;
  img.setAttribute("class", "card--img");
  img.setAttribute("src", curImg);
  img.setAttribute("width", "256");

  img.addEventListener("click", (_) => {
    if (curImg === sprites.front_default) curImg = sprites.back_default;
    else curImg = sprites.front_default;
    img.setAttribute("src", curImg);
  });

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

function createGameInfo(gameIndicies) {
  const gameInfo = document.createElement("ul");
  gameInfo.setAttribute("class", "card--text");

  gameIndicies.forEach((gameIndex) => {
    const gameInfoI = document.createElement("li");
    gameInfoI.innerHTML = gameIndex.version.name;
    gameInfo.appendChild(gameInfoI);
  });

  return gameInfo;
}

function createPokemon(pokemon) {
  const element = document.createElement("li");
  element.setAttribute("class", "card");

  element.appendChild(createH2(pokemon.name));
  element.appendChild(createImg(pokemon.sprites));
  element.appendChild(createStats(pokemon.stats));
  element.appendChild(createGameInfo(pokemon.game_indices));

  return element;
}

data.forEach((pokemon) => {
  cards.appendChild(createPokemon(pokemon));
});
