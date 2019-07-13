const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
    mensage = msg.content;
    
    switch (mensage) {
        case '!comandos':
            msg.channel.send(
                '**Para conhecer nossa FML invoque cada gadinho com os comandos:**\n' +
                '!akinn\n' +
                '!vini\n' +
                '!vlenks\n' +
                '!timba\n' +
                '!jeme\n' +
                '!sant\n' +
                '!estebo\n'
            );
            break;
        case '!akinn':
            msg.channel.send('Meu criador!');
            break;
        case '!vini':
            msg.channel.send('Pera aí que ele ja ta vindo!');
            break;
        case '!vlenks':
            msg.channel.send('Opa, achei um gadinho!');
            break;
        case '!timba':
            msg.channel.send('https://twitter.com/luizzstang');
            break;
        case '!jeme':
            msg.channel.send('Ta fumando um cigarrim!');
            break;
        case '!sant':
            msg.channel.send('menino neutro...');
            break;
        case '!estebo':
            msg.channel.send('Fiz uma promessa pra mim mesmo, nunca mais comer torresmo.')
        default:
            console.log('oieee');
    }
})

client.login('NTkxMzkxOTIzODU2NzM2MjU2.XQwG5g.LGd4el-UN15TMEJQavC1mDUKUJA')