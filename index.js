const TeleBot = require('telebot');
const bot = new TeleBot('547814548:AAHTmQHNMzDxNPGHb0q4Z2wsLI-eiavtbHY');

//bot.on('text', (msg) => msg.reply.text(msg.text));

bot.on('text', (msg) => {
    if(msg.text.toLowerCase().includes('budugu')) {
        msg.reply.text('thank you andi');
    }
});

bot.on('photo', (msg) => msg.reply.text('good one ' + msg.from.first_name + ' garu'));

bot.start();


bot.on('newChatMembers', (msg) => msg.reply.text('Welcome '  + msg.new_chat_members[0].first_name + ' to MANAM - Mana Australia Telugu Association. Please share a small introduction about you to the group. You can find more information about MANAM at www.manam-au.org'));

// bot.on('newChatMembers', (msg) => {
//   return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
// });

// bot.on('text', (msg) => {
//   return bot.sendMessage('text', (msg) => msg.reply.text(msg.from.first_name));
// });
