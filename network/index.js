const WebSocket = require('ws');
const idDevice = '0001';

const socket = new WebSocket('ws://localhost:5005'); // Asegúrate de usar el mismo puerto que tu servidor

// Evento cuando la conexión se establece con éxito
socket.on('open', () => {
  console.log('Conexión establecida con el servidor.');

  // Enviar un mensaje al servidor
  socket.send(JSON.stringify({
    id: idDevice,
  }));
});

// Evento para manejar mensajes recibidos del servidor
socket.on('message', (message) => {
  console.log(`Mensaje del servidor: ${message}`);
});

// Evento para manejar cierre de conexión
socket.on('close', () => {
  console.log('Conexión cerrada con el servidor.');
});

// Evento para manejar errores
socket.on('error', (error) => {
  console.error('Error en la conexión:', error.message);
});
