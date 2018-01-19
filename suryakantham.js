const TeleBot = require('telebot');
const bot = new TeleBot('535241451:AAFdc2dpzWl9Q0rlEuRamlCwxOuvbbmlI20');
const bannedWords = ['fuck','asshole','ysr','jagan','chandrababu','chandrababu naidu','chandra babu naidu','lokesh','tdp','kcr','ktr','trs','free voucher','freevoucher','rajasekhar reddy','చంద్రబాబు','cheppandi'];

bot.on('text', (msg) => {
    bannedWords.forEach((word) => {
        if(msg.text.includes(word)) {
            msg.reply.text('Your message might be in violation of the MANAM rules & regulations. MANAM wishes to keep its forums free of politics & abuse. Thank you');
        }
    });
});

bot.start();

bot.on('/cheppandi', (msg) => {
    msg.reply.text('Your message might be in violation of the MANAM rules & regulations. MANAM wishes to keep its forums free of politics & abuse. Thank you');
  });



