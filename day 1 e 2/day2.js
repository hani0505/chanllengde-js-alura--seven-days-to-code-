// Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?
// "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"


let nome = prompt("Qual seu nome?")

let idade = prompt("Quantos anos você têm?")

let lengs = prompt("qual sua linguagem de progamação")

alert(`Legal! ${nome}, você têm ${idade} e já está aprendendo ${lengs}`)

function fazerPergunta() { 
const resposta = prompt(`você está gostando de estudar ${lengs}? Responda [1] para sim e  [2] para não`)

if (resposta == 1) {
    alert('Que massa! Boa sorte!');
}

else if (resposta == 2) {
    alert('Que pena, mas continue! Vai conseguir')
}

else {
    
        alert("Não entendi, vamos voltar a pergunta até responde-lá")
        fazerPergunta()
    
}
}
fazerPergunta();

// para acionar a função sem ação previamente, como clique de botão, utlizamos o retorno da função fora dela para aciona-la independente de tudo