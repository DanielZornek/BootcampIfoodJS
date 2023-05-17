function showPokemonInHTML(pokemon){
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">

                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join("")}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
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