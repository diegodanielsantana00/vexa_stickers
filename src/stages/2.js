const banco = require("../config/banco");
const sendMensage = require("../util/const");


function execute(user, msg, name, client) {

  if (msg.slice(0, 4) == '/9j/' || !msg || msg.slice(0, 11) == 'BEGIN:VCARD' ){
  setTimeout(async function() {
    await client.sendText(user, "👨‍🎨 Imagem convertida, Carregando figurinha...")
  }, 100);
  setTimeout(async function() {
  banco.db[user].stage = 1
  await client.sendImageAsSticker(user, user + '.jpg')
  .catch((erro) => {
    setTimeout(async function() {
    await client.sendText(user, "👨‍🎨 ERROR: Imagem não suportada, por favor tente novamente")
    }, 100);
  });
  await client.sendText(user, sendMensage.MENU.CLIENT)
}, 4000);
   return[]
  }


 return["👨‍🎨 O que você mandou não é uma imagem, mande uma imagem"]
}

exports.execute = execute;
