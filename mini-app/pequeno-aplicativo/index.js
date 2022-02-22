let entradaDataPartida = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let dataDePartida = moment(entradaDataPartida, "DD/MM/YYYY" )

let hoje = moment()

let diferencaData = hoje - dataDePartida

let opcaoEscolhida = prompt("Escolha como gostaria de exibir o tempo de partida: \n1-Segundos\n2-Minutos\n3-Horas\n4-Dias")

if(opcaoEscolhida == 1){
    let segundosDePartida = Math.round(diferencaData / 1000)
    alert(`Tempo de voo: ${segundosDePartida} segundos`)
}else if(opcaoEscolhida == "2"){
    let minutosDePartida = Math.round(diferencaData / 1000 / 60)
    alert(`Tempo de voo: ${minutosDePartida} minutos`)
}else if(opcaoEscolhida == "3"){
    let horasDePartida = Math.round(diferencaData / 1000 / 3600)
    alert(`Tempo de voo: ${horasDePartida} horas`)
}else if(opcaoEscolhida == "4"){
    let diasDePartida = Math.round(diferencaData / 1000 / 3600 / 24)
    alert(`Tempo de voo: ${diasDePartida} dias`)
}else{
    alert("Opção Inválida")
}