import { State } from "./state.js";

export async function commandMap(state: State): Promise<void>{
    const resp = await state.pokeAPI.fetchLocations(state.nextLocationsURL)
    state.nextLocationsURL = resp.next
    state.prevLocationsURL = resp.previous ?? ""
    for (let result of resp.results){
        console.log(`${result.name}`)
    }
}

export async function commandMapb(state: State): Promise<void>{
    if (state.prevLocationsURL === ""){
        console.log("You're on the first page")
        return
    }
    const resp = await state.pokeAPI.fetchLocations(state.prevLocationsURL)
    state.nextLocationsURL = resp.next
    state.prevLocationsURL = resp.previous ?? ""
    for (let result of resp.results){
        console.log(`${result.name}`)
    }
}