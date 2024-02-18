

const adicao = (a,b) => parseFloat(a) + parseFloat(b)
const sub = (a,b) => parseFloat(a) - parseFloat(b)
const multi = (a,b) => parseFloat(a) * parseFloat(b)
const divisao = (a,b) => parseFloat(a) / parseFloat(b)

while(true) {
    const pergunta = prompt("Você quer continuar na cauculadora? aperte ENTER se não digite SAIR")
    if(pergunta == ""){
        conta = prompt('Selecione o número correspondente a operação que deseja realizar \n 1- Soma\n 2- subtração \n 3- Multiplicação \n 4- Divisãa')
        const num1 = prompt("Qual o primeiro numero?")
        const num2 = prompt("Qual o segundo número")
        if(isNaN(num1) || isNaN(num2)){
            alert("Escolha um número")
            continue
        }
    switch (conta) {
        case '1':
            resultado = adicao(num1, num2)
            alert(`O resultado da soma de ${num1} e ${num2} é ${resultado}`)
            break;
            case '2':
             resultado = sub(num1, num2)
            alert(`O resultado da subtração de ${num1} e ${num2} é ${resultado}`)
            break;
            case '3':
            resultado = multi(num1, num2)
            alert(`O resultado da multiplicação de ${num1} e ${num2} é ${resultado}`)
            break;
            case '4':
                resultado = divisao(num1, num2)
                alert(`O resultado da divisão de ${num1} e ${num2} é ${resultado}`)
                break;
        default:
            break;
    }
} else if (pergunta.toLowerCase() === "sair") {
    alert("Até a proxima")
    break
}
   

}
