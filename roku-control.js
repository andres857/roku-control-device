const { RokuClient, Keys } = require('roku-client');
const { streaming  } = require('./utils');

// IP Roku Device
const client = new RokuClient('http://192.168.5.115');

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

// verificar 10 veces cada 2 segundos despues de que se habra la App, si esta el streaming
function streamingIsPlaying() {
    return new Promise((resolve, reject) => {
      let count = 0;
  
      function checkStreaming() {
        setTimeout(() => {
          client.mediaPlayer()
            .then((streaming) => {
              if (streaming.state === 'play') {
                resolve(streaming);
              } else {
                console.log('count', count);
                count++;
                if (count === 10) {
                  reject(new Error('Se ha alcanzado el límite de intentos sin encontrar el streaming en estado "play".'));
                } else {
                  checkStreaming(); // Llama recursivamente para realizar el siguiente chequeo
                }
              }
            })
            .catch((error) => {
              reject(error);
            });
        }, 2000);
      }
      checkStreaming(); // Inicia el proceso de verificación
    });
}

function streamingIsClose() {
  return new Promise((resolve, reject) => {
    let count = 0;

    function checkStreamingStop() {
      setTimeout(() => {
        client.mediaPlayer()
          .then((streaming) => {
            console.log(streaming);
            if (streaming.state === 'close') {
              resolve(
                updateObjectStreamingStop(streaming)
              );
            } else {
              console.log('count stop', count);
              count++;
              if (count === 10) {
                reject(new Error('Se ha alcanzado el límite de intentos sin encontrar el streaming en estado "stop".'));
              } else {
                checkStreamingStop(); // Llama recursivamente para realizar el siguiente chequeo
              }
            }
          })
          .catch((error) => {
            reject(error);
          });
      }, 500);
    }
    checkStreamingStop(); // Inicia el proceso de verificación
  });
}

async function restartStreaming(id){
  try {
    await closeStreaming();
    await openStreaming(id); 
  } catch (error) {
    console.error('Error: ', error);
  }
}

async function closeStreaming() {
  try {
    await client.keypress('HOME');
    console.log('CLOSING STREAMING');
    await streamingIsClose();
  } catch (error) {
   console.error('Error: ', error); 
  }
}

async function openStreaming(idApp){
    // comprobar si la app ya esta abierta, 252585
    const homeScreen = await client.active();
    if (homeScreen !== null) {
        const statusApp = await client.mediaPlayer();
        console.log(statusApp);
    }else{
        // Open Streaming
        try {
          console.log('home view');
          await client.launch(idApp);
          console.log('[ APP Streaming open ]');
          const data = await streamingIsPlaying();
          updateObjectStreamingPlay(data);
        } catch (error) {
          streaming.state = 'stop';
          console.erro('Error: ', error);
        }
    }
}
// openStreaming('252585');
restartStreaming('252585');
// closeStreaming();

module.exports = {
  openStreaming,
  restartStreaming,
  closeStreaming
}