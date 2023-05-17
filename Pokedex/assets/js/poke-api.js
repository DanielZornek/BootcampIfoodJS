const pokeAPI = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();

    pokemon.name = pokeDetail.name;
    pokemon.number = pokeDetail.order;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types
    pokemon.type = type;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    
    return pokemon;
}

pokeAPI.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon);
} 

pokeAPI.getPokemon = (offset = 0, limit = 9) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
            .then( (response) => response.json())
            .then( (jsonBody) => jsonBody.results)
            .then( (pokemons) => pokemons.map(pokeAPI.getPokemonDetails) )
            .then((detailRequests) => Promise.all(detailRequests))
            .then((pokemonDetails) => pokemonDetails )
            .catch( (error) => console.log(error))
}

/*Promise.all([
    fetch("https://pokeapi.co/api/v2/pokemon/1"),
    fetch("https://pokeapi.co/api/v2/pokemon/2"),
    fetch("https://pokeapi.co/api/v2/pokemon/3"),
    fetch("https://pokeapi.co/api/v2/pokemon/4")
]).then( (results) =>{
    console.log(results)
})*/