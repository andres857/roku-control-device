const { RokuClient } = require('roku-client');

const client = new RokuClient('http://192.168.1.227');


// RokuClient.discoverAll().then((clients) => {
//     console.log(clients.map((c) => c.ip));
//     // ['http://192.168.1.17:8060', 'http://192.168.1.18:8060', ...]
// });

async function getAppsInstaller(){
    const apps = await client.apps();
    console.log(apps);
}

async function getAppActive(){
    const active = await client.active();
    console.log(active);
}

function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time*1000);
    });
}

async function launchUnivisionApp(){
    console.log('launch Univision APP');
    return new Promise (async (resolve, reject)=>{
        await client.launch(122460);        
        await delay(7);
        console.log('Univision APP open');
        resolve(true);
    })
}

async function closeStreaming() {
    return new Promise(async (resolve,reject)=>{
        await client.launch(562859);

        await delay(7);
        console.log('HomeView');
        resolve(true);
    })
}

function commands(){
    client.command().down().select().wait(1000).select().send()
        .then(()=>{
            console.log('La emision ha comenzado');
        })
        .catch( e => console.log(e))
}

async function statusApp(){
const status = await client.mediaPlayer();
console.log(status);
}

async function restartBroadcast(){
    const home = await closeStreaming();
    await getAppActive();
    const startApp = await launchUnivisionApp();
    commands();
    setTimeout(async () => {
        await getAppActive();

    }, 5000);
}

// restartBroadcast();
// getAppActive();

module.exports = {
    restartBroadcast,
    getAppActive,
}