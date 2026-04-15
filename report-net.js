const axios = require('axios');
const { WebClient } = require('@slack/web-api'); 
require('dotenv').config();

const token = process.env.SLACK_TOKEN;
const channel = process.env.CHANNEL_ID;
const slack = new WebClient(token)


let internetrue = true; //net ativa

async function verificarnet() {
    try{
        await axios.get('htps://www.google.com', {timeout: 3000}); //alteração aqui para mudar o result

        console.log('internet ok');

        if (!internetrue) {
            internetrue = true;

            await slack.chat.postMessage({
                channel: channel,
                text: '🟢 Internet voltou!'
            });            
        }
    } catch (erro) {
        console.log('Sem internet...');

        if (internetrue) {
            internetrue = false;

            await slack.chat.postMessage({
                channel: channel,
                text: '🔴 Internet caiu!'
            });
        }
    }
    
}

setInterval(verificarnet, 60000);
