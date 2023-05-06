function showPokemonInHTML(pokemon){
    return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">

                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
            </li>`;
}

const ListOfPokemons = document.getElementById("ListOfPokemons");

pokeAPI.getPokemon().then((pokemons = []) => {
                // console.log(jsonBody.results))

                const newList = pokemons.map((pokemon) => {
                    return showPokemonInHTML(pokemon)
                })

                const newHtml = newList.join("");
                ListOfPokemons.innerHTML += newHtml;

                /*for (let i = 0; i < pokemons.length; i++) {
                    const pokemon = pokemons[i];
                    // console.log(showPokemonInHTML(pokemon));
                    ListOfPokemons.innerHTML += showPokemonInHTML(pokemon);
                }*/
            })
            .catch((error) => console.log(error))
            .finally(() => console.log("Requisição Concluída!"))