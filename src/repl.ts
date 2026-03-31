import { createInterface } from "readline"
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    const array = input.toLowerCase().trim().split(" ").filter((word) => word !== "")
    return array
}
export async function startREPL(state: State) {

state.readline.prompt()

state.readline.on("line", async (input) => {
    let array = cleanInput(input)
        const command = array[0];
    if (state.commands[command] === undefined){
        console.log(`unknown command`)
    } else{
        try {
            await state.commands[command].callback(state, ...array.slice(1))
        }catch (e) {
            console.log(`Error: ${(e as Error).message}`)
        }
    }
    state.readline.prompt()
    
});}