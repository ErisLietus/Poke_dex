import { createInterface } from "readline"

export function cleanInput(input: string): string[] {
    const array = input.toLowerCase().trim().split(" ").filter((word) => word !== "")
    return array
}
export function startREPL() {
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
});

rl.prompt();

rl.on("line", (input) => {
    let array = cleanInput(input)
    if (array.length === 0){
        rl.prompt()
    } else{
        console.log(`Your command was: ${array[0]}`)
    }
    rl.prompt()
    
});}