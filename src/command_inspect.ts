import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    if(state.caughtPokemon[args[0]] === undefined){
        console.log("you have not caught that pokemon")
        return 
    }
    const pokemon = state.caughtPokemon[args[0]]
    console.log(`Name: ${pokemon.name}`)
    console.log(`Height: ${pokemon.height}`)
    console.log(`Weight: ${pokemon.weight}`)
    console.log(`Stats:`)
    for (let stat of pokemon.stats){
        console.log(`  -${stat.stat.name}: ${stat.base_stat}`)
    }
    console.log(`Types:`)
    for (let type of pokemon.types){
        console.log(`  - ${type.type.name}`)
    }
}