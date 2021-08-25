const banco = require("../config/banco");
const sendMensage = require("../util/const");

let nome;

function execute(user, msg, contato) {
  pimeiraVezNome(contato)

  tempoDeInatividade = setTimeout(function() {
    banco.db[user].stage = 0
  }, 7200000);
  banco.db[user].stage = 1
  return [
    "👨‍🎨 Olá " + nome + "!", sendMensage.MENU.CLIENT,
  ];

}


function pimeiraVezNome(contato){
  if(contato){
    return nome = contato
  }else{
    return nome = "Tudo bem?"
  }
}

exports.execute = execute;
