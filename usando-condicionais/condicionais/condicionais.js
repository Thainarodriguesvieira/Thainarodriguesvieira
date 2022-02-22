let nomePiloto = prompt("Qual é o seu nome, piloto?")

let velocidadeNave = 0

let novaVelocidade = prompt("A que velocidade gostaria de acelerar a nave?")

let confirmaVelocidade = confirm("Estamos acelerando para: " + novaVelocidade + " km/s")

if(confirmaVelocidade){
    velocidadeNave = novaVelocidade
} 

if(velocidadeNave <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
}else if(velocidadeNave < 40){
    alert("Você está devagar, podemos aumentar mais")
}else if(velocidadeNave >= 40 && velocidadeNave < 80){
    alert("Parece uma boa velocidade para manter")
}else if(velocidadeNave >= 80 && velocidadeNave < 100){
    alert("Velocidade alta. Considere diminuir")
}else{
    alert("Velocidade perigosa! Controle automático forçado")
}

alert(`Piloto: ${nomePiloto}\nVelocidade atual: ${velocidadeNave} km/s`)


