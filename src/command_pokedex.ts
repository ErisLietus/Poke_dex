import { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
    const pokemons = Object.values(state.caughtPokemon)
    console.log(`Your Pokedex:`)
    for (let pokemon of pokemons){
        console.log(` - ${pokemon.name}`)
    }
 
}