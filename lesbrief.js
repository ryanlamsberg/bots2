const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '790644618:AAE1UPR_wv20eHj3_PrH9fr-4kRZqpZVaW8' // Telegram Bot API token.
});

bot.on('/start', function (msg) {
  return bot.sendMessage(msg.from.id, "Hallo, ik ga u helpen door u te informeren over onze school!");
});
bot.on('/plattegrond 1', (msg) => {
    return bot.sendPhoto(msg.from.id, "images/beganerond.png");
});
bot.on('/versie', (msg) => {
    var arg = { replyToMessage: msg.message_id }
    return bot.sendMessage(msg.from.id, "Dit is versie 3.5", arg);
});
bot.on('/help', (msg) => {
    var arg = { replyToMessage: msg.message_id }
    return bot.sendMessage(msg.from.id, "hoi /wiebenje , /meme , /versie", arg);
});
bot.start();
