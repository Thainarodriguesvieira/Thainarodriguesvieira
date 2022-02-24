alert("Seja bem vindo ao ocultador de nome")

let nomeNave = prompt("Digite o nome da nave")

let caracterSubstituivel = prompt("Qual caracter deseja substituir?")

let caracterSubstituto = prompt("E por qual caracter deseja substituir?")

let novaNave = ""

for (let i = 0; i < nomeNave.length; i++) {
    if (nomeNave[i] == caracterSubstituivel) {
        novaNave += caracterSubstituto
    } else {
        novaNave += nomeNave[i]
    }
}

alert(`O novo nome da nave é: ${novaNave}`)