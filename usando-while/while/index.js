let nomeNave = prompt("Qual é o nome da nave?")
let dobraEspacial = prompt("Deseja entrar em dobra espacial? \n1-Sim \n2-Não")
let dobra = 0

while(dobraEspacial == 1){
    dobra ++ 
    dobraEspacial = prompt("Deseja realizar a próxima dobra? \n1-Sim \n2-Não")
}
alert(`Nave:${nomeNave}\nFez: ${dobra} dobra(s)`)