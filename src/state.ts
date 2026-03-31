import { createInterface, type Interface } from "readline"
import { getCommands } from "./command.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type State = {
    readline: Interface
    commands: Record<string, CLICommand>
    pokeAPI: PokeAPI
    nextLocationsURL: string
    prevLocationsURL: string
    caughtPokemon: Record<string, Pokemon>

}

export type CLICommand = {
    name: string; 
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
}



export function initState(){

    const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
}); 

    return {
        readline: rl,
        commands: getCommands(),
        pokeAPI: new PokeAPI(),
        nextLocationsURL: "",
        prevLocationsURL: "",
        caughtPokemon: {}
    } ;
    
}