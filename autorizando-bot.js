const { WebClient } = require('@slack/web-api')
const token = 'xoxb-10909892926627-10914229002742-rqlCF2RWSZ0Uj3DSnoCMh4Jy' 
const channel = 'C0ATX76H5DW' 


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



