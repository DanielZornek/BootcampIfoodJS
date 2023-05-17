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