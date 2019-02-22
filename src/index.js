document.addEventListener('DOMContentLoaded', () => {
  
  //YOUR CODE HERE


    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(json => {
      console.log(json.length)
       for (let i= 0; i<json.length; i++){
          addPokemon(json[i])
         
        }
    })
  

    const addPokemon = (pokemon) => {
    const container = document.querySelector('#pokemon-container')
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const h1 = document.createElement('h1');
    const div3 = document.createElement('div');
    const img = document.createElement('img');

    container.append(div1)
    div1.append(div2)
    div2.append(h1 , div3)
    div3.append(img)

    div1.className = "pokemon-card";
    div1.addEventListener("click", (e)=>pokemonStatus(e,pokemon))
    div2.className = "pokemon-frame";
    h1.className = "center-text";
    h1.innerText = pokemon.name
    div3.className = "pokemon-image";
    img.className = "toggle-sprite";
    img.addEventListener("click", (e)=>togglePokemon(e,pokemon))
    img.src = pokemon.sprites.front;
    img.id = "data-"+ pokemon.id;
    img.value = "front"
  }

  const togglePokemon= (e, pokemon)=> {
      e.preventDefault();
      if (e.target.value === "front"){
        e.target.src = pokemon.sprites.back
        e.target.value = "back"
      }else if (e.target.value === "back"){
        e.target.src = pokemon.sprites.front;
        e.target.value = "front"
      }
  }

  const pokemonStatus = (e, pokemon)=>{
      alert(
        `${pokemon.name} 
         Move: ${pokemon.abilities}
         Type: ${pokemon.types}
         Height: ${pokemon.height}
         Move: ${pokemon.moves}
         Stats: ${pokemon.stats[0].name}
                    ${pokemon.stats[1].name}
                    ${pokemon.stats[2].name}
         Weight: ${pokemon.weight}
         `
        )


  }

    const filterPokemon = () => {
    const search = document.querySelector('#pokemon-search-input');
    // const form = document.querySelector('#pokemon-search-form');
        search.addEventListener("input", handleSearchInput)
    // form.addEventListener("submit", handleFormSubmit)
    }

  const handleSearchInput= (e) => {
    e.preventDefault();
    const allPokemon = document.querySelectorAll(".center-text")
    const input=e.target.value
    const AllPokemonData=[];
    for(const text of allPokemon){
       AllPokemonData.push(text)
    }
    
    AllPokemonData.filter(name=> {
      if(name.innerText.includes(input)){
        name.parentElement.parentElement.style.display="block";
      }else {
        name.parentElement.parentElement.style.display="none";
      }
    })
  }


  

   filterPokemon()

})
