import data from "../src/data/rickandmorty/rickandmorty.js";
import { filterCharacter, sortDataAZ, sortDataZA } from "../src/data.js";

const testCharacters = [{ "name": "Rick Sanchez" }, { "name": "Summer Smith" }, { "name": "Beth Smith" }, { "name": "Evil Morty" }];
const charactersAZ = [{ "name": "Beth Smith" }, { "name": "Evil Morty" }, { "name": "Rick Sanchez" }, { "name": "Summer Smith" }];
const charactersZA = [{ "name": "Summer Smith" }, { "name": "Rick Sanchez" }, { "name": "Evil Morty" }, { "name": "Beth Smith" }];

describe("filterCharacter debería ser una función", () => {
  it("is a function", () => {
    expect(typeof filterCharacter).toBe("function");
  });

  it("al escoger la especie alien, debería retornar 132 personajes", () => {
    expect(filterCharacter("Alien", data.results)).toHaveLength(132);
  });
});

describe("sortDataAZ debería ser una función", () => {
  it("is a function", () => {
    expect(typeof sortDataAZ).toBe("function");
  });

  it("al seleccionar la opción AZ, debería organizar los personajes alfabéticamente", () => {
    expect(sortDataAZ(testCharacters)).toStrictEqual(charactersAZ);
  });
});

describe("sortDataZA debería ser una función", () => {
  it("is a function", () => {
    expect(typeof sortDataZA).toBe("function");
  });

  it("al seleccionar la opción ZA, debería organizar los personajes de la Z a la A", () => {
    expect(sortDataZA(testCharacters)).toStrictEqual(charactersZA);
  });
});