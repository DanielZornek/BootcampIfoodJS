const ListOfPokemons = document.getElementById("ListOfPokemons");
const loadMoreButton = document.getElementById("loadMoreButton");
const maxRecords = 151;
const limit = 5;
let offset = 0;

function showPokemonInHTML(pokemon){
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">

                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>

                <div class="pokemon-details">
                
                    <section class="detail-abilities">
                        <h4>Principal Ability:</h4>

                        <span>${pokemon.mainAbility}<span>

                        <h4>All Abilities:</h4>

                        <span>${pokemon.allAbilities.map((ability) => `<li class="type">${ability}</li>`).join("")}<span>
                        
                    </section>

                    <section class="detail-moves">
                        <h4>Some Moves:</h4>
                        <span class="detail-moves-move">${pokemon.moves.map((move) => `<li class="type">${move}</li>`).join("")}</span>
                    </section>

                </div>

                <section class="detail-status">
                        <h4 class="detail-status-title">Status:</h4>
                        <hr><br>
                        <div class="detail-status-log">
                            <span> ${pokemon.pokemonStatusName.map((statName) => `<li>${statName}:  </li>`).join("")} </span>

                            <span>
                            ${pokemon.pokemonStatusValue.map((statValue) => `<li>${statValue}</li>`).join("")}
                            </span>
                        </div>

                </section>

            </li>`;
}

function loadPokemonItems(offSet, limit){
    pokeAPI.getPokemon(offSet, limit).then((pokemons = []) => {
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
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener("click",() => {
    offset += limit;

    const qtdRecordNextPage = offset + limit;
    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }else{
        loadPokemonItems(offset, limit);
    }
    
});