import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"],
    },
    {
        input: "charmander Bulbasaur PIKACHU",
        expected: ["charmander", "bulbasaur", "pikachu"]
    },
    {
        input: "Boots is an AWESOME Bear",
        expected: ["boots", "is", "an", "awesome", "bear"]
    }
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    // TODO: call cleanInput with the input here
        const actual = cleanInput(input)
    // The `expect` and `toHaveLength` functions are from vitest
    // they will fail the test if the condition is not met
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      // likewise, the `toBe` function will fail the test if the values are not equal
      expect(actual[i]).toBe(expected[i]);
    
    }
  });
});