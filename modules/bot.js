const botBuilder = require('claudia-bot-builder');

module.exports = botBuilder( message => `Olá, seu pedido foi: ${message.text}`);