const { RokuClient, Keys } = require('roku-client');

// Or, if the roku address is already known
const client = new RokuClient('http://192.168.2.10');

// obtiene las apps instaladas
// client.apps().then((apps)=>{
//     console.log(apps);
// })

// client.info().then((data)=>{
//     console.log(data);
// })

// muestra la app que esta activa
// client.active().then((runApp)=>{
//     console.log(runApp);
// });

// client.launch(837).then(() =>{
//     console.log('youtube open');
// }).catch( e => console.log(e))

// client.launch(252585)
//     .then(() =>{
//         console.log('plutoTV open');
//         client.mediaPlayer().then((status)=>{
//             console.log(status);
//         })
//         Keys.UP; // 'Left'
//     }).catch( e => console.log(e))

// client.keypress('VOLUME_UP')
//     .then(()=>{
//         console.log('VOLUME_UP   ')
//     }).catch(e => console.log(e))
    client
    .command()
    .up()
    .left()
    .select()
    .text('Breaking Bad')
    .enter()
    .send()
    .then(/* commands succeeded */)
    .catch((err) => {
      /* commands failed */
    });