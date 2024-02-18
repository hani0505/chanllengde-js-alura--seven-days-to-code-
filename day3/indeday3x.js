function jogoCarreira(){
    const pergunta1 = prompt("Olá, qual carreira você quer seguir? /n Front end (1) ou back-end (2)")

    if (pergunta1 == 1) {
        const FrameFront = prompt("Que legal, você quer estudar React(1) ou Vue(2)")


    if (FrameFront == 1) {
        alert("Que legal, vai fundoo!")
    } else if (FrameFront == 2) {
        alert ("Essa é uma boa escolha também!")
    } else {
        alert("Não entendi sua resposta, reinicie") ;
       return;
    }
    
    } else if (pergunta1 == 2) {
        FrameBack = alert("Back-end foi escolhida hmm n/ Você quer aprender C#(1) ou Java(2)")

        if(FrameBack == 1){
            alert("boa escolha de linguagem originada em C")
        }
        else if (FrameBack == 2) {
            alert("Linguagem meio difícil ein, boa sorte!")
        }
        else {
            alert("Não entendi, reinicie")
        return
    }
}
else{
    alert("ops, reiniciando...")
    jogoCarreira()
}
    let maisLengs = true
    while(maisLengs) {
        const mais = prompt("Quais linguagem no total você gostaria de aprender? Digite as linguagens")
    alert(`Que legal, ${mais} é uma ótima linguagem`)

    const add = prompt ("tem mais outra que gostaria de aprender? ok ou cancel")
    maisLengs = add.toLocaleLowerCase == "ok"  
    }
    

}

jogoCarreira()