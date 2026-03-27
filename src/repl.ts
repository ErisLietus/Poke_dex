import { createInterface } from "readline"
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    const array = input.toLowerCase().trim().split(" ").filter((word) => word !== "")
    return array
}
export function startREPL(state: State) {

state.readline.prompt()

state.readline.on("line", (input) => {
    let array = cleanInput(input)
        const command = array[0];
    if (state.commands[command] === undefined){
        console.log(`unknown command`)
    } else{
        state.commands[command].callback(state)
    }
    state.readline.prompt()
    
});}