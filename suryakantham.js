//declarations
const TeleBot = require('telebot');
const bot = new TeleBot('535241451:AAFdc2dpzWl9Q0rlEuRamlCwxOuvbbmlI20');
const bannedWords = ['fuck','asshole','ysr','jagan','chandrababu','chandrababu naidu','chandra babu naidu','lokesh','tdp','kcr','ktr','trs','free voucher','freevoucher','rajasekhar reddy','చంద్రబాబు','rahul gandhi', 'bjp', 'congress'];
const favoriteWords = ['opportunity','openings','job','jobs','opening','role','roles','thank'];
let goodWordFlag = true;
let badWordFlag = true;

//bot responses
bot.on('text', (msg) => {

    cheppandi(msg);
    bannedWordsWarning(msg,bannedWords);
    goodWordsAppreciation(msg, favoriteWords);
    sankrantiSpecial(msg);

    goodWordFlag = true;
    badWordFlag = true;
});

//start the bot
bot.start();

//evarumeeru command response
bot.on('/evarumeeru', (msg) => {
    aboutMe(msg);
  });


//methods
let cheppandi = (msg) => {
    if(msg.text.toLowerCase().includes('cheppandi')) {
        msg.reply.text('వారానికి ఒకసారి వండి ఫ్రిడ్గిలో పడేసి అదే పనిగా తినకుండా రోజూ శుభ్రంగా వంట చేసుకుని తినండి. ఆరోగ్యంగా ఉంటారు. అంతకన్నా చెప్పడానికి ఏమి లేదు. పని చూసుకోండి!');
    }
};  

let bannedWordsWarning = (msg, bannedWords) => {
    bannedWords.forEach((badWord) => {
        if(msg.text.toLowerCase().includes(badWord) && badWordFlag) {
            msg.reply.text('Your message might be in violation of the MANAM rules & regulations. MANAM wishes to keep its forums free of politics & clean. Thank you');
            badWordFlag = false;
        }
    });
};

let goodWordsAppreciation = (msg, favoriteWords) => {
    favoriteWords.forEach((goodWord) => {
        if(msg.text.toLowerCase().includes(goodWord) && goodWordFlag) {
            msg.reply.text("👍");
            goodWordFlag = false;            
        }
    });
};

let sankrantiSpecial = (msg) => {
    if(msg.text.toLowerCase().includes('manam sankranti sambaraalu')) {
        msg.reply.text('Manam Sankranti Sambaraalu 28 Jan 2018 Redum Centre Wentworthville lo jarigayi. Photolu ivigo' +
         'https://photos.app.goo.gl/jR4VPkeGgVXoPiON2');
    }
};

let aboutMe = (msg) => {
    msg.reply.text('I am the official moderator of MANAM telegram group. I will take care of the group. I appreciate good posts & inform when posts are in violation of MANAM policies');
};


