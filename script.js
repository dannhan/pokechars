let currentNumber = 1;

const getPokemon = async (number) => {
  number = number || 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
  const pokemon = await response.json();

  const documentName = document.getElementById("name");
  const documentArt = document.getElementById("art");
  
  documentName.textContent = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  documentArt.src = pokemon.sprites.other.dream_world.front_default;
};

const nextPokemon = () => {
  currentNumber++;
  getPokemon(currentNumber);
};

const previousPokemon = () => {
  if (currentNumber > 0) currentNumber--;
  getPokemon(currentNumber);
};

getPokemon(currentNumber);