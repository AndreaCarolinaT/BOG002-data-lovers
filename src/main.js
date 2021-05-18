import data from "./data/rickandmorty/rickandmorty.js"
import { filterCharacter, sortDataAZ, sortDataZA } from "./data.js"

/*Variable que contiene toda la data y la que contiene las tarjetas de los personajes*/
const dataCharacter = data.results
const container = document.querySelector('.characterContainer')

/*------ MOSTRAR DATA (HU1) ------*/
/*Función que mostrará las tarjetas de los personajes y ventanas modales con los datos de cada uno*/
function showCharacters(characters) {
  const containCharacter = characters.map(character => {
    return `
    <div class="characterCard" id="${character.id}">

      <div class="characterImage">
        <img src=${character.image}></img>
      </div>
      <div class="characterInfo">
        <h2>${character.name}</h2>
      </div>
    </div>
  `
  })

  container.innerHTML = containCharacter;

  const targets = document.querySelectorAll(".characterCard");

  targets.forEach(characterCard => {
    characterCard.addEventListener("click", function () {
      let modalW = document.getElementById("modalW");
      let overlay = document.getElementById("overlay");

      for (let i = 0; i < characters.length; i++) {

        if (characters[i].id == characterCard.id) {
          document.getElementById("modalW").innerHTML =
            `<div>
              <div class="close" id="close"> 
               <img src="img/cerrar.png"></img>
              </div>   
              <div class="contModal">
               <div class="imgMoreInfo">
                <img src=${characters[i].image}></img>
               </div> 
                <div class="moreInfo">
                 <h2> ${characters[i].name} </h2>
                 <p> Status: ${characters[i].status} </p>
                 <p> Specie: ${characters[i].species} </p>
                 <p> Type: ${characters[i].type} </p>
                 <p> Gender: ${characters[i].gender} </p>
                 <p> Origin: ${characters[i].origin.name} </p>
                 <p> Location: ${characters[i].location.name} </p>
                </div>
               </div>
             </div>`

          overlay.style.display = "block";
          modalW.style.display = "block";

          let closeBtn = document.getElementsByClassName("close");
          for (let i = 0; i < closeBtn.length; i++) {
            closeBtn[i].addEventListener('click', () => {
              overlay.style.display = "none";
              modalW.style.display = "none";
            });
          }
        }
      }
    })
  })
}

showCharacters(dataCharacter)


/* ------ FILTRAR DATA (HU2) ------*/
/*Función que llama al select de especies y muestra el filtrado*/
function filt() {
  let optSpecies = document.getElementById("selectSpe");
  optSpecies.addEventListener("change", () => {

    let filtSpecie = filterCharacter(optSpecies.value, dataCharacter);
    showCharacters(filtSpecie)

    if (optSpecies.value == "all") {
      showCharacters(dataCharacter)
    }
  })
}
filt(filterCharacter)


/*------ ORDENAR DATA A-Z y Z-A (HU3) ------*/
/* Función que permite ordenar alfabéticamente de forma ascendente y descendente */
function orderData(e) {
  let option = e.target.value;
  if (option == "AZ" || "all") {
    showCharacters(sortDataAZ(dataCharacter))
  }
  if (option == "ZA") {
    showCharacters(sortDataZA(dataCharacter))
  }
}

/* Se agrega el evento change al select de ordenar */
let optOrder = document.getElementById("orderSelect");
optOrder.addEventListener("change", orderData);






















