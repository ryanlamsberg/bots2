const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '790644618:AAE1UPR_wv20eHj3_PrH9fr-4kRZqpZVaW8' // Telegram Bot API token.
});

bot.on('/start', function (msg) {
  return bot.sendMessage(msg.from.id, "Hello world!");
});
bot.on('/wiebenje', function (msg) {
  return bot.sendMessage(msg.from.id, "Ik ben RyxnBot, de bot die Ryan gebruikt om zijn badge te halen!");
});
bot.on('/meme', (msg) => {
    return bot.sendPhoto(msg.from.id, "images/meme.png");
});
bot.start();
