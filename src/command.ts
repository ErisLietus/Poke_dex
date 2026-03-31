import { commandExit } from "./command_exit.js";
import { CLICommand } from "./state.js"
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapb } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit:{
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help:{
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map:{
            name: "map",
            description: "Displays the areas you can go to",
            callback: commandMap,
        },
        mapb:{
            name:"mapb",
            description: "Displays the previous areas you can do to",
            callback: commandMapb,
        },
        explore:{
            name: "explore",
            description: "explores the area for pokemon",
            callback: commandExplore,
        },
        catch:{
            name: "catch",
            description: "Catch a Pokemon!",
            callback: commandCatch,
        }
    }

}