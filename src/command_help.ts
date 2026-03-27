import { CLICommand, State } from "./state.js"

export function commandHelp(state: State) {
console.log(`Welcome to the Pokedex!`)
console.log (`Usage: \n`)
const array = Object.keys(state.commands);
let string = ""
    for (let a of array){
        console.log(`${state.commands[a].name}: ${state.commands[a].description}`)
    }

}
