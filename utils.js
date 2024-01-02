const apps = [
    {
        name: 'PlutoTV',
        id: '252585',
        streaming: false,
        status: 'closed'
    },
    {
        name: 'YouTube',
        id: '837',
        streaming: false,
        status: 'closed'
    }
];

const ipRokuDevice = 'http://192.168.5.115';

const streaming = {
    name: '',
    id: '',
    state: '',
    position: '',
    duration: '',
    error: '',
}

module.exports = {
    apps,
    streaming,
    ipRokuDevice
};
