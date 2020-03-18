// var number = 6
// var name = ""
// var bool = false;
// var thing = null;
// var steve
// console.log(number +"; "+typeof number)
// console.log(name +"; "+typeof name)
// console.log(bool +"; "+typeof bool)
// console.log(null +"; "+typeof null)
// console.log(steve)
let fireIcon = "http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png"
let fireBackground = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3n22fk-ca665f8a-9aa5-4508-9132-a0cc7b06c3b8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNlwvZDNuMjJmay1jYTY2NWY4YS05YWE1LTQ1MDgtOTEzMi1hMGNjN2IwNmMzYjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eA_wRwNxQiV4TEmP_yY1ZEauNMCFMTml6wDnx5BdmzQ"

let pokemonTypes = {
    fire = {
        icon: "http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png",
        background: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3n22fk-ca665f8a-9aa5-4508-9132-a0cc7b06c3b8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNlwvZDNuMjJmay1jYTY2NWY4YS05YWE1LTQ1MDgtOTEzMi1hMGNjN2IwNmMzYjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eA_wRwNxQiV4TEmP_yY1ZEauNMCFMTml6wDnx5BdmzQ",
    },
    electric = {
        icon: "",
        background: "", 
    },
    water = {
        icon: "",
        background: "",
    },
    grass = {
        icon: "https://www.pngkey.com/png/full/353-3532551_pokemon-snivy.png",
        background: "https://bit.ly/2whpa7m",
    },
}
let Charmander = {
    name: "Charmander",
    stage: 1,
    from: "Basic",
    HP: "50",
    details: `Lizard Pokemon. Length 2' 0", Weight: 19lbs.`,
    ability1:  `Scratch`,
    ability2: `Ember discard 1 Fire Energy card attached to Charmander in order to use this attack.`,
    type: "Fire",
    img: "https://www.serebii.net/swordshield/pokemon/004.png",
}
let Charmeleon = {
    name: "Charmeleon",
    stage: 2,
    from: "Charmander",
    HP: "80",
    details: `Flame Pokemon. Length 3' 7", Weight: 42lbs.`,
    ability1:  `Slash`,
    ability2: `Flamethrower Discard 1 Fire Energy Card attached to Charmeleon in order to use this attack`,
    type: "Fire",
    img: "https://i.pinimg.com/originals/37/83/b4/3783b47987aef2a15c1b24a10a8b434c.png",
}
let Charizard = {
    name: "Charizard",
    stage: 3,
    from: "Charmeleon",
    HP: "120",
    details: `Flame Pokemon. Length 5' 7", Weight: 200lbs.`,
    ability1:  `<font color="purple">Pok&eacute;mon Power: Energy Burn</font> As often as you like during your turn (<i>before your attack</i>), you may turn all Energy attached to Charizard into <img src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png" width="15px" height="15px">   Energy for the rest of the turn.
    This power can't be used if Charizard is Asleep, Confused, or Paralyzed`,
    ability2: `<b>Fire Spin</b> Discard 2 Enegy cards attached to Charizard in order to use this attack`,
    type: "Fire",
    img:"https://webstockreview.net/images/pokemon-clipart-charizard.png"
}
let cardStructure= ""
let pokemon = [Charmander, Charmeleon, Charizard]
let emptyCards= document.getElementById("pokemonfromjs")
for(let i=0; i < pokemon.length; i++){
    let currentPokemon= pokemon[i]
    let type=currentPokemon.type
    cardStructure= `
    <div background=" class="pokemoncard">
        <div class="cardLine1">
            <p class="paddingRight noMargin"><b>Evolves</b> from ${currentPokemon.from}</p>
            <p class="noMargin">Put ${currentPokemon.name} on the stage 1 card</p>
        </div>
        <div class="cardLine2">
            <p class="paddingRight noMargin">${currentPokemon.name}</p>
            <p class="noMargin">${currentPokemon.HP} HP</p>
        </div>
        <img class="mainImg " src=${currentPokemon.img}></img>
        <div class="cardLine3">
            <p class="info">${currentPokemon.details}</p>
        </div>
        <div class="cardline4">
            <p class="noMargin">
                ${currentPokemon.ability1}
            </p>
        </div>
        <div class="move">
        <div class="fire-grid">
            <img src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png" alt="fire" width="20px" height="20px">
            <img src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png" alt="fire" width="20px" height="20px">
            <img src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png" alt="fire" width="20px" height="20px">
            <img src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png" alt="fire" width="20px" height="20px">
        </div>
        <p class="movedescribe">${currentPokemon.ability2}</p>
        </div>
    </div>`
    let listItem= document.createElement("li")
    listItem.innerHTML= cardStructure
    emptyCards.appendChild(listItem)
}
