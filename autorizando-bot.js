const { WebClient } = require('@slack/web-api') //webclient é a classe de dentro da api slack que amos utilizar. WEBCLIENT AUTORIZA usar um bot existente sendo do slack que EU criei.
const token = 'xoxb-10909892926627-10914229002742-rqlCF2RWSZ0Uj3DSnoCMh4Jy' //var do token slack
const channel = 'C0ATX76H5DW' //var que armazena o id do canal 


const slack = new WebClient(token); //conecta um bot com autorizacao no slack. NEW webclient(token)

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



