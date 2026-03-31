import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void>{
if(args[0]=== undefined){
    console.log("Invalid Pokemon")
    return
    }
const pokemon = await state.pokeAPI.fetchPokemon(args[0])
console.log(`Throwing a Pokeball at ${pokemon.name}...`)
const roll = Math.random() * pokemon.base_experience
if(roll < 50){
    console.log(`${pokemon.name} was caught!`)
    state.caughtPokemon[pokemon.name] = pokemon
    }else{
        console.log(`${pokemon.name} escaped into the grass. tsh....`)
    }
}