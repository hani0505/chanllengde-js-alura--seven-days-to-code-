let frutas = []
let laticinios = []
let gelados = []
let outros = []
let nome = []

let pergunta = prompt("Voce deseja adicionar algum alimento? \n 1 para SIM \n 2 para NÃO")
while (pergunta != "1" && pergunta != "2") {
    pergunta = prompt("Opção Inválida! Digite 1 para SIM ou 2 para NÃO.");
}
if (pergunta == "1"){
    while(pergunta == "1") {
   let nome = prompt("Qual produto quer adicionar? \n(*Digite um de cada vez)")
    
   switch(prompt("Qual a categoria do produto? \n1 - Fruta, \n2 - Laticínios, \n3 - gelados, \n4 - Outros, ."))
        {
            case "1":
        frutas.push(nome);
        break;
      case "2":
        laticinios.push(nome);
        break;
      case "3":
        gelados.push(nome);
        break;
      case "4":
        outros.push(nome);
        break;
      
      default:
        alert("Categoria não existe!");
        }
        pergunta = prompt(
            "Adicionar mais produtos? \nDigite 1 para SIM ou 2 para NÃO."
          ); while (pergunta != 1 && pergunta != 2) {
            pergunta = prompt(
              "Opção Inválida! Digite 1 para SIM ou 2 para NÃO."
            );
          }
       
        

    }
     
    alert(
        "Sua Lista de Compras: \nFrutas: " +
        frutas +
        "\n" +
        "Laticínios: " +
        laticinios +
        "\n" +
        "Gelados: " +
        gelados +
        "\n" +
        "Outros: " +
        outros
      )


      let remover =  prompt("deseja remover algo?")
     let grande = remover.toLocaleLowerCase()
      if(grande  != grande || grande == "") {
        // while(grande != "sim" || remover == "") {
        //   alert("não entendi sua pergunta")
        //   grande = prompt("Deseja remover algo da lista?")
        // }
        alert("incorreto")
      
      }
        else {
        let remover = prompt(`sua lista tem \n 
        frutas:${frutas} \n
        laticinios:${laticinios} \n
        gelado: ${gelados} \n
        outros: ${outros} \n
        selecione para excluir`)

       
        if(frutas.indexOf(remover) != -1){
          frutas.splice(frutas.indexOf(remover), 1);
          alert(`O item ${remover} foi removido com sucesso!`)
        } else if(laticinios.indexOf(remover) != -1){
          laticinios.splice(laticinios.indexOf(remover), 1);
          alert(`O item ${remover} foi removido com sucesso!`)
        } else if (gelados.indexOf(remover) != -1){
          gelados.splice(gelados.indexOf(remover), 1);
          alert(`O item ${remover} foi removido com sucesso!`)
        } else if (outros.indexOf(remover) != -1){
          outros.splice(outros.indexOf(remover), 1);
          alert(`O item ${remover} foi removido com sucesso!`)
        } else {
          alert(`Não foi possível encontrar o item dentro da lista!`)
        }
       
        alert(
          "Sua Lista de Compras: \nFrutas: " +
          frutas +
          "\n" +
          "Laticínios: " +
          laticinios +
          "\n" +
          "Gelados: " +
          gelados +
          "\n" +
          "Outros: " +
          outros
        )
      }

}
