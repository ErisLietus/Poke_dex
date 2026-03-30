import { State } from "./state.js";

export async function commandExplore(state: State,...args: string[]): Promise<void>{
    const areaName = args[0]
    const area = await state.pokeAPI.fetchLocation(areaName)
    console.log(`Exploring ${areaName}\nFound Pokemon:`)
    for (let enc of area.pokemon_encounters ){
        console.log(` - ${enc.pokemon.name}`)

}
}