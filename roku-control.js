const { RokuClient, Keys } = require('roku-client');
const { streaming  } = require('./utils');

// IP Roku Device
const client = new RokuClient('http://192.168.2.10');

function updateObjectStreamingPlay(data){
  streaming.name = data.plugin.name;
  streaming.id = data.plugin.id;
  streaming.state = data.state;
  streaming.position = data.position;
  streaming.duration = data.duration;
  streaming.error = data.error;
  console.log(streaming);
}

function updateObjectStreamingStop(data){
  streaming.name = '';
  streaming.id = '';
  streaming.state = data.state;
  streaming.position = '';
  streaming.duration = '';
  streaming.error = data.error;
  console.log(streaming);
}

function isStreamingActive(maxAttempts, interval) {
  return new Promise(async (resolve, reject) => {
    let count = 0;

    async function checkStreaming() {
        const streaming = await client.mediaPlayer();

        if (streaming.state === 'play') {
          resolve(true);
        } else {
          console.log('count open Streaming ', count);
          count++;

          if (count === maxAttempts) {
            reject(false);
          } else {
            // Llama recursivamente para realizar el siguiente chequeo después del intervalo
            setTimeout(checkStreaming, interval*1000);
          }
        }
    }
    // Inicia el proceso de verificación
    checkStreaming();
  });
}

function isStreamingClose(maxAttempts, interval) {
  return new Promise(async (resolve, reject) => {
    let count = 0;

    async function checkStreaming() {
        const streaming = await client.mediaPlayer();
        console.log('------------');
        console.log(streaming);
        console.log('------------');
        if (streaming.state === 'close' || streaming.state === 'none') {
          console.log("Streaming CLOSE");
          resolve(true);
        } else {
          console.log('count close Streaming ', count);
          count++;

          if (count === maxAttempts) {
            reject(false);
          } else {
            // Llama recursivamente para realizar el siguiente chequeo después del intervalo
            setTimeout(checkStreaming, interval*1000);
          }
        }
    }
    // Inicia el proceso de verificación
    checkStreaming();
  });
}

async function restartStreaming(id){
  try {
    const close = await closeStreaming();
    if (close){
      await openStreaming(id);
    }
  } catch (error) {
    console.error('Error: ', error);
  }
}

async function closeStreaming() {
  try {
    await client.keypress('HOME');
    console.log('CLOSING STREAMING');
    const stateStreaming = await isStreamingClose(30,3);
    return stateStreaming;
  } catch (error) {
   console.error('Error: ', error); 
  }
}

async function openStreaming(idApp){
    // comprobar si la app ya esta abierta, 252585
    const homeScreen = await client.active();
    // console.log(homeScreen);
    if (homeScreen === null) {
        // Open Streaming
          console.log('HOME VIEW');
          try {
            await client.launch(idApp);
            const data = await isStreamingActive(30, 3);
            console.log(data);
          } catch (error) {
            console.error(error.message)
          }
          
    }else{
        console.log('El streaming ya esta abierto 0');
        const statusApp = await client.mediaPlayer();
        console.log(statusApp);
    }
}
// openStreaming(252585);
restartStreaming('252585');
// closeStreaming();

module.exports = {
  openStreaming,
  restartStreaming,
  closeStreaming
}