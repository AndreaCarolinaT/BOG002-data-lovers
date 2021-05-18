export function filterCharacter(specie, dataCharacter) {
  let filterSpecie = dataCharacter.filter((item) => item.species === specie);
  return filterSpecie
}

export function sortDataAZ(characters) {
  let orderAZ = characters.sort((character1, character2) => {
      return (character1.name < character2.name) ? -1 : 1
  })
  return orderAZ 
}

export function sortDataZA(characters) {
  let orderZA = characters.sort((character1, character2) => {
      return (character1.name > character2.name) ? -1 : 1
  })
  return orderZA
}
