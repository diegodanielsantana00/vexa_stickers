const banco = require("../config/banco");
const sendMensage = require("../util/const");


function execute(user, msg, name, client) {

  switch (msg){
    

    case "1": case "1️⃣": case "Um": case "Número um":
     banco.db[user].stage = 2;
      return [
        "👨‍🎨 Mande uma imagem para converter em figurinha"
      ]
  
    case "2": case "2️⃣": case "Dois": case "Número dois":
      return [
        "👨‍🎨DOAÇÕES\n\nPIX:", ""
      ];
  
    default:
      break;
  }

 
    return [
      "👨‍🎨 Não entendi oque você digitou",
      sendMensage.MENU.CLIENT
    ];  

}

exports.execute = execute;
