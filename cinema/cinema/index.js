const generoFilme = prompt("Qual genêro do filme que deseja assistir?")
const precoIngresso = Number(prompt("Qual é o preço do ingresso?"))
let lanche

if(generoFilme == "fantasia" && precoIngresso <= 15){
    lanche = prompt("Qual lanche você deseja comprar?")
    alert(`Bom filme! Aproveite o seu lanche: ${lanche}`)
}else{
    alert("Escolha outro filme!")
}

// const generoFilme = prompt("Qual genêro do filme que deseja assistir?")
// const precoIngresso = Number(prompt("Qual é o preço do ingresso?"))
// let lanche

// if(generoFilme == "fantasia" && precoIngresso <= 15){
//     lanche = prompt("Qual lanche você deseja comprar?")
//     console.log(`Bom filme! Aproveite o(a) seu ${lanche}`)
// }else{
//     console.log("Escolha outro filme!")
// }