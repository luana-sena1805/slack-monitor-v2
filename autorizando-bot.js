const { WebClient } = require('@slack/web-api')
const token = 'xoxb-aaaa' 
const channel = 'C0aaaaaaaaaW' 


const slack = new WebClient(token);

async function enviarmsg() {
    try {

        await slack.chat.postMessage({
            channel: channel,
            text: "Testando o bot! 🚀"
        });

        console.log("Mensagem enviada.");
    }

    catch(erro) {
        console.error('Erro', erro)
    }
}


require('dotenv').config();

const token = process.env.SLACK_TOKEN;
const channel = process.env.CHANNEL_ID;

enviarmsg();



