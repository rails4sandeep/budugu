const TeleBot = require('telebot');
const bot = new TeleBot('535241451:AAFdc2dpzWl9Q0rlEuRamlCwxOuvbbmlI20');
const bannedWords = ['fuck','asshole','ysr','jagan','chandrababu','chandrababu naidu','chandra babu naidu','lokesh','tdp','kcr','ktr','trs','free voucher','freevoucher','rajasekhar reddy','చంద్రబాబు','cheppandi'];
const favoriteWords = ['opportunity','openings','job','jobs','opening','role','roles'];

bot.on('text', (msg) => {
    bannedWords.forEach((badWord) => {
        if(msg.text.includes(badWord)) {
            msg.reply.text('Your message might be in violation of the MANAM rules & regulations. MANAM wishes to keep its forums free of politics & abuse. Thank you');
        }
    });
    
    favoriteWords.forEach((goodWord) => {
        if(msg.text.includes(goodWord)) {
            msg.reply.text('Thanks for sharing this opportunity with MANAM community!');
        }
    });
});

bot.start();

bot.on('/cheppandi', (msg) => {
    msg.reply.text('Your message might be in violation of the MANAM rules & regulations. MANAM wishes to keep its forums free of politics & abuse. Thank you');
  });



