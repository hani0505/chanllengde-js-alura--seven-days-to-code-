function adivinhação() {
   
    var numerorandom = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    var vidas = 3
    
    while (vidas > 0) {
        var chute = prompt(`Tentativa ${4 - vidas}: Digite um número`)

if (chute == numerorandom) {
    alert("Você acertou!!")
    return
    
} else {
    alert(`Tente novamente. Restam ${vidas - 1} tentativas.`)
    vidas--

}}
    alert(`A resposta é ${numerorandom}`)
}

adivinhação()



