const list=document.getElementById("list")
const names=document.getElementById("names")
const name=document.getElementById("")
const type=document.getElementById("type")
const height=document.getElementById("height")
const weight=document.getElementById("weight")
const description=document.getElementById("description")

const P = new Pokedex.Pokedex()(async () => {
    const golduck = await P.getPokemonByName("golduck")
    console.log(golduck)
  })()
