import { Cache } from "./pokecache.js";

export class PokeAPI {
  #cache = new Cache(5 * 60 * 1000)

  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    try {
      
    const url = pageURL || "https://pokeapi.co/api/v2/location-area"
    const cashed = this.#cache.get<ShallowLocations>(url);
    if (cashed){
      return cashed
    }
    else{
    const response = await fetch(url)
    if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`)
    }
        const data = await response.json()
        this.#cache.add(url,data)
        return data;
    }}
    catch (e) {
        throw new Error(`Error fetching locations: ${(e as Error).message}`)  
    }
}
  async fetchLocation(locationName: string): Promise<Location> {
    try {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`
        const cashed = this.#cache.get<Location>(url);
        if (cashed){
          return cashed
        }
        else{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`)
        }
        const data =  response.json()
        this.#cache.add(url, data)
        return data
    }}
    catch (e) {
        throw new Error(`Error fetching locations: ${(e as Error).message}`)
    }
  }
}

export type ShallowLocations = {
    count: number,
    next: string,
    previous: string | null
    results:[{
    name: string,
    url: string
    }]
};

export interface Location {
  encounter_method_rates: EncounterMethodRate[]
  game_index: number
  id: number
  location: NextLocation
  name: string
  names: Name[]
  pokemon_encounters: PokemonEncounter[]
}

export interface EncounterMethodRate {
  encounter_method: EncounterMethod
  version_details: VersionDetail[]
}

export interface EncounterMethod {
  name: string
  url: string
}

export interface VersionDetail {
  rate: number
  version: Version
}

export interface Version {
  name: string
  url: string
}

export interface NextLocation {
  name: string
  url: string
}

export interface Name {
  language: Language
  name: string
}

export interface Language {
  name: string
  url: string
}

export interface PokemonEncounter {
  pokemon: Pokemon
  version_details: VersionDetail2[]
}

export interface Pokemon {
  name: string
  url: string
}

export interface VersionDetail2 {
  encounter_details: EncounterDetail[]
  max_chance: number
  version: Version2
}

export interface EncounterDetail {
  chance: number
  condition_values: ConditionValue[]
  max_level: number
  method: Method
  min_level: number
}

export interface ConditionValue {
  name: string
  url: string
}

export interface Method {
  name: string
  url: string
}

export interface Version2 {
  name: string
  url: string
}