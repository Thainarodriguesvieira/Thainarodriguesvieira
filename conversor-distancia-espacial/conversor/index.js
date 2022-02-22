let distanceInLy = prompt("Qual a distância em anos-luz?")

let chosenOption = prompt("Para qual unidade deseja converter? \n1-Parsec(pc) \n2-Unidade astronômica(AU) \n3-Quilômetros(km)\n\nDigite o número da opção desejada")

let choseUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        choseUnity = "Parsec"
        convertedDistance = distanceInLy * 0.306601
        break
    case "2":
        choseUnity  = "Unidade astronomica"
        convertedDistance = distanceInLy * 63241.1
        break
    case "3":
        choseUnity  = "Quilômetros"
        convertedDistance  = distanceInLy * 9.5 * Math.pow(10, 12)
        break
    default:
        choseUnity  = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}
alert("Distância em anos-luz: " + distanceInLy + "\n" +  choseUnity + ": " + convertedDistance)

